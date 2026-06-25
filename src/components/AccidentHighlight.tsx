import { ArrowRight, ShieldCheck } from "lucide-react";
import { images } from "../data/siteContent";

export function AccidentHighlight() {
  return (
    <section className="section accident-highlight" id="carrosserie">
      <div className="container feature-grid reverse">
        <div className="feature-image reveal">
          <img src={images.accident} alt="Carrosserie und Unfall-Reparaturen Garage Markaj AG" loading="lazy" />
        </div>
        <div className="feature-copy reveal">
          <p className="eyebrow">Carrosserie & Unfall</p>
          <h2>Schadenfall? Wir kümmern uns um die saubere Abwicklung.</h2>
          <p>
            Von Parkschäden bis zu grösseren Unfallschäden: Die Garage Markaj AG repariert fachgerecht und unterstützt Sie
            bei Versicherung, Ersatzwagen und Terminplanung.
          </p>
          <ul className="check-list">
            <li>
              <ShieldCheck size={18} />
              Reparaturen an Carrosserie und Lack
            </li>
            <li>
              <ShieldCheck size={18} />
              Unterstützung bei der Versicherungsabwicklung
            </li>
            <li>
              <ShieldCheck size={18} />
              Ersatzwagen nach Absprache
            </li>
          </ul>
          <a className="btn btn-secondary" href="#kontakt">
            Schaden melden
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
