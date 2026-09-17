import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "../components/ContactForm";
import { PageHeader } from "../components/PageHeader";
import { contact } from "../data/siteContent";
import { MAP_EMBED } from "../data/pages";
import { usePageMeta } from "../hooks/usePageMeta";

export function Kontakt() {
  usePageMeta("Kontakt – Garage Markaj AG in Uznach", "Kontaktieren Sie die Garage Markaj AG in Uznach: Zürcherstrasse 81, 8730 Uznach, Tel. 055 284 26 46.");

  return (
    <>
      <PageHeader title="Kontakt" image="/images/hero-drone/164701_0190.webp" />

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">Kontakt</p>
            <h2>Bei Fragen oder Interesse kontaktieren Sie uns bitte.</h2>
            <ContactForm />
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
          </aside>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Zürcherstrasse 81, 8730 Uznach</p>
            <h2>Unser Standort</h2>
          </div>
          <div className="map reveal">
            <iframe
              title="Standort Garage Markaj AG"
              src={MAP_EMBED}
              width="100%"
              height="460"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
