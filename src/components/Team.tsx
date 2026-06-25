import { team } from "../data/siteContent";

export function Team() {
  return (
    <section className="section team" id="team">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">Unser Team</p>
          <h2>Unsere Experten für Ihr Fahrzeug</h2>
        </div>
        <div className="team-grid">
          {team.map((person) => (
            <article className="team-card" key={person.name}>
              <img src={person.image} alt={`${person.name} Garage Markaj AG`} loading="lazy" />
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
  );
}
