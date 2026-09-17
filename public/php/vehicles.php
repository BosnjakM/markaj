<?php
/**
 * Vehicle feed for the Occasionen page.
 *
 * AutoScout24 only allows its HCI iframe on garage-markaj.ch, so we fetch the
 * dealer's public listing server-side, extract the vehicle JSON that Next.js
 * embeds in the page, and serve it as a small cached JSON feed.
 */
header('Content-Type: application/json; charset=utf-8');
// Never let browsers cache an error response; success responses set a short max-age below.
header('Cache-Control: no-store');

const DEALER      = '3904';
const BASE        = 'https://www.autoscout24.ch/de/hci/v2/' . DEALER . '/search';
const TTL         = 1800; // 30 min
const MAX_PAGES   = 10;
const UA          = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36';

$cacheDir  = __DIR__ . '/cache';
$cacheFile = $cacheDir . '/vehicles.json';
if (!is_dir($cacheDir)) {
    @mkdir($cacheDir, 0775, true);
}
if (!is_writable($cacheDir)) {
    $cacheFile = sys_get_temp_dir() . '/markaj-vehicles.json';
}

function serveCache(string $file): void
{
    header('Cache-Control: public, max-age=60');
    readfile($file);
    exit;
}

// Fresh cache → serve directly.
if (is_file($cacheFile) && (time() - filemtime($cacheFile)) < TTL && !isset($_GET['refresh'])) {
    serveCache($cacheFile);
}

function fetchPage(int $page): ?string
{
    $ch = curl_init(BASE . '?page=' . $page);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_TIMEOUT        => 15,
        CURLOPT_USERAGENT      => UA,
        CURLOPT_HTTPHEADER     => ['Accept-Language: de-CH,de;q=0.9', 'Accept: text/html'],
    ]);
    $html = curl_exec($ch);
    $code = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    return ($html !== false && $code === 200) ? $html : null;
}

/**
 * Decode every `self.__next_f.push([1,"…"])` chunk and concatenate.
 * Chunks are >100 KB, so we scan for the closing `"])` instead of using a
 * regex (which silently hits PCRE's backtracking limit).
 */
function decodePayload(string $html): string
{
    $marker = 'self.__next_f.push([1,"';
    $all    = '';
    $pos    = 0;
    while (($start = strpos($html, $marker, $pos)) !== false) {
        $start += strlen($marker);
        $end = $start;
        // find the first unescaped `"])`
        while (($end = strpos($html, '"])', $end)) !== false) {
            $bs = 0;
            for ($i = $end - 1; $i >= $start && $html[$i] === '\\'; $i--) {
                $bs++;
            }
            if ($bs % 2 === 0) {
                break;
            }
            $end++;
        }
        if ($end === false) {
            break;
        }
        $chunk   = substr($html, $start, $end - $start);
        $decoded = json_decode('"' . $chunk . '"');
        if (!is_string($decoded)) {
            $decoded = str_replace(['\\"', '\\\\'], ['"', '\\'], $chunk);
        }
        $all .= $decoded;
        $pos  = $end + 3;
    }
    return $all;
}

/** Return the JSON object starting at `$start` (brace matching that respects strings). */
function sliceObject(string $s, int $start): ?string
{
    $len = strlen($s);
    $depth = 0;
    $inStr = false;
    for ($i = $start; $i < $len; $i++) {
        $c = $s[$i];
        if ($inStr) {
            if ($c === '\\') {
                $i++;
            } elseif ($c === '"') {
                $inStr = false;
            }
            continue;
        }
        if ($c === '"') {
            $inStr = true;
        } elseif ($c === '{') {
            $depth++;
        } elseif ($c === '}') {
            $depth--;
            if ($depth === 0) {
                return substr($s, $start, $i - $start + 1);
            }
        }
    }
    return null;
}

/** Extract vehicle objects (real vehicles have a string bodyType, dictionaries don't). */
function extractVehicles(string $payload): array
{
    $needle = '{"bodyType":"';
    $out    = [];
    $pos    = 0;
    while (($start = strpos($payload, $needle, $pos)) !== false) {
        $raw = sliceObject($payload, $start);
        if ($raw === null) {
            break;
        }
        $pos = $start + strlen($raw);
        if (strpos($raw, '"versionFullName"') === false) {
            continue;
        }
        $v = json_decode($raw, true);
        if (!is_array($v) || empty($v['id'])) {
            continue;
        }
        $images = [];
        foreach ((array) ($v['images'] ?? []) as $img) {
            if (!empty($img['url'])) {
                $images[] = $img['url'];
            }
        }
        $out[(int) $v['id']] = [
            'id'                => (int) $v['id'],
            'make'              => $v['make']['name'] ?? '',
            'model'             => $v['model']['name'] ?? '',
            'version'           => $v['versionFullName'] ?? '',
            'price'             => $v['price'] ?? null,
            'listPrice'         => $v['listPrice'] ?? null,
            'mileage'           => $v['mileage'] ?? null,
            'year'              => $v['firstRegistrationYear'] ?? null,
            'month'             => !empty($v['firstRegistrationDate']) ? (int) substr($v['firstRegistrationDate'], 5, 2) : null,
            'fuel'              => $v['fuelType'] ?? null,
            'hp'                => $v['horsePower'] ?? null,
            'kw'                => $v['kiloWatts'] ?? null,
            'transmission'      => $v['transmissionTypeGroup'] ?? ($v['transmissionType'] ?? null),
            'body'              => $v['bodyType'] ?? null,
            'category'          => $v['vehicleCategory'] ?? null,
            'condition'         => $v['conditionType'] ?? null,
            'images'            => $images,
            'url'               => 'https://www.autoscout24.ch/de/hci/v2/' . DEALER . '/detail/' . (int) $v['id'],
        ];
    }
    return $out;
}

// Only one request refreshes at a time; the others wait and then read the cache.
$lock = fopen($cacheFile . '.lock', 'c');
if ($lock) {
    flock($lock, LOCK_EX);
    if (is_file($cacheFile) && (time() - filemtime($cacheFile)) < TTL && !isset($_GET['refresh'])) {
        flock($lock, LOCK_UN);
        serveCache($cacheFile);
    }
}

$vehicles = [];
for ($page = 0; $page < MAX_PAGES; $page++) {
    $html = fetchPage($page);
    if ($html === null) {
        break;
    }
    $found = extractVehicles(decodePayload($html));
    $new   = array_diff_key($found, $vehicles);
    if (!$new) {
        break;
    }
    $vehicles += $found;
    if (count($found) < 20) {
        break;
    }
}

if (!$vehicles) {
    // Nothing fetched → serve stale cache if we have one, else an error.
    if (is_file($cacheFile)) {
        header('X-Vehicles-Stale: 1');
        readfile($cacheFile);
        exit;
    }
    http_response_code(502);
    echo json_encode(['ok' => false, 'error' => 'upstream', 'vehicles' => []]);
    exit;
}

$json = json_encode([
    'ok'        => true,
    'count'     => count($vehicles),
    'fetchedAt' => date('c'),
    'source'    => BASE,
    'vehicles'  => array_values($vehicles),
], JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

@file_put_contents($cacheFile, $json, LOCK_EX);
header('Cache-Control: public, max-age=60');
echo $json;
