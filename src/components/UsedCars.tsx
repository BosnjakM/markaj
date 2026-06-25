import { ArrowRight, BadgeCheck } from "lucide-react";
import { images } from "../data/siteContent";

export function UsedCars() {
  return (
    <section className="section used-cars" id="gebrauchtwagen">
      <div className="container feature-grid">
        <div className="feature-copy reveal">
          <p className="eyebrow">Occasion & Neuwagen</p>
          <h2>Fahrzeug finden, eintauschen oder finanzieren</h2>
          <p>
            Ob gepflegte Occasion oder passender Neuwagen: Wir beraten persönlich, prüfen die Möglichkeiten für Eintausch,
            Leasing oder Finanzierung und organisieren gerne eine Probefahrt.
          </p>
          <ul className="check-list">
            <li>
              <BadgeCheck size={18} />
              Geprüfte Fahrzeuge mit transparenter Beratung
            </li>
            <li>
              <BadgeCheck size={18} />
              Eintausch Ihres aktuellen Fahrzeugs möglich
            </li>
            <li>
              <BadgeCheck size={18} />
              Finanzierung, Leasing und Garantie nach Bedarf
            </li>
          </ul>
          <a className="btn btn-primary" href="#kontakt">
            Probefahrt anfragen
            <ArrowRight size={18} />
          </a>
        </div>
        <div className="feature-image reveal">
          <img src={images.cars} alt="Occasion und Neuwagen Garage Markaj AG" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
