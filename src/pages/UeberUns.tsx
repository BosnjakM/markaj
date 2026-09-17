import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PageHeader } from "../components/PageHeader";
import { images } from "../data/siteContent";
import { ueberUns } from "../data/pages";
import { usePageMeta } from "../hooks/usePageMeta";

export function UeberUns() {
  usePageMeta(ueberUns.metaTitle, ueberUns.metaDescription);

  return (
    <>
      <PageHeader title="Über uns" image="/images/hero-drone/164713_0192.webp" />

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <p className="eyebrow">{ueberUns.intro.sub}</p>
            <h2>Garage Markaj AG</h2>
            {ueberUns.intro.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            <ul className="link-list">
              {ueberUns.intro.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>
                    <ArrowRight size={16} />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="split-image reveal">
            <img src={images.family} alt="Team und Familie der Garage Markaj AG in Uznach" loading="lazy" />
          </div>
        </div>
      </section>

      <section className="section band">
        <div className="container narrow reveal">
          <p className="eyebrow">{ueberUns.engagement.sub}</p>
          <h2>{ueberUns.engagement.heading}</h2>
          {ueberUns.engagement.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </section>

      <section className="section" id="team">
        <div className="container">
          <div className="section-heading reveal">
            <p className="eyebrow">{ueberUns.team.sub}</p>
            <h2>{ueberUns.team.heading}</h2>
          </div>
          <div className="team-grid">
            {ueberUns.team.members.map((person, index) => (
              <article className="team-card reveal" style={{ animationDelay: `${index * 90}ms` }} key={person.name}>
                <img src={person.image} alt={person.alt} loading="lazy" />
                <div>
                  <h3>{person.name}</h3>
                  <span>{person.role}</span>
                  <p>{person.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
