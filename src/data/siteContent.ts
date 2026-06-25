import {
  BadgeCheck,
  Car,
  CarFront,
  Droplets,
  Fan,
  Gauge,
  Hammer,
  Paintbrush,
  Phone,
  ShieldCheck,
  Sparkles,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const contact = {
  phone: "055 284 26 46",
  phoneHref: "tel:+41552842646",
  email: "info@garage-markaj.ch",
  emailHref: "mailto:info@garage-markaj.ch",
  address: "Zürcherstrasse 81, 8730 Uznach",
  mapsHref: "https://www.google.com/maps/search/?api=1&query=Garage+Markaj+AG+Z%C3%BCrcherstrasse+81+8730+Uznach",
  hours: ["Mo - Fr: 07:30 - 12:00 / 13:30 - 18:30", "Sa: 08:00 - 14:00", "So: Geschlossen"],
};

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Über Uns", href: "#ueber-uns" },
  { label: "Autowerkstatt", href: "#leistungen" },
  { label: "Carrosserie", href: "#carrosserie" },
  { label: "Spritzwerk", href: "#spritzwerk" },
  { label: "Occasion & Neuwagen", href: "#gebrauchtwagen" },
  { label: "Carwash", href: "#carwash" },
  { label: "Felgen", href: "#felgen" },
  { label: "Kontakt", href: "#kontakt" },
];

export const images = {
  logo: "/images/garage-markaj/Logo-Garage-Markaj-Weiss.png",
  hero: "/images/garage-markaj/garage-markaj-startseite-optimized.webp",
  service: "/images/garage-markaj/Markaj-027-optimized.webp",
  family: "/images/garage-markaj/familie_markajv1-optimized.webp",
  about: "/images/garage-markaj/werkstatt.png",
  teamAgim: "/images/garage-markaj/Agim-optimized.webp",
  teamTatjana: "/images/garage-markaj/Tatjana-optimized.webp",
  teamVigan: "/images/garage-markaj/Vigan-optimized.webp",
  inspection: "/images/garage-markaj/inspektion-optimized.webp",
  climate: "/images/garage-markaj/klimaservice-optimized.webp",
  heating: "/images/garage-markaj/standheizung-optimized.webp",
  glass: "/images/garage-markaj/scheibenreparatur-optimized.webp",
  tires: "/images/garage-markaj/reifenwechsel-optimized.webp",
  accident: "/images/garage-markaj/unfall_reparaturen-optimized.webp",
  paint: "/images/garage-markaj/lackierung-optimized.webp",
  cars: "/images/garage-markaj/occasion_neuwagen_kauf-optimized.webp",
  wash: "/images/garage-markaj/waschanlage1-optimized.webp",
  rims: "/images/garage-markaj/felgen_reparatur-optimized.webp",
};

export type Service = {
  id: string;
  title: string;
  intro: string;
  bullets: string[];
  cta: string;
  icon: LucideIcon;
};

export const highlightCards = [
  {
    title: "Autos",
    subtitle: "Gebrauchtwagen",
    target: "Aktuelle Angebote",
    image: images.hero,
    href: "#gebrauchtwagen",
  },
  {
    title: "Service",
    subtitle: "Leistungen",
    target: "Unsere Leistungen",
    image: images.service,
    href: "#leistungen",
  },
  {
    title: "Team",
    subtitle: "Über Uns",
    target: "Arbeitsmoral",
    image: images.family,
    href: "#ueber-uns",
  },
];

export const introServices = [
  {
    title: "Unfall Reparaturen",
    text: "Ob Parkschaden oder grösserer Unfallschaden - wir bringen Ihr Fahrzeug wieder in Form. Mit modernster Ausrüstung, original Ersatzteilen und präziser Handarbeit kümmern wir uns um fachgerechte Reparaturen an Karosserie, Lack und Struktur.",
    note: "Abwicklung mit der Versicherung? Kein Problem. Wir übernehmen alles für Sie - inklusive Ersatzwagen.",
    icon: ShieldCheck,
  },
  {
    title: "Felgen-Reparatur",
    text: "Kratzer, Bordsteinschäden oder Korrosion? Wir bringen Ihre Alu- und Stahlfelgen wieder in Topform. Dank professioneller Aufbereitung und punktgenauer Lackierung sehen Ihre Felgen aus wie neu.",
    note: "Jetzt Termin vereinbaren und unverbindlich beraten lassen.",
    icon: Gauge,
  },
  {
    title: "Spenglerarbeiten Lackierarbeiten",
    text: "Parkschäden, kleine Unfälle oder Lackkratzer? Wir beheben Schäden professionell und meist ohne Teiletausch - schnell, kosteneffizient und mit höchster Präzision.",
    note: "Egal ob Teil- oder Komplettlackierung - wir sorgen dafür, dass Ihr Fahrzeug wieder aussieht wie neu.",
    icon: Paintbrush,
  },
  {
    title: "Reifenwechsel Räderwechsel",
    text: "Ob Sommer- oder Winterreifen: Wir wechseln Ihre Räder fachgerecht, prüfen Profil und Luftdruck und bieten bei Bedarf hochwertige Neureifen zu attraktiven Preisen.",
    note: "Auf Wunsch reinigen und lagern wir Ihre Reifen auch saisonal ein - sicher und trocken.",
    icon: Wrench,
  },
  {
    title: "MFK-Vorbereitung",
    text: "Steht die Motorfahrzeugkontrolle an? Wir prüfen Ihr Fahrzeug auf Herz und Nieren, beheben allfällige Mängel und bereiten es optimal für die amtliche Prüfung vor.",
    note: "Unser Ziel: Sie bestehen die Kontrolle auf Anhieb - stressfrei und sicher.",
    icon: BadgeCheck,
  },
  {
    title: "Auto-Verkauf",
    text: "Ob gepflegte Occasion oder attraktiver Neuwagen - bei uns finden Sie Ihr nächstes Fahrzeug zu fairen Konditionen. Wir beraten persönlich, nehmen Ihr aktuelles Auto auf Wunsch in Zahlung und bieten flexible Finanzierung.",
    note: "Jetzt Angebote entdecken und Probefahrt vereinbaren.",
    icon: CarFront,
  },
];

