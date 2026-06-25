import { partners } from "../data/siteContent";

export function Partners() {
  return (
    <section className="partners" aria-labelledby="partners-title">
      <div className="container">
        <div className="section-heading compact">
          <p className="eyebrow">Unsere Kooperationspartner</p>
          <h2 id="partners-title">Starke Partner im Netzwerk</h2>
        </div>
        <div className="partner-grid">
          {partners.map((partner, index) => (
            <div className="partner-logo" key={`${partner.name}-${index}`}>
              <img src={partner.image} alt={partner.name} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
