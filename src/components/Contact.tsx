import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "../data/siteContent";

export function Contact() {
  return (
    <section className="section contact" id="kontakt">
      <div className="container contact-grid">
        <div className="contact-copy reveal">
          <p className="eyebrow">Kontakt & Termin</p>
          <h2>Rufen Sie an - wir sagen Ihnen ehrlich, was sinnvoll ist.</h2>
          <p>
            Für Service, Reparatur, Carrosserie, Carwash oder Fahrzeugberatung: Wir nehmen uns Zeit und planen den nächsten
            Schritt unkompliziert.
          </p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={contact.phoneHref}>
              <Phone size={18} />
              Jetzt anrufen
            </a>
            <a className="btn btn-secondary" href={contact.emailHref}>
              <Mail size={18} />
              Nachricht senden
            </a>
          </div>
        </div>
        <aside className="contact-card reveal">
          <h3>Garage Markaj AG</h3>
          <a href={contact.mapsHref} target="_blank" rel="noreferrer">
            <MapPin size={18} />
            {contact.address}
          </a>
          <a href={contact.phoneHref}>
            <Phone size={18} />
            Tel: {contact.phone}
          </a>
          <a href={contact.emailHref}>
            <Mail size={18} />
            {contact.email}
          </a>
          <div className="hours">
            <strong>Öffnungszeiten</strong>
            {contact.hours.map((hour) => (
              <span key={hour}>{hour}</span>
            ))}
          </div>
          <div className="location-card" aria-label="Standort Uznach">
            <span>Zürcherstrasse</span>
            <strong>Garage Markaj AG</strong>
            <small>8730 Uznach</small>
          </div>
        </aside>
      </div>
    </section>
  );
}
