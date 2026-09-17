import { ArrowRight, CalendarCheck } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const SOURCES = {
  desktop: "/video/hero-1080.mp4",
  mobile: "/video/hero-720.mp4",
  poster: "/video/hero-poster.jpg",
};

/**
 * Full-screen drone video hero. Loads the 720p file on small screens and
 * skips the video entirely for reduced-motion / data-saver users (poster only).
 */
export function VideoHero() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
    if (reduce || saveData) return;
    // React does not render the `muted` attribute; browsers only autoplay muted media.
    video.muted = true;
    video.defaultMuted = true;
    video.src = window.innerWidth < 760 ? SOURCES.mobile : SOURCES.desktop;
    const tryPlay = () => video.play().catch(() => {
      /* autoplay blocked – poster stays visible */
    });
    tryPlay();
    video.addEventListener("loadeddata", tryPlay, { once: true });
  }, []);

  return (
    <section className="vhero" id="home">
      <video ref={ref} className="vhero-video" poster={SOURCES.poster} muted loop playsInline preload="metadata" aria-hidden="true" />
      <div className="vhero-scrim" aria-hidden="true" />

      <div className="vhero-inner">
        <p className="vhero-label">Uznach · Familienbetrieb seit 1993</p>
        <h1>
          Garage Markaj AG
          <span>Ihre Autowerkstatt in Uznach</span>
        </h1>
        <p className="vhero-tagline">Werkstatt · Carrosserie · Spritzwerk · Carwash · Occasionen & Neuwagen</p>
        <div className="vhero-actions">
          <Link className="btn btn-primary" to="/kontakt">
            <CalendarCheck size={18} />
            Termin vereinbaren
          </Link>
          <a className="btn btn-ghost" href="#leistungen">
            Unsere Leistungen
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
