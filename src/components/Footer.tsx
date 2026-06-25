import { contact, images, navItems } from "../data/siteContent";

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
          <p>{contact.email}</p>
        </div>
        <div>
          <h3>Sitemap</h3>
          <nav aria-label="Footer Navigation">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h3>Öffnungszeiten</h3>
          {contact.hours.map((hour) => (
            <p key={hour}>{hour}</p>
          ))}
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© Garage Markaj AG. All rights reserved.</span>
        <div>
          <a href="#agb">AGB</a>
          <a href="#datenschutz">Datenschutzerklärung</a>
          <a href="#impressum">Impressum</a>
        </div>
      </div>
    </footer>
  );
}
