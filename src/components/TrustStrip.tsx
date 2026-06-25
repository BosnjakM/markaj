import { trustPoints } from "../data/siteContent";

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Vertrauen">
      <div className="container trust-grid">
        {trustPoints.map((point) => {
          const Icon = point.icon;
          return (
            <article className="trust-item reveal" key={point.title}>
              <Icon size={22} />
              <div>
                <h2>{point.title}</h2>
                <p>{point.text}</p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
