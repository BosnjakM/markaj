import { ArrowRight, Droplets } from "lucide-react";
import { images } from "../data/siteContent";

export function CarwashSection() {
  return (
    <section className="section carwash-section" id="carwash">
      <div className="container carwash-card reveal">
        <div>
          <p className="eyebrow">Carwash</p>
          <h2>Sauber gepflegt - innen und aussen</h2>
          <p>
            Eine gründliche Fahrzeugreinigung schützt den Lack, macht Freude beim Einsteigen und sorgt für einen gepflegten
            Eindruck. Wir reinigen Ihr Fahrzeug sorgfältig und passend zum Zustand.
          </p>
          <a className="btn btn-primary" href="#kontakt">
            Carwash-Termin buchen
            <ArrowRight size={18} />
          </a>
        </div>
        <div className="carwash-image">
          <Droplets size={30} />
          <img src={images.wash} alt="Carwash Garage Markaj AG" loading="lazy" />
        </div>
      </div>
    </section>
  );
}
