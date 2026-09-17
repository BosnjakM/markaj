import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { VehicleGrid } from "../components/VehicleGrid";
import { occasionen } from "../data/pages";
import { usePageMeta } from "../hooks/usePageMeta";

const AUTOSCOUT_URL = "https://www.autoscout24.ch/de/hci/v2/3904/search";

export function Occasionen() {
  usePageMeta(occasionen.metaTitle, occasionen.metaDescription);

  return (
    <>
      <PageHeader title={occasionen.title} image={occasionen.image} crumb="Occasionen & Neuwagen" />

      <section className="section">
        <div className="container narrow reveal">
          <p className="eyebrow">Occasion & Neuwagen</p>
          <h2>{occasionen.intro.heading}</h2>
          {occasionen.intro.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section band" id="gebrauchtwagen">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">Unsere aktuellen Angebote</p>
            <h2>Gebrauchtwagen</h2>
          </div>
          <VehicleGrid showFilter />
          <div className="vehicle-more">
            <a className="btn btn-secondary" href={AUTOSCOUT_URL} target="_blank" rel="noreferrer">
              Alle Angebote auf AutoScout24
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container reveal">
          <p className="eyebrow">{occasionen.cta.sub}</p>
          <h2>{occasionen.cta.heading}</h2>
          <p>{occasionen.cta.text}</p>
          <Link className="btn btn-primary" to="/kontakt">
            {occasionen.cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
