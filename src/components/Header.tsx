import { Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigation } from "../data/pages";
import { contact, images } from "../data/siteContent";

export function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Expose the real header height as --header-h so full-screen sections
  // (video hero) can fit exactly into the remaining viewport.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const apply = () => document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <header className="site-header" ref={ref}>
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
        <Link className="brand" to="/" aria-label="Garage Markaj AG Startseite" onClick={() => setOpen(false)}>
          <img className="brand-logo" src={images.logoDark} alt="Garage Markaj AG" />
        </Link>
        <button className="nav-toggle" type="button" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Navigation öffnen">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
        <div className={`nav-links ${open ? "is-open" : ""}`}>
          {navigation.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.to === "/"} onClick={() => setOpen(false)}>
              {item.label}
            </NavLink>
          ))}
          <Link className="nav-cta" to="/kontakt" onClick={() => setOpen(false)}>
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}
