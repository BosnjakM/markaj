import {
  BadgeCheck,
  Car,
  CarFront,
  ClipboardCheck,
  Droplets,
  Gauge,
  Hammer,
  Handshake,
  MapPin,
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
  { label: "Dienstleistungen", href: "#leistungen" },
  { label: "Occasion & Neuwagen", href: "#gebrauchtwagen" },
  { label: "Carwash", href: "#carwash" },
  { label: "Über uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export const images = {
  logo: "/images/garage-markaj/Logo-Garage-Markaj-Weiss.png",
  logoDark: "/images/garage-markaj/Logo-Garage-Markaj-Dunkel.png",
  hero: "/images/garage-markaj/garage-markaj-startseite-optimized.webp",
  service: "/images/garage-markaj/Markaj-027-optimized.webp",
  family: "/images/garage-markaj/familie_markajv1-optimized.webp",
  about: "/images/garage-markaj/werkstatt.png",
  electrics: "/images/garage-markaj/fahrzeugelektrik-optimized.webp",
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

export type HeroSlide = {
  image: string;
  kicker: string;
  title: string;
  subtitle: string;
};

// Cinematic drone shots (optimized from originals in /fotos)
export const heroSlides: HeroSlide[] = [
  {
    image: "/images/hero-drone/164701_0190.webp",
    kicker: "Ihr Partner für Autoservice, Reparaturen & Fahrzeughandel in Uznach",
    title: "Garage Markaj AG – Ihre Autowerkstatt in Uznach",
    subtitle: "Wir betreuen Fahrzeuge verschiedener Marken und stehen Kunden aus Uznach, Rapperswil-Jona und dem gesamten Linthgebiet mit persönlicher Beratung und fachgerechtem Service zur Seite.",
  },
  {
    image: "/images/hero-drone/164605_0187.webp",
    kicker: "Autowerkstatt",
    title: "Ihre Autowerkstatt in Uznach",
    subtitle: "Markenunabhängiger Autoservice, Reparaturen & MFK-Vorbereitung.",
  },
  {
    image: "/images/hero-drone/164713_0192.webp",
    kicker: "Carrosserie",
    title: "Carrosserie in Uznach",
    subtitle: "Unfallreparaturen, Hagelschäden & professionelle Instandsetzung.",
  },
  {
    image: "/images/hero-drone/163805_0167.webp",
    kicker: "Spritzwerk",
    title: "Spritzwerk in Uznach",
    subtitle: "Fahrzeuglackierung, Spot-Repair & professionelle Lackreparaturen.",
  },
  {
    image: "/images/hero-drone/164529_0184.webp",
    kicker: "Occasion & Neuwagen",
    title: "Occasionen und Gebrauchtwagen in Uznach kaufen",
    subtitle: "Geprüfte Fahrzeuge inklusive Beratung, Eintausch und Finanzierung.",
  },
  {
    image: "/images/hero-drone/164101_0176.webp",
    kicker: "Carwash",
    title: "Carwash in Uznach",
    subtitle: "Fahrzeugreinigung, Innenpflege & professionelle Autoaufbereitung.",
  },
];

export type Service = {
  id: string;
  title: string;
  text: string;
  image: string;
  icon: LucideIcon;
};

export const trustBadges = ["Alle Marken", "In Uznach", "Service & Reparatur", "Carrosserie & Lackierung", "Occasion & Neuwagen"];

export const trustPoints = [
  { title: "Alle Marken", text: "Service, Diagnose und Reparaturen für Fahrzeuge vieler Hersteller.", icon: CarFront },
  { title: "Persönliche Beratung", text: "Direkter Kontakt, klare Empfehlung und kein unnötiges Fachchinesisch.", icon: Handshake },
  { title: "Faire Konditionen", text: "Transparente Offerten, saubere Arbeit und nachvollziehbare Preise.", icon: BadgeCheck },
  { title: "Service in Uznach", text: "Lokal erreichbar an der Zürcherstrasse 81, mitten im Linthgebiet.", icon: MapPin },
];

export const services: Service[] = [
  {
    id: "autowerkstatt",
    title: "Autowerkstatt",
    text: "Wartung, Diagnose und Reparaturen werden sauber geplant und zuverlässig ausgeführt.",
    image: images.inspection,
    icon: Wrench,
  },
  {
    id: "wartung",
    title: "Service & Wartung",
    text: "Regelmässige Pflege nach Vorgabe, damit Ihr Auto zuverlässig bleibt.",
    image: images.service,
    icon: ClipboardCheck,
  },
  {
    id: "carrosserie",
    title: "Carrosserie",
    text: "Dellen, Parkschäden und Unfallschäden beheben wir fachgerecht und präzise.",
    image: images.accident,
    icon: Hammer,
  },
  {
    id: "spritzwerk",
    title: "Fahrzeuglackierung",
    text: "Vom Spot-Repair bis zur Lackierung sorgen wir für ein stimmiges Finish.",
    image: images.paint,
    icon: Paintbrush,
  },
  {
    id: "felgen",
    title: "Felgenreparatur",
    text: "Bordsteinschäden und Gebrauchsspuren werden professionell aufgearbeitet.",
    image: images.rims,
    icon: Gauge,
  },
  {
    id: "reifenservice",
    title: "Reifenservice",
    text: "Radwechsel, Reifenmontage, Kontrolle und Einlagerung aus einer Hand.",
    image: images.tires,
    icon: Gauge,
  },
  {
    id: "carwash",
    title: "Carwash",
    text: "Schonende Fahrzeugreinigung für gepflegten Glanz innen und aussen.",
    image: images.wash,
    icon: Droplets,
  },
  {
    id: "occasion",
    title: "Occasion & Neuwagen",
    text: "Geprüfte Fahrzeuge, Beratung, Eintausch, Finanzierung und Probefahrt.",
    image: images.cars,
    icon: Car,
  },
];

export const processSteps = [
  { title: "Anfrage", text: "Sie melden sich telefonisch, per E-Mail oder direkt vor Ort." },
  { title: "Diagnose", text: "Wir prüfen das Fahrzeug und besprechen die nächsten Schritte." },
  { title: "Reparatur", text: "Die Arbeit wird sauber, termintreu und transparent ausgeführt." },
  { title: "Übergabe", text: "Sie erhalten Ihr Fahrzeug bereit, kontrolliert und verständlich erklärt zurück." },
];

export const hubBenefits = ["Persönliche Beratung", "Faire Konditionen", "Saubere Ausführung", "Kurze Wege in Uznach"];

export const whyItems = [
  "Persönliche Beratung durch ein eingespieltes Team",
  "Viele Leistungen aus einer Hand: Werkstatt, Carrosserie, Lackierung, Carwash und Verkauf",
  "Zuverlässige Arbeit mit klarer Kommunikation",
  "Faire Preise und transparente Empfehlungen",
  "Lokale Garage in Uznach mit Erfahrung seit 1993",
];

export const team = [
  {
    name: "Agim Markaj",
    role: "Geschäftsinhaber",
    text: "Agim Markaj führt die Garage mit Erfahrung, ruhiger Hand und hohem Anspruch an saubere Arbeit.",
    image: images.teamAgim,
  },
  {
    name: "Tatjana Vranjes",
    role: "Stv. Geschäftsführerin",
    text: "Tatjana koordiniert Abläufe, Termine und Kundenanliegen mit Überblick und Verlässlichkeit.",
    image: images.teamTatjana,
  },
  {
    name: "Vigan Shala",
    role: "Carrosserieleiter",
    text: "Vigan betreut Carrosserie- und Lackierarbeiten mit Präzision und Blick fürs Detail.",
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

export const galleryItems = [
  { src: "/images/hero-drone/164709_0191.webp", label: "Garage Markaj AG aus der Luft" },
  { src: "/images/hero-drone/164642_0189.webp", label: "Unser Standort an der Zürcherstrasse" },
  { src: images.service, label: "Service & Wartung" },
  { src: "/images/hero-drone/163740_0166.webp", label: "Solarenergie vom eigenen Dach" },
  { src: images.paint, label: "Spritzwerk & Lackierung" },
  { src: images.accident, label: "Carrosserie" },
  { src: "/images/hero-drone/164545_0186.webp", label: "Occasionen vor Ort" },
  { src: images.rims, label: "Felgenreparatur" },
  { src: images.family, label: "Familie Markaj" },
];

export const stats = [
  { value: "30+", label: "Jahre Erfahrung" },
  { value: "1'000+", label: "Autos repariert" },
  { value: "500+", label: "Autos verkauft" },
  { value: "2'500+", label: "Räder gewechselt" },
];

export const PhoneIcon = Phone;
export const SparklesIcon = Sparkles;
export const ShieldIcon = ShieldCheck;