export const services: Service[] = [
  {
    id: "autowerkstatt",
    title: "Inspektion / Wartung",
    intro: "Ihr Auto verdient regelmässige Pflege. Bei der Garage Markaj AG in Uznach führen wir Inspektionen und Wartungen professionell und nach Herstellervorgaben durch - egal ob PW, Lieferwagen oder Wohnmobil.",
    bullets: ["Öl- & Filterwechsel für gesunden Motorlauf", "Bremsen-Check für mehr Sicherheit", "MFK-Vorbereitung stressfrei & zuverlässig", "Elektronikdiagnose mit modernsten Geräten", "Klimaservice für Komfort bei jedem Wetter"],
    cta: "Vereinbaren Sie jetzt einen Termin - wir halten Ihr Fahrzeug in Topform.",
    icon: Wrench,
  },
  {
    id: "klimaservice",
    title: "Klimaservice",
    intro: "Frische Luft im Auto? Mit dem Klimaservice der Garage Markaj AG in Uznach bleibt es kühl, hygienisch und komfortabel - bei jedem Wetter.",
    bullets: ["Kältemittelbefüllung (R437a & R1234yf)", "Desinfektion gegen Bakterien & Gerüche", "Systemprüfung für volle Leistung"],
    cta: "Buchen Sie jetzt Ihren Termin und geniessen Sie frische Luft auf Knopfdruck!",
    icon: Fan,
  },
  {
    id: "standheizungen",
    title: "Standheizungen",
    intro: "Kein Eiskratzen mehr - mit einer Standheizung von Eberspächer oder Webasto starten Sie angenehm warm in den Tag. Die Garage Markaj AG in Uznach ist Ihr Profi für Nachrüstung und Einbau.",
    bullets: ["Wärme schon beim Einsteigen", "Freie Sicht ohne Kratzen", "Fachgerechter Einbau vom Partnerbetrieb"],
    cta: "Jetzt Beratung oder Offerte sichern - direkt bei uns in Uznach.",
    icon: Sparkles,
  },
  {
    id: "scheiben",
    title: "Scheibenreparatur & Austausch",
    intro: "Steinschlag in der Frontscheibe? Wir prüfen, ob eine Reparatur möglich ist - schnell, sauber und oft kostenlos dank Versicherung.",
    bullets: ["Professionelle Prüfung", "Schnelle Reparatur", "Sauberer Austausch, wenn nötig"],
    cta: "Jetzt Termin bei der Garage Markaj AG in Uznach sichern!",
    icon: ShieldCheck,
  },
  {
    id: "reifenwechsel",
    title: "Reifenwechsel & Radwechsel",
    intro: "Ob Sommer- oder Winterreifen, der richtige Wechsel ist entscheidend für Ihre Sicherheit und den Fahrkomfort. Wir bieten fachgerechten Reifenservice inklusive Reinigung und Einlagerung.",
    bullets: ["Professioneller Reifenwechsel & Radwechsel", "Räderreinigung für mehr Langlebigkeit", "Saisonale Reifeneinlagerung - sicher & bequem"],
    cta: "Jetzt Termin bei der Garage Markaj AG in Uznach buchen und sicher unterwegs sein!",
    icon: Gauge,
  },
  {
    id: "carrosserie",
    title: "Unfall-Reparaturen",
    intro: "Unfallschäden an Fahrzeugen aller Hersteller werden mit modernsten Methoden und original Ersatzteilen fachgerecht repariert. Wir übernehmen für Sie die komplette Schadensabwicklung mit der Versicherung oder dem Unfallverursacher.",
    bullets: ["Reparatur nach Herstellervorgaben mit original Ersatzteilen", "Direkte Abwicklung mit der Versicherung", "Ersatzwagen für die gesamte Reparaturdauer"],
    cta: "Jetzt Unfall-Reparatur bei der Garage Markaj AG in Uznach vereinbaren!",
    icon: Hammer,
  },
  {
    id: "spritzwerk",
    title: "Spritzwerk - professionelle Lackierungen",
    intro: "Ob Neulackierung, Spot-Repair oder professionelle Farbauffrischung - in unserem Spritzwerk bringen wir Ihr Fahrzeug wieder in Bestform. Mit hochwertigen Lacken und präziser Handwerkskunst sorgen wir für perfekte Ergebnisse.",
    bullets: ["Lackierungen für Autos, Motorräder & Spezialfahrzeuge", "Farbgenaue Reparaturen und Spot-Repair", "Hochwertige Lacke mit langlebigem Schutz"],
    cta: "Jetzt Termin im Spritzwerk der Garage Markaj AG in Uznach vereinbaren!",
    icon: Paintbrush,
  },
  {
    id: "occasion",
    title: "Occasion & Neuwagen",
    intro: "Auf der Suche nach einem zuverlässigen Occasion- oder Neuwagen? Bei der Garage Markaj AG in Uznach finden Sie eine breite Auswahl an geprüften Fahrzeugen in Top-Zustand - fair, transparent und mit Garantie.",
    bullets: ["Geprüfte Occasionen & attraktive Neuwagen-Angebote", "Finanzierung & Leasing zu fairen Konditionen", "Individuelle Beratung für Ihr Wunschfahrzeug"],
    cta: "Jetzt Traumauto bei der Garage Markaj AG in Uznach entdecken!",
    icon: Car,
  },
  {
    id: "carwash",
    title: "Carwash - professionelle Fahrzeugreinigung",
    intro: "Gönnen Sie Ihrem Fahrzeug eine professionelle Reinigung! Unser Carwash-Service sorgt für glänzende Sauberkeit - aussen und innen. Wir bieten schonende Autowäsche und gründliche Innenpflege für den perfekten Look.",
    bullets: ["Lackschonende Aussenreinigung für langanhaltenden Glanz", "Gründliche Innenraumreinigung & Polsterpflege", "Fahrzeugaufbereitung für einen neuwertigen Look"],
    cta: "Jetzt Carwash-Termin bei der Garage Markaj AG in Uznach buchen!",
    icon: Droplets,
  },
  {
    id: "felgen",
    title: "Felgen - Style & Performance",
    intro: "Felgen sind nicht nur ein optisches Highlight, sondern auch entscheidend für die Fahrsicherheit. Ob sportliche Alufelgen oder robuste Stahlfelgen - wir haben die perfekte Lösung für Ihr Fahrzeug.",
    bullets: ["Grosse Auswahl an Alufelgen & Stahlfelgen", "Professionelle Montage & Reifenwechsel", "Felgenaufbereitung & Reparatur für neuwertigen Glanz"],
    cta: "Jetzt Felgen-Beratung bei der Garage Markaj AG in Uznach sichern!",
    icon: Gauge,
  },
];

