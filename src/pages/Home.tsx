import { ArrowRight, Check } from "lucide-react";
import { Link } from "react-router-dom";
import { Gallery } from "../components/Gallery";
import { Partners } from "../components/Partners";
import { VehicleGrid } from "../components/VehicleGrid";
import { VideoHero } from "../components/VideoHero";
import { home } from "../data/pages";
import { usePageMeta } from "../hooks/usePageMeta";

export function Home() {
  usePageMeta(home.metaTitle, home.metaDescription);

  return (
    <>
      <VideoHero />

      {/* Intro + Warum */}
      <section className="section home-intro" id="intro">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">{home.intro.sub}</p>
            <h2>{home.intro.heading}</h2>
            <p>{home.intro.paragraphs[0]}</p>
          </div>
          <div className="why reveal">
            <h3>Warum Garage Markaj AG?</h3>
            <ul className="check-list">
              {home.why.map((w) => (
                <li key={w}>
                  <Check size={18} />
                  {w}
                </li>
              ))}
            </ul>
            <Link className="btn btn-secondary" to="/ueber-uns">
              Mehr über uns
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Leistungen – image tiles linking to the sub pages */}
      <section className="section band" id="leistungen">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Unser Service</p>
            <h2>Leistungen</h2>
          </div>
          <div className="tile-grid">
            {home.leistungen.map((s, i) => (
              <Link className="tile reveal" style={{ animationDelay: `${(i % 5) * 60}ms` }} to={s.to} key={s.title}>
                <img src={s.image} alt="" loading="lazy" />
                <span className="tile-title">{s.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Gebrauchtwagen */}
      <section className="section" id="gebrauchtwagen">
        <div className="container">
          <div className="section-heading row reveal">
            <div>
              <p className="eyebrow">Unsere aktuellen Angebote</p>
              <h2>Gebrauchtwagen</h2>
            </div>
            <Link className="btn btn-secondary" to="/occasionen#gebrauchtwagen">
              Alle Angebote
              <ArrowRight size={18} />
            </Link>
          </div>
          <VehicleGrid limit={4} />
        </div>
      </section>

      {/* Zahlen */}
      <section className="stats-band">
        <div className="container stats-band-inner reveal">
          <div className="stats-band-copy">
            <p className="eyebrow">Seit 1993 in Uznach</p>
            <h2>{home.about.heading}</h2>
            <Link className="btn btn-secondary" to="/ueber-uns">
              Über uns
              <ArrowRight size={18} />
            </Link>
          </div>
          <div className="stats-grid stats-grid-3">
            {home.stats.map((s) => (
              <div className="stat" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Partners />
      <Gallery limit={5} compact />

      <section className="cta-band">
        <div className="container reveal">
          <p className="eyebrow">Kontaktieren Sie uns</p>
          <h2>Bei Fragen oder Interesse kontaktieren Sie uns bitte.</h2>
          <div className="cta-actions">
            <Link className="btn btn-primary" to="/kontakt">
              Nachricht senden
            </Link>
            <a className="btn btn-ghost" href="tel:+41552842646">
              055 284 26 46
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
