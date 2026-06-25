import { ArrowRight, CalendarCheck, Clock, ShieldCheck, Wrench } from "lucide-react";
import { images, processSteps, trustBadges } from "../data/siteContent";

export function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-background" aria-hidden="true">
        <span className="hero-line hero-line-one" />
        <span className="hero-line hero-line-two" />
      </div>
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Garage Markaj AG in Uznach</p>
          <h1>Ihr Auto in besten Händen.</h1>
          <p>
            Von Werkstattservice und Carrosserie bis Fahrzeugverkauf und Carwash - wir kümmern uns zuverlässig um Ihr
            Fahrzeug in Uznach.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#kontakt">
              <CalendarCheck size={18} />
              Termin vereinbaren
            </a>
            <a className="btn btn-secondary" href="#gebrauchtwagen">
              <ArrowRight size={18} />
              Fahrzeuge ansehen
            </a>
          </div>
          <div className="hero-pills" aria-label="Kernleistungen">
            {trustBadges.map((item, index) => (
              <span style={{ animationDelay: `${360 + index * 90}ms` }} key={item}>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-visual" aria-label="Werkstatt Garage Markaj AG">
          <div className="visual-card">
            <div className="visual-image">
              <img src={images.service} alt="Werkstattarbeit bei Garage Markaj AG" />
              <span className="light-sweep" />
            </div>
            <div className="visual-metric visual-metric-top">
              <Wrench size={18} />
              <span>Service & Reparatur</span>
            </div>
            <div className="visual-metric visual-metric-bottom">
              <ShieldCheck size={18} />
              <span>Carrosserie & Lack</span>
            </div>
          </div>

          <aside className="appointment-card">
            <div>
              <Clock size={19} />
              <span>Termin frei diese Woche</span>
            </div>
            <p>Service, Reparatur oder Beratung</p>
            <a href="#kontakt">Jetzt anfragen</a>
          </aside>
        </div>
      </div>

      <div className="container hero-process" aria-label="Ablauf von Anfrage bis Übergabe">
        {processSteps.map((step, index) => (
          <div className="hero-process-step" style={{ animationDelay: `${520 + index * 120}ms` }} key={step.title}>
            <span>{step.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
