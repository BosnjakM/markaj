import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import type { ServicePageData } from "../data/pages";
import { usePageMeta } from "../hooks/usePageMeta";

/** Shared layout for Autowerkstatt / Carrosserie / Spritzwerk / Carwash / Felgen. */
export function ServicePage({ data }: { data: ServicePageData }) {
  usePageMeta(data.metaTitle, data.metaDescription);
  const { intro, features, chips, cta } = data;

  return (
    <>
      <PageHeader title={data.title} image={data.headerImage ?? data.image} />

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">{intro.sub}</p>
            <h2>{intro.heading}</h2>
            {intro.lead && <h3 className="lead">{intro.lead}</h3>}
            {intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="check-list">
              {intro.bullets.map((b) => (
                <li key={b}>
                  <Check size={18} />
                  {b}
                </li>
              ))}
            </ul>
            <Link className="btn btn-primary" to="/kontakt">
              {intro.cta}
            </Link>
          </div>
          <div className="split-image reveal">
            <img src={data.image} alt={data.imageAlt} loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">{features.sub}</p>
            <h2>{features.heading}</h2>
          </div>
          <div className="feature-cards">
            {features.items.map((item, i) => (
              <article className="feature-card reveal" style={{ animationDelay: `${i * 60}ms` }} key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">{chips.sub}</p>
            <h2>{chips.heading}</h2>
          </div>
          <ul className="chips reveal">
            {chips.items.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="cta-band">
        <div className="container reveal">
          <p className="eyebrow">{cta.sub}</p>
          <h2>{cta.heading}</h2>
          <p>{cta.text}</p>
          <Link className="btn btn-primary" to="/kontakt">
            {cta.button}
          </Link>
        </div>
      </section>
    </>
  );
}
