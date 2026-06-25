import { Mail, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { contact, images, navItems } from "../data/siteContent";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="topbar">
        <a href={contact.phoneHref}>
          <Phone size={15} />
          {contact.phone}
        </a>
        <a href={contact.emailHref}>
          <Mail size={15} />
          {contact.email}
        </a>
      </div>
      <nav className="navbar" aria-label="Hauptnavigation">
        <a className="brand" href="#home" aria-label="Garage Markaj AG Startseite">
          <span className="brand-mark">
            <img src={images.logo} alt="Garage Markaj AG Logo" />
          </span>
          <span>Garage Markaj AG</span>
        </a>
        <button className="nav-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Navigation öffnen">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#kontakt" onClick={() => setOpen(false)}>
            Termin vereinbaren
          </a>
        </div>
      </nav>
    </header>
  );
}
