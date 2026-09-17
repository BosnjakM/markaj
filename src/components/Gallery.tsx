import { galleryItems } from "../data/siteContent";

type Props = {
  /** Show only the first n images. */
  limit?: number;
  /** Single-row layout without the large feature tile (home page). */
  compact?: boolean;
};

export function Gallery({ limit, compact = false }: Props) {
  const items = limit ? galleryItems.slice(0, limit) : galleryItems;

  return (
    <section className={`section gallery ${compact ? "gallery-compact" : ""}`} id="galerie">
      <div className="container">
        <div className="section-heading reveal">
          <p className="eyebrow">Unsere Galerie</p>
          <h2>Einblick in Garage Markaj AG</h2>
          {!compact && <p>Aus der Luft und aus der Werkstatt: so sieht Ihre Garage in Uznach aus.</p>}
        </div>
        <div className="gallery-grid">
          {items.map((item, index) => (
            <figure
              className={`gallery-item reveal ${!compact && index === 0 ? "is-feature" : ""}`}
              style={{ animationDelay: `${index * 60}ms` }}
              key={item.src}
            >
              <img src={item.src} alt={item.label} loading="lazy" />
              <figcaption>
                <i className="stripes" />
                {item.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
