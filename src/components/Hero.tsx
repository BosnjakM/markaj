import { ArrowRight, CalendarCheck, CarFront, Phone } from "lucide-react";
import { contact, highlightCards, images, quickBenefits } from "../data/siteContent";

export function Hero() {
  return (
    <section className="hero section-dark" id="home">
      <div className="hero-media">
        <img src={images.hero} alt="Garage Markaj Werkstatt" />
      </div>
      <div className="hero-overlay" />
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">Ihr Partner für Service, Reparaturen & Fahrzeughandel</p>
          <h1>Garage Markaj AG - Ihre Autowerkstatt in Uznach</h1>
          <p>
            Ihre zuverlässige Autowerkstatt in Uznach für Service, Reparaturen, MFK-Vorbereitung und Fahrzeugverkauf. Wir
            betreuen Kunden aus Uznach, Rapperswil und dem gesamten Linthgebiet.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#kontakt">
              <CalendarCheck size={18} />
              Termin vereinbaren
            </a>
            <a className="btn btn-ghost" href={contact.phoneHref}>
              <Phone size={18} />
              Jetzt anrufen
            </a>
          </div>
          <div className="hero-pills" aria-label="Kernleistungen">
            {["Felgen", "Reifenwechsel", "Reparaturen", "Spritzwerk"].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
        <aside className="hero-panel" aria-label="Warum Garage Markaj AG">
          <CarFront size={28} />
          <h2>Warum Garage Markaj AG?</h2>
          <ul>
            {quickBenefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
          <a href="#gebrauchtwagen">
            Angebote ansehen
            <ArrowRight size={17} />
          </a>
        </aside>
      </div>
      <div className="container highlight-grid" aria-label="Direkteinstiege">
        {highlightCards.map((card) => (
          <a className="highlight-card" key={card.title} href={card.href}>
            <img src={card.image} alt={`${card.title} Garage Markaj`} />
            <span>{card.title}</span>
            <strong>{card.subtitle}</strong>
            <small>{card.target}</small>
          </a>
        ))}
      </div>
    </section>
  );
}
