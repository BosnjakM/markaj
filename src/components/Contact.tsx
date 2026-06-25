import { Mail, MapPin, Phone } from "lucide-react";
import { contact } from "../data/siteContent";

export function Contact() {
  return (
    <section className="section contact" id="kontakt">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Kontaktieren Sie uns</p>
          <h2>Bei Fragen oder Interesse kontaktieren Sie uns bitte.</h2>
          <p>Ob Termin, Offerte, Fahrzeugverkauf oder Schadenfall: Wir sind gerne persönlich für Sie da.</p>
          <div className="contact-actions">
            <a className="btn btn-primary" href={contact.phoneHref}>
              <Phone size={18} />
              Jetzt anrufen
            </a>
            <a className="btn btn-light" href={contact.emailHref}>
              <Mail size={18} />
              Nachricht senden
            </a>
          </div>
        </div>
        <aside className="contact-card">
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
            E-Mail: {contact.email}
          </a>
          <div className="hours">
            <strong>Öffnungszeiten</strong>
            {contact.hours.map((hour) => (
              <span key={hour}>{hour}</span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}
