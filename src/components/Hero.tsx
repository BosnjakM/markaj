import { ArrowRight, CalendarCheck } from "lucide-react";
import { images, trustBadges } from "../data/siteContent";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-media">
        <img src={images.hero} alt="Garage Markaj AG in Uznach" />
      </div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Autogarage in Uznach seit 1993</p>
          <h1>Garage Markaj AG - Ihr Partner für Service, Reparatur & Fahrzeughandel in Uznach</h1>
          <p>
            Professioneller Werkstattservice, Carrosserie, Lackierung, Felgenservice, Carwash und geprüfte Occasionen -
            alles aus einer Hand.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#kontakt">
              <CalendarCheck size={18} />
              Termin vereinbaren
            </a>
            <a className="btn btn-secondary" href="#gebrauchtwagen">
              <ArrowRight size={18} />
              Fahrzeuge entdecken
            </a>
          </div>
          <div className="hero-pills" aria-label="Kernleistungen">
            {trustBadges.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
