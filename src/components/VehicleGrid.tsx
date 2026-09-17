import { Car, ExternalLink } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export type Vehicle = {
  id: number;
  make: string;
  model: string;
  version: string;
  price: number | null;
  listPrice: number | null;
  mileage: number | null;
  year: number | null;
  month: number | null;
  fuel: string | null;
  hp: number | null;
  kw: number | null;
  transmission: string | null;
  body: string | null;
  category: string | null;
  images: string[];
  url: string;
};

const AUTOSCOUT_URL = "https://www.autoscout24.ch/de/hci/v2/3904/search";

const FUEL: Record<string, string> = {
  diesel: "Diesel",
  petrol: "Benzin",
  gasoline: "Benzin",
  electric: "Elektro",
  hybrid: "Hybrid",
  "mhev-petrol": "Mild-Hybrid Benzin",
  "mhev-diesel": "Mild-Hybrid Diesel",
  "hev-petrol": "Voll-Hybrid Benzin",
  "hev-diesel": "Voll-Hybrid Diesel",
  "phev-petrol": "Plug-in-Hybrid Benzin",
  "phev-diesel": "Plug-in-Hybrid Diesel",
  cng: "Erdgas (CNG)",
  lpg: "Autogas (LPG)",
  hydrogen: "Wasserstoff",
};

const TRANSMISSION: Record<string, string> = {
  automatic: "Automat",
  manual: "Manuell",
  "semi-automatic": "Halbautomat",
};

const chf = (n: number) => `CHF ${n.toLocaleString("de-CH").replace(/’|’|,/g, "'")}.–`;
const km = (n: number) => `${n.toLocaleString("de-CH").replace(/’|’|,/g, "'")} km`;
const label = (map: Record<string, string>, key: string | null) =>
  key ? map[key] ?? key.replace(/-/g, " ").replace(/^\w/, (c) => c.toUpperCase()) : null;

type Props = {
  limit?: number;
  showFilter?: boolean;
};

export function VehicleGrid({ limit, showFilter = false }: Props) {
  const [vehicles, setVehicles] = useState<Vehicle[] | null>(null);
  const [error, setError] = useState(false);
  const [make, setMake] = useState("");

  useEffect(() => {
    let alive = true;
    const load = (): Promise<{ vehicles?: Vehicle[] }> =>
      fetch("/php/vehicles.php", { cache: "no-store" }).then((r) => (r.ok ? r.json() : Promise.reject(r.status)));
    // one retry – the first request after a cache expiry can briefly fail
    load()
      .catch(() => new Promise((res) => setTimeout(res, 2500)).then(load))
      .then((data) => alive && setVehicles(data.vehicles ?? []))
      .catch(() => alive && setError(true));
    return () => {
      alive = false;
    };
  }, []);

  const makes = useMemo(
    () => Array.from(new Set((vehicles ?? []).map((v) => v.make))).sort((a, b) => a.localeCompare(b, "de")),
    [vehicles]
  );

  const list = useMemo(() => {
    let l = vehicles ?? [];
    if (make) l = l.filter((v) => v.make === make);
    if (limit) l = l.slice(0, limit);
    return l;
  }, [vehicles, make, limit]);

  if (error) {
    return (
      <div className="vehicles-note">
        <p>Die Fahrzeugliste konnte gerade nicht geladen werden.</p>
        <a className="btn btn-primary" href={AUTOSCOUT_URL} target="_blank" rel="noreferrer">
          Angebote auf AutoScout24 ansehen
          <ExternalLink size={18} />
        </a>
      </div>
    );
  }

  if (vehicles === null) {
    return (
      <div className="vehicle-grid" aria-busy="true">
        {Array.from({ length: limit ?? 8 }).map((_, i) => (
          <div className="vehicle-card is-skeleton" key={i} />
        ))}
      </div>
    );
  }

  return (
    <>
      {showFilter && (
        <div className="vehicle-toolbar">
          <span className="vehicle-count">
            {list.length} {list.length === 1 ? "Fahrzeug" : "Fahrzeuge"}
          </span>
          <label className="vehicle-filter">
            <span>Marke</span>
            <select value={make} onChange={(e) => setMake(e.target.value)}>
              <option value="">Alle Marken</option>
              {makes.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>
        </div>
      )}

      <div className="vehicle-grid">
        {list.map((v, i) => {
          const specs = [
            v.year ? (v.month ? `${String(v.month).padStart(2, "0")}.${v.year}` : String(v.year)) : null,
            v.mileage != null ? km(v.mileage) : null,
            label(FUEL, v.fuel),
            v.hp ? `${v.hp} PS` : null,
            label(TRANSMISSION, v.transmission),
          ].filter(Boolean) as string[];

          return (
            <a
              className="vehicle-card reveal"
              style={{ animationDelay: `${(i % 8) * 50}ms` }}
              href={v.url}
              target="_blank"
              rel="noreferrer"
              key={v.id}
            >
              <div className="vehicle-image">
                {v.images[0] ? (
                  <img src={v.images[0]} alt={`${v.make} ${v.version}`} loading="lazy" />
                ) : (
                  <div className="vehicle-placeholder">
                    <Car size={40} />
                  </div>
                )}
              </div>
              <div className="vehicle-body">
                <span className="vehicle-make">{v.make}</span>
                <h3>{v.version || v.model}</h3>
                <ul className="vehicle-specs">
                  {specs.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                <div className="vehicle-price">
                  {v.price != null ? <strong>{chf(v.price)}</strong> : <strong>Preis auf Anfrage</strong>}
                  <span>Details</span>
                </div>
              </div>
            </a>
          );
        })}
      </div>

      {list.length === 0 && <p className="vehicles-note">Keine Fahrzeuge für diese Auswahl.</p>}
    </>
  );
}
