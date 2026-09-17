<?php
// Minimal contact endpoint – same field names as the live site.
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'method']);
    exit;
}

// Honeypot: bots fill "website"
if (!empty($_POST['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$clean = static function (string $key, int $max = 500): string {
    $v = trim((string)($_POST[$key] ?? ''));
    $v = str_replace(["\r", "\n"], ' ', $v);
    return mb_substr(strip_tags($v), 0, $max);
};

$vorname   = $clean('vorname', 80);
$nachname  = $clean('nachname', 80);
$telefon   = $clean('telefon', 40);
$betreff   = $clean('betreff', 120);
$nachricht = mb_substr(strip_tags(trim((string)($_POST['nachricht'] ?? ''))), 0, 4000);

if ($vorname === '' || $nachname === '' || $telefon === '' || $betreff === '' || $nachricht === '') {
    http_response_code(422);
    echo json_encode(['ok' => false, 'error' => 'fields']);
    exit;
}

$to      = 'info@garage-markaj.ch';
$subject = '=?UTF-8?B?' . base64_encode('Website-Anfrage: ' . $betreff) . '?=';
$body    = "Vorname:  $vorname\nNachname: $nachname\nTelefon:  $telefon\nBetreff:  $betreff\n\nNachricht:\n$nachricht\n";
$headers = "From: website@garage-markaj.ch\r\nReply-To: $to\r\nContent-Type: text/plain; charset=UTF-8\r\n";

$sent = @mail($to, $subject, $body, $headers);

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'mail']);
    exit;
}

echo json_encode(['ok' => true]);
