import { galleryImages } from "../data/siteContent";

export function Gallery() {
  return (
    <section className="section gallery" id="galerie">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Unsere Galerie</p>
          <h2>Einblick in Garage Markaj AG</h2>
        </div>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <img src={image} alt={`Garage Markaj Galerie ${index + 1}`} key={image} loading="lazy" />
          ))}
        </div>
      </div>
    </section>
  );
}
