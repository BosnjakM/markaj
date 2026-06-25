import { BadgeCheck } from "lucide-react";
import { hubBenefits, images } from "../data/siteContent";

export function AutoHub() {
  return (
    <section className="section auto-hub" id="alles-rund-ums-auto">
      <div className="container feature-grid">
        <div className="feature-image reveal">
          <img src={images.hero} alt="Garage Markaj AG Werkstatt in Uznach" loading="lazy" />
        </div>
        <div className="feature-copy reveal">
          <p className="eyebrow">Alles rund ums Auto</p>
          <h2>Ein Ort für Service, Reparatur, Pflege und Fahrzeugkauf.</h2>
          <p>
            Ob Service, Reparatur, Carrosserie oder Fahrzeugverkauf - bei uns erhalten Sie persönliche Beratung und saubere
            Arbeit aus einer Hand.
          </p>
          <ul className="hub-list">
            {hubBenefits.map((benefit) => (
              <li key={benefit}>
                <BadgeCheck size={18} />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
