import { BadgeCheck } from "lucide-react";
import { images, stats, whyItems } from "../data/siteContent";

export function About() {
  return (
    <section className="section about" id="ueber-uns">
      <div className="container about-grid">
        <div className="about-image reveal">
          <img src={images.family} alt="Team und Familie Markaj" loading="lazy" />
        </div>
        <div className="about-copy reveal">
          <p className="eyebrow">Warum Garage Markaj AG</p>
          <h2>Eine lokale Garage, bei der Beratung und Handwerk zusammenpassen.</h2>
          <p>
            Seit 1993 ist die Garage Markaj AG in Uznach eine Anlaufstelle für Menschen, die ihr Auto zuverlässig betreut
            wissen möchten. Persönlich, direkt und mit einem klaren Blick für sinnvolle Lösungen.
          </p>
          <ul className="why-list">
            {whyItems.map((item) => (
              <li key={item}>
                <BadgeCheck size={18} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container stats-grid" aria-label="Unsere Arbeit">
        {stats.map((stat) => (
          <div className="stat reveal" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