export const team = [
  {
    name: "Agim Markaj",
    role: "Geschäftsinhaber",
    text: "Mit über 30 Jahren Erfahrung führt Agim Markaj das Unternehmen mit Leidenschaft und einem klaren Fokus auf Qualität und Kundenzufriedenheit.",
    image: images.teamAgim,
  },
  {
    name: "Tatjana Vranjes",
    role: "Stv. Geschäftsführerin",
    text: "Tatjana sorgt für reibungslose Abläufe im Betrieb und ist Ihre Ansprechpartnerin für Organisation, Kundenservice und interne Prozesse.",
    image: images.teamTatjana,
  },
  {
    name: "Vigan Shala",
    role: "Carrosserieleiter",
    text: "Vigan ist Spezialist für Carrosseriearbeiten und Lackierungen - präzise, sorgfältig und mit einem Auge fürs Detail.",
    image: images.teamVigan,
  },
];

export const partners = [
  { name: "Auto Steiner", image: "/images/garage-markaj/partner1.png" },
  { name: "Garage Forster", image: "/images/garage-markaj/partner2.png" },
  { name: "Scania", image: "/images/garage-markaj/partner3.png" },
  { name: "Garage Huber Hombrechtikon", image: "/images/garage-markaj/partner4.png" },
  { name: "Garage Huber Jona", image: "/images/garage-markaj/partner5.png" },
  { name: "Central Garage", image: "/images/garage-markaj/partner6.png" },
  { name: "Auto Heuberger", image: "/images/garage-markaj/partner7.png" },
  { name: "Auto Heuberger", image: "/images/garage-markaj/partner8.png" },
];

export const galleryImages = [
  images.hero,
  images.service,
  images.family,
  images.inspection,
  images.paint,
  images.accident,
  images.wash,
  images.rims,
  images.cars,
];

export const stats = [
  { value: "30+", label: "Jahre Erfahrung" },
  { value: "1'000+", label: "Autos repariert" },
  { value: "500+", label: "Autos verkauft" },
  { value: "2'500+", label: "Räder gewechselt" },
];

export const quickBenefits = ["Grosse Auswahl: geprüfte Occasionen & Neuwagen", "Faire Beratung: Eintausch, Finanzierung & Garantie", "Kompletter Service: Reparatur, Wartung & Kundenservice"];

export const PhoneIcon = Phone;
