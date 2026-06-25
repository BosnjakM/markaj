import { processSteps, services } from "../data/siteContent";

export function Services() {
  return (
    <section className="section services" id="leistungen">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Dienstleistungen</p>
          <h2>Alles, was Ihr Fahrzeug im Alltag braucht</h2>
          <p>Klare Beratung, kurze Wege und saubere Arbeit: die wichtigsten Leistungen der Garage Markaj AG auf einen Blick.</p>
        </div>

        <div className="service-grid">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <article className="service-card reveal" id={service.id} key={service.title}>
                <div className="service-image">
                  <img src={service.image} alt={`${service.title} Garage Markaj AG`} loading="lazy" />
                </div>
                <div className="service-body">
                  <div className="service-icon">
                    <Icon size={22} />
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <a href="#kontakt">Mehr erfahren</a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="service-flow reveal" aria-label="Ablauf">
          {processSteps.map((step, index) => (
            <div className="flow-step" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
