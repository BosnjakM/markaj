import { ArrowRight } from "lucide-react";
import { images, stats } from "../data/siteContent";

export function About() {
  return (
    <section className="section about" id="ueber-uns">
      <div className="container about-grid">
        <div className="about-image">
          <img src={images.about} alt="Unsere Werkstatt Garage Markaj AG" />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Über uns</p>
          <h2>Garage Markaj AG - Ihre Fachwerkstatt in Uznach</h2>
          <p>
            Die Garage Markaj AG steht für Qualität, Zuverlässigkeit und Fachkompetenz rund um Ihr Fahrzeug. Unser Ziel ist es,
            Ihnen erstklassigen Service und höchste Kundenzufriedenheit zu bieten.
          </p>
          <p>
            Die Garage Markaj AG wurde 1993 gegründet und hat sich seitdem als zuverlässiger Partner für Fahrzeugservice,
            Reparaturen, Karosseriearbeiten und den Handel mit Occasionen etabliert.
          </p>
          <p>
            Unsere Werkstatt ist mit modernster Technik ausgestattet, um Ihnen besten Service zu garantieren. Wir legen grossen
            Wert auf transparente Beratung, faire Preise und eine langfristige Partnerschaft mit unseren Kunden.
          </p>
          <div className="about-links">
            <a href="#leistungen">
              Unsere Werkstatt
              <ArrowRight size={16} />
            </a>
            <a href="#kontakt">
              Kontakt aufnehmen
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
      <div className="container stats-grid" aria-label="Unsere Arbeit">
        {stats.map((stat) => (
          <div className="stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
