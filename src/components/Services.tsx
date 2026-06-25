import { introServices, services } from "../data/siteContent";

export function Services() {
  return (
    <section className="section services" id="leistungen">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Unser Service</p>
          <h2>Ein kleiner Blick auf unseren Service</h2>
          <p>Von Wartung bis Lackierung: Wir kümmern uns fachgerecht um Ihr Fahrzeug und begleiten Sie persönlich.</p>
        </div>
        <div className="intro-service-grid">
          {introServices.map((item) => {
            const Icon = item.icon;
            return (
              <article className="intro-service" key={item.title}>
                <Icon size={24} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span>{item.note}</span>
              </article>
            );
          })}
        </div>

        <div className="section-heading compact">
          <p className="eyebrow">Unsere Leistungen</p>
          <h2>Alles aus einer Hand</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card" id={service.id} key={service.title}>
                <div className="service-icon">
                  <Icon size={25} />
                </div>
                <h3>{service.title}</h3>
                <p>{service.intro}</p>
                <ul>
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <strong>{service.cta}</strong>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
