import { ArrowRight, BadgeCheck, CarFront } from "lucide-react";

export function UsedCars() {
  return (
    <section className="section used-cars" id="gebrauchtwagen">
      <div className="container used-cars-inner">
        <div>
          <p className="eyebrow">Gebrauchtwagen</p>
          <h2>Unsere aktuellen Angebote</h2>
          <p>
            Sie suchen ein Occasion- oder Neufahrzeug in Uznach? Bei der Garage Markaj AG finden Sie eine vielseitige Auswahl an
            Fahrzeugen - vom sportlichen Cabrio über den praktischen Kombi bis zum geräumigen SUV.
          </p>
        </div>
        <div className="offer-panel">
          <CarFront size={34} />
          <h3>Occasion & Neuwagen</h3>
          <p>Benzin, Diesel oder Hybrid, Automatik oder Schaltgetriebe: Wir helfen Ihnen, das passende Auto zu finden.</p>
          <ul>
            <li>
              <BadgeCheck size={17} />
              Geprüfte Occasionen
            </li>
            <li>
              <BadgeCheck size={17} />
              Eintausch und Finanzierung
            </li>
            <li>
              <BadgeCheck size={17} />
              Persönliche Beratung
            </li>
          </ul>
          <a className="btn btn-primary" href="#kontakt">
            Probefahrt anfragen
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
