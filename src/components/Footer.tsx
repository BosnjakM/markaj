import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import { navigation, social } from "../data/pages";
import { contact, images } from "../data/siteContent";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <span className="footer-logo-wrap">
            <img src={images.logo} alt="Garage Markaj AG Logo" className="footer-logo" />
          </span>
          <h2>Garage Markaj AG</h2>
          <p>{contact.address}</p>
          <p>Tel: {contact.phone}</p>
          <p>E-Mail: {contact.email}</p>
        </div>
        <div>
          <h3>Sitemap</h3>
          <nav aria-label="Footer Navigation">
            {navigation.map((item) => (
              <Link key={item.to} to={item.to}>
                {item.label}
              </Link>
            ))}
            <Link to="/kontakt">Kontakt</Link>
          </nav>
        </div>
        <div>
          <h3>Öffnungszeiten</h3>
          {contact.hours.map((hour) => (
            <p key={hour}>{hour}</p>
          ))}
          <h3>Folgen Sie uns</h3>
          <div className="social">
            <a href={social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={20} />
            </a>
            <a href={social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Garage Markaj AG. All rights reserved.</span>
        <div>
          <Link to="/agb">AGB's</Link>
          <Link to="/datenschutz">Datenschutzerklärung</Link>
          <Link to="/impressum">Impressum</Link>
        </div>
      </div>
    </footer>
  );
}
