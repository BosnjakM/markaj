/**
 * Page content – mirrors garage-markaj.ch 1:1 (structure and copy).
 */
import { images } from "./siteContent";

export const navigation = [
  { to: "/", label: "Home" },
  { to: "/ueber-uns", label: "Über uns" },
  { to: "/autowerkstatt", label: "Autowerkstatt" },
  { to: "/carrosserie", label: "Carrosserie" },
  { to: "/spritzwerk", label: "Spritzwerk" },
  { to: "/occasionen", label: "Occasion & Neuwagen" },
  { to: "/carwash", label: "Carwash" },
  { to: "/felgen", label: "Felgen" },
];

export const social = {
  facebook: "https://www.facebook.com/automarkaj",
  instagram: "https://www.instagram.com/garage_markaj_uznach/",
};

export const MAP_EMBED =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.0117084972334!2d9.04665171561669!3d47.222999979162295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa92c3b10f7fd%3A0xf98e6162cb8a7bce!2sGarage%20Markaj%20AG!5e0!3m2!1sde!2sch!4v1710000000000";

/* ---------------- Home ---------------- */
export const home = {
  metaTitle: "Garage Markaj AG Uznach – Autowerkstatt für Service, Reparatur, Carrosserie & Verkauf",
  metaDescription:
    "Garage Markaj AG in Uznach: Autowerkstatt, Service, Reparaturen, Carrosserie, Spritzwerk, Carwash, Felgen sowie Occasionen und Neuwagen.",
  intro: {
    sub: "Ihr Partner für Autoservice, Reparaturen & Fahrzeughandel in Uznach",
    heading: "Garage Markaj AG – Ihre Autowerkstatt in Uznach",
    paragraphs: [
      "Die Garage Markaj AG in Uznach ist Ihre zuverlässige Autowerkstatt für Service, Reparaturen und Fahrzeugunterhalt. Wir betreuen Fahrzeuge verschiedener Marken und stehen Kunden aus Uznach, Rapperswil-Jona und dem gesamten Linthgebiet mit persönlicher Beratung und fachgerechtem Service zur Seite.",
      "Zu unseren Leistungen gehören unter anderem Autoservice und Wartung, MFK-Vorbereitung, Reifenwechsel, Felgenreparaturen, Carrosseriearbeiten und professionelle Lackierungen. Auch bei Unfall- und Karosserieschäden kümmern wir uns zuverlässig um Ihr Fahrzeug und unterstützen Sie bei Bedarf bei der Abwicklung mit der Versicherung.",
      "Sie suchen eine Occasion oder einen Neuwagen in Uznach? Wir bieten regelmässig geprüfte Fahrzeuge verschiedener Marken und Modelle an. Gerne beraten wir Sie persönlich zu Fahrzeugkauf, Eintausch, Finanzierung und Leasing.",
    ],
  },
  why: [
    "Kompletter Autoservice: Wartung, Reparatur & MFK-Vorbereitung",
    "Carrosserie & Spritzwerk: Unfallreparaturen und professionelle Lackierungen",
    "Reifen & Felgen: Reifenwechsel, Einlagerung & Felgenreparatur",
    "Fahrzeughandel: geprüfte Occasionen & attraktive Neuwagen",
    "Persönliche Beratung: Eintausch, Finanzierung & individuelle Lösungen",
  ],
  leistungen: [
    {
      title: "Inspektion & Wartung",
      text: "Professioneller Autoservice in Uznach nach Herstellervorgaben – für zuverlässige Leistung und Sicherheit.",
      points: ["Öl- & Filterwechsel", "Bremsen- & Fahrzeugcheck", "MFK-Vorbereitung & Diagnose"],
      image: images.inspection,
      to: "/autowerkstatt",
    },
    {
      title: "Klimaservice",
      text: "Mit unserem Klimaservice in Uznach bleibt Ihre Fahrzeugklimaanlage leistungsfähig, hygienisch und zuverlässig.",
      points: ["Kältemittelbefüllung", "Desinfektion der Klimaanlage", "Funktions- & Systemprüfung"],
      image: images.climate,
      to: "/autowerkstatt",
    },
    {
      title: "Standheizungen",
      text: "Standheizungen von Webasto und Eberspächer sorgen für Wärme und freie Scheiben bereits vor der Fahrt.",
      points: ["Beratung & Nachrüstung", "Fachgerechter Einbau", "Komfort im Winter"],
      image: images.heating,
      to: "/autowerkstatt",
    },
    {
      title: "Scheibenreparatur & Austausch",
      text: "Steinschlag oder beschädigte Autoscheibe? Wir prüfen, ob eine Reparatur möglich ist oder ein Scheibenaustausch erforderlich wird.",
      points: ["Steinschlagreparatur", "Frontscheibenaustausch", "Unterstützung mit der Versicherung"],
      image: images.glass,
      to: "/autowerkstatt",
    },
    {
      title: "Reifenwechsel & Radwechsel",
      text: "Sicher unterwegs mit unserem professionellen Reifenservice in Uznach.",
      points: ["Sommer- & Winterreifen wechseln", "Profiltiefe & Luftdruck prüfen", "Reinigung & Einlagerung"],
      image: images.tires,
      to: "/autowerkstatt",
    },
    {
      title: "Unfall- & Carrosseriereparaturen",
      text: "Wir reparieren Unfall- und Carrosserieschäden fachgerecht und bringen Ihr Fahrzeug wieder sicher auf die Strasse.",
      points: ["Carrosserie- & Unfallschäden", "Versicherungsabwicklung", "Ersatzwagen nach Verfügbarkeit"],
      image: images.accident,
      to: "/carrosserie",
    },
    {
      title: "Spritzwerk & Lackierungen",
      text: "Professionelle Fahrzeuglackierungen für kleine Lackschäden, Reparaturen oder komplette Neulackierungen.",
      points: ["Spot-Repair", "Teil- & Komplettlackierung", "Farbgenaue Lackreparaturen"],
      image: images.paint,
      to: "/spritzwerk",
    },
    {
      title: "Occasionen & Neuwagen",
      text: "Entdecken Sie geprüfte Occasionen und Neuwagen in Uznach mit persönlicher Beratung.",
      points: ["Geprüfte Fahrzeuge", "Eintausch Ihres aktuellen Autos", "Finanzierung & Leasing"],
      image: images.cars,
      to: "/occasionen",
    },
    {
      title: "Carwash & Fahrzeugpflege",
      text: "Professionelle Fahrzeugpflege für einen sauberen und gepflegten Auftritt.",
      points: ["Aussenreinigung", "Innenraumreinigung", "Fahrzeugaufbereitung"],
      image: images.wash,
      to: "/carwash",
    },
    {
      title: "Felgenservice & Reparatur",
      text: "Beschädigte Felgen? Wir bieten professionellen Felgenservice in Uznach.",
      points: ["Felgenreparatur", "Aufbereitung & Lackierung", "Alu- & Stahlfelgen"],
      image: images.rims,
      to: "/felgen",
    },
  ],
  gebrauchtwagen:
    "Bei der Garage Markaj AG in Uznach finden Sie geprüfte Occasionen und hochwertige Gebrauchtwagen zu fairen Preisen. Ob Kleinwagen, SUV oder Familienauto – wir bieten Ihnen eine vielseitige Auswahl an Fahrzeugen inklusive Beratung, Eintausch und Finanzierung.",
  about: {
    heading: "Garage Markaj AG – Ihre Fachwerkstatt in Uznach",
    paragraphs: [
      "Seit 1993 ist die Garage Markaj AG zuverlässiger Ansprechpartner für Autoservice, Reparaturen, Carrosseriearbeiten und Fahrzeughandel in Uznach.",
      "Unsere erfahrenen Fachkräfte verbinden modernes Werkstatt-Know-how mit persönlicher Beratung. Ob Wartung, Unfallreparatur, Lackierung oder Fahrzeugkauf – bei uns erhalten Sie kompetenten Service aus einer Hand.",
      "Kunden aus Uznach, Rapperswil-Jona und dem Linthgebiet schätzen unsere zuverlässige Arbeit, transparente Beratung und fairen Service.",
    ],
  },
  stats: [
    { value: "6000+", label: "Autos repariert" },
    { value: "4000+", label: "Autos verkauft" },
    { value: "12000+", label: "Räder gewechselt" },
  ],
};

/* ---------------- Über uns ---------------- */
export const ueberUns = {
  metaTitle: "Über uns | Garage Markaj AG – Autowerkstatt in Uznach seit 1993",
  metaDescription:
    "Die Garage Markaj AG in Uznach ist seit 1993 ein familiengeführter Fachbetrieb rund ums Auto – persönlich, zuverlässig und mit hohen Qualitätsstandards.",
  intro: {
    sub: "Ihre Autowerkstatt in Uznach – Familienbetrieb seit 1993",
    paragraphs: [
      "Die Garage Markaj AG in Uznach ist seit 1993 ein familiengeführter Fachbetrieb rund ums Auto. Persönliche Beratung, zuverlässige Arbeit und hohe Qualitätsstandards stehen bei uns seit über 30 Jahren im Mittelpunkt.",
      "Unsere Leistungen reichen vom Autoservice und Reparaturen über MFK-Vorbereitung, Carrosserie und Spritzwerk bis zum Verkauf von Occasionen und Neuwagen. Dabei betreuen wir Fahrzeuge verschiedener Marken fachgerecht und mit moderner Werkstatttechnik.",
      "Als Garage in Uznach sind wir für Kundinnen und Kunden aus Uznach, Rapperswil-Jona und dem gesamten Linthgebiet da. Transparente Beratung, faire Lösungen und eine langfristige Kundenbeziehung sind für uns selbstverständlich.",
      "Ob Wartung, Reparatur, Unfall- oder Lackschaden oder die Suche nach einem neuen Fahrzeug – bei der Garage Markaj AG erhalten Sie kompetenten Service aus einer Hand.",
    ],
    links: [
      { to: "/autowerkstatt", label: "Autowerkstatt – Service & Reparaturen" },
      { to: "/carrosserie", label: "Carrosserie – Unfall- & Karosserieschäden" },
      { to: "/spritzwerk", label: "Spritzwerk – Professionelle Lackierungen" },
      { to: "/kontakt", label: "Kontakt – Jetzt Termin vereinbaren" },
    ],
  },
  engagement: {
    sub: "Partner der Special Olympics Switzerland",
    heading: "Soziales Engagement",
    paragraphs: [
      "Die Garage Markaj AG engagiert sich auch ausserhalb des Werkstattalltags. Als Sponsor der Special Olympics Switzerland unterstützen wir eine Organisation, die Menschen mit Beeinträchtigung durch Sport fördert und verbindet.",
      "Werte wie Respekt, Fairness, Teamgeist und persönliche Weiterentwicklung sind nicht nur im Sport wichtig. Sie gehören auch zu den Grundsätzen, die wir in unserem Familienbetrieb täglich leben.",
      "Mit unserem Engagement möchten wir einen Beitrag zur Region und zur gesellschaftlichen Teilhabe leisten. Denn Verantwortung bedeutet für uns mehr als guter Service rund ums Fahrzeug.",
    ],
  },
  team: {
    sub: "Persönlich für Sie da – Ihre Ansprechpartner bei der Garage Markaj AG",
    heading: "Unser Team",
    members: [
      {
        name: "Agim Markaj",
        role: "Geschäftsinhaber",
        text: "Mit über 30 Jahren Erfahrung führt Agim Markaj die Garage Markaj AG mit Leidenschaft und einem klaren Fokus auf Qualität, persönliche Beratung und Kundenzufriedenheit.",
        image: images.teamAgim,
        alt: "Agim Markaj Geschäftsinhaber Garage Markaj AG Uznach",
      },
      {
        name: "Tatjana Vranjes",
        role: "Stv. Geschäftsführerin",
        text: "Tatjana Vranjes verantwortet wichtige organisatorische und kaufmännische Abläufe der Garage Markaj AG. Als stellvertretende Geschäftsführerin sorgt sie für strukturierte Prozesse und ist Ansprechpartnerin für Personal- und Finanzthemen.",
        image: images.teamTatjana,
        alt: "Tatjana Vranjes stellvertretende Geschäftsführerin Garage Markaj AG Uznach",
      },
      {
        name: "Vigan Shala",
        role: "Carrosserieleiter",
        text: "Vigan Shala ist verantwortlich für unsere Carrosseriearbeiten. Mit technischem Know-how, Präzision und hohem Qualitätsbewusstsein sorgt er für die fachgerechte Instandsetzung beschädigter Fahrzeuge.",
        image: images.teamVigan,
        alt: "Vigan Shala Carrosserieleiter Garage Markaj AG Uznach",
      },
    ],
  },
};

/* ---------------- Service pages ---------------- */
export type ServicePageData = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  imageAlt: string;
  /** Optional separate image for the page header (falls back to `image`). */
  headerImage?: string;
  intro: {
    heading: string;
    sub: string;
    lead?: string;
    paragraphs: string[];
    bullets: string[];
    cta: string;
  };
  features: { heading: string; sub: string; items: { title: string; text: string }[] };
  chips: { heading: string; sub: string; items: string[] };
  cta: { heading: string; sub: string; text: string; button: string };
};

export const servicePages: ServicePageData[] = [
  {
    slug: "autowerkstatt",
    title: "Autowerkstatt",
    metaTitle: "Autowerkstatt Uznach | Service, Reparatur & MFK | Garage Markaj AG",
    metaDescription:
      "Markenunabhängige Autowerkstatt in Uznach: Autoservice, Reparaturen, Diagnose und MFK-Vorbereitung – persönlich und zuverlässig.",
    image: images.electrics,
    imageAlt: "Autowerkstatt und Autoservice Garage Markaj AG in Uznach",
    headerImage: images.service,
    intro: {
      heading: "Ihre Autowerkstatt in Uznach",
      sub: "Markenunabhängiger Autoservice, Reparaturen & MFK-Vorbereitung",
      lead: "Professioneller Werkstattservice für viele Fahrzeugmarken",
      paragraphs: [
        "In unserer Autowerkstatt in Uznach übernehmen wir Service- und Reparaturarbeiten rund um Ihr Fahrzeug – zuverlässig, persönlich und mit moderner Werkstatttechnik.",
        "Vom Ölwechsel und der Fahrzeugdiagnose bis zur MFK-Vorbereitung kümmern wir uns darum, dass Ihr Auto sicher und zuverlässig unterwegs bleibt.",
      ],
      bullets: [
        "Diagnose & professionelle Fehlersuche",
        "Ölwechsel, Wartung & Fahrzeugservice",
        "MFK-Vorbereitung & Sicherheitschecks",
        "Klimaservice & Reifenservice",
      ],
      cta: "Jetzt Werkstatttermin vereinbaren",
    },
    features: {
      heading: "Warum Garage Markaj AG?",
      sub: "Persönlicher Werkstattservice mit Erfahrung und Qualität",
      items: [
        { title: "Markenunabhängig", text: "Service und Reparaturen für Fahrzeuge verschiedener Marken." },
        { title: "Moderne Technik", text: "Professionelle Diagnose und zeitgemässe Werkstattausrüstung." },
        { title: "Persönliche Beratung", text: "Direkter Kontakt und individuelle Beratung rund um Ihr Fahrzeug." },
        { title: "Fair & transparent", text: "Klare Kommunikation und nachvollziehbare Werkstattarbeiten." },
      ],
    },
    chips: {
      heading: "Unser Werkstattservice",
      sub: "Weitere Leistungen rund um Ihr Fahrzeug",
      items: ["Unfall-Reparaturen", "Klima-Service", "Reifen-Service", "MFK-Vorbereitung", "Stand-Heizungen"],
    },
    cta: {
      heading: "Werkstatttermin vereinbaren",
      sub: "Schnell, persönlich und unkompliziert",
      text: "Sie benötigen einen Autoservice, eine Reparatur oder eine MFK-Vorbereitung? Kontaktieren Sie die Garage Markaj AG in Uznach. Wir beraten Sie persönlich und kümmern uns zuverlässig um Ihr Fahrzeug.",
      button: "Zum Kontaktformular",
    },
  },
  {
    slug: "carrosserie",
    title: "Carrosserie",
    metaTitle: "Carrosserie Uznach | Unfallreparatur & Hagelschaden | Garage Markaj AG",
    metaDescription:
      "Carrosserie in Uznach: Unfallreparaturen, Hagelschäden, Blech- und Lackreparaturen inklusive Versicherungsabwicklung.",
    image: images.accident,
    imageAlt: "Carrosserie und Unfallreparatur Garage Markaj AG in Uznach",
    intro: {
      heading: "Carrosserie in Uznach",
      sub: "Unfallreparaturen, Hagelschäden & professionelle Instandsetzung",
      paragraphs: [
        "Ob Parkschaden, Hagelschaden oder grösserer Unfall: Die Garage Markaj AG in Uznach repariert Carrosserie- und Fahrzeugschäden fachgerecht und zuverlässig.",
        "Von der Schadenaufnahme bis zur Endkontrolle kümmern wir uns um den gesamten Ablauf. Auf Wunsch übernehmen wir auch die Kommunikation mit Ihrer Versicherung.",
      ],
      bullets: [
        "Unfall- & Carrosserieschäden",
        "Hagelschäden & Dellendrücken",
        "Blech- & Strukturreparaturen",
        "Versicherungsabwicklung",
      ],
      cta: "Jetzt Schaden prüfen lassen",
    },
    features: {
      heading: "Unsere Carrosserie-Leistungen",
      sub: "Professionelle Reparaturen rund um Ihre Fahrzeugkarosserie",
      items: [
        { title: "Unfallreparaturen", text: "Fachgerechte Reparatur von Unfall-, Blech- und Strukturschäden." },
        { title: "Lackierarbeiten", text: "Präzise Teil- und Reparaturlackierungen für ein sauberes Ergebnis." },
        { title: "Dellendrücken", text: "Parkdellen und Hagelschäden schonend und effizient beseitigen." },
        { title: "Versicherungsabwicklung", text: "Unterstützung bei Schadenmeldung und Kommunikation mit der Versicherung." },
        { title: "Ersatzfahrzeug", text: "Auf Wunsch bleiben Sie während der Reparatur weiterhin mobil." },
        { title: "Endkontrolle", text: "Jede Reparatur wird vor der Fahrzeugübergabe sorgfältig geprüft." },
      ],
    },
    chips: {
      heading: "Carrosserie & Schadenservice",
      sub: "Lösungen für kleine und grössere Fahrzeugschäden",
      items: ["Unfall-Reparatur", "Hagel-Schäden", "Blech-Schäden", "Lack-Reparaturen", "Versicherungs-Service"],
    },
    cta: {
      heading: "Carrosserie-Offerte anfragen",
      sub: "Unfallschaden, Hagelschaden, Kratzer oder Beule?",
      text: "Lassen Sie Ihren Fahrzeugschaden von der Garage Markaj AG in Uznach prüfen. Wir beraten Sie persönlich und unterstützen Sie auf Wunsch auch bei der Versicherungsabwicklung.",
      button: "Offerte anfragen",
    },
  },
  {
    slug: "spritzwerk",
    title: "Spritzwerk",
    metaTitle: "Spritzwerk Uznach | Fahrzeuglackierung & Spot-Repair | Garage Markaj AG",
    metaDescription:
      "Spritzwerk in Uznach: Teil- und Komplettlackierungen, Spot-Repair, präzise Farbanpassung und Lackschutz.",
    image: images.paint,
    imageAlt: "Spritzwerk und Fahrzeuglackierung Garage Markaj AG in Uznach",
    intro: {
      heading: "Spritzwerk in Uznach",
      sub: "Fahrzeuglackierung, Spot-Repair & professionelle Lackreparaturen",
      paragraphs: [
        "Unser Spritzwerk in Uznach bietet professionelle Lackierarbeiten für Fahrzeuge verschiedener Marken. Ob Kratzer, Lackschaden oder grössere Reparatur – wir sorgen für ein sauberes und hochwertiges Ergebnis.",
        "Mit präziser Farbanpassung, hochwertigen Lacken und viel Erfahrung bringen wir beschädigte Fahrzeugoberflächen wieder in Bestform.",
      ],
      bullets: [
        "Teil- & Komplettlackierungen",
        "Spot-Repair & Lackreparaturen",
        "Präzise Farbanpassung",
        "Lackschutz & Versiegelung",
      ],
      cta: "Jetzt Lackschaden prüfen lassen",
    },
    features: {
      heading: "Unsere Spritzwerk-Leistungen",
      sub: "Professionelle Lackierung und Reparatur für Ihr Fahrzeug",
      items: [
        { title: "Teil- & Komplettlackierung", text: "Professionelle Lackierung einzelner Fahrzeugteile oder kompletter Fahrzeuge." },
        { title: "Spot-Repair", text: "Kleine Kratzer und Lackschäden schnell und wirtschaftlich reparieren." },
        { title: "Farbanpassung", text: "Präzise Anpassung an den bestehenden Originalfarbton Ihres Fahrzeugs." },
        { title: "Lackschutz", text: "Schutz und Versiegelung für langlebig gepflegte Fahrzeugoberflächen." },
        { title: "Versicherungsabwicklung", text: "Unterstützung bei versicherten Lack- und Unfallschäden." },
        { title: "Qualitätsarbeit", text: "Saubere Verarbeitung, präzise Ergebnisse und hochwertige Materialien." },
      ],
    },
    chips: {
      heading: "Lackierung & Reparatur",
      sub: "Lösungen für verschiedene Lackschäden",
      items: ["Kratzer-Reparatur", "Spot-Repair", "Teil-Lackierung", "Farb-Anpassung", "Lack-Schutz"],
    },
    cta: {
      heading: "Lackier-Offerte anfragen",
      sub: "Kratzer, Lackschaden oder beschädigtes Fahrzeugteil?",
      text: "Lassen Sie Ihren Lackschaden von der Garage Markaj AG in Uznach prüfen. Wir beraten Sie persönlich und erstellen eine passende Lösung für Ihr Fahrzeug.",
      button: "Offerte anfragen",
    },
  },
  {
    slug: "carwash",
    title: "Carwash",
    metaTitle: "Carwash Uznach | Fahrzeugreinigung & Autoaufbereitung | Garage Markaj AG",
    metaDescription:
      "Carwash in Uznach: Aussen- und Innenreinigung, Polster- und Lackpflege sowie Fahrzeugaufbereitung für Verkauf und Leasingrückgabe.",
    image: images.wash,
    imageAlt: "Carwash und Fahrzeugreinigung Garage Markaj AG in Uznach",
    intro: {
      heading: "Carwash in Uznach",
      sub: "Fahrzeugreinigung, Innenpflege & professionelle Autoaufbereitung",
      paragraphs: [
        "In unserem Carwash in Uznach reinigen und pflegen wir Ihr Fahrzeug gründlich – innen wie aussen. Dabei achten wir auf eine saubere Verarbeitung und hochwertige Pflegeprodukte.",
        "Ob für den Alltag, vor dem Verkauf oder zur Leasingrückgabe: Wir bringen Ihr Fahrzeug wieder in einen gepflegten und überzeugenden Zustand.",
      ],
      bullets: [
        "Aussen- & Innenreinigung",
        "Polster- & Innenraumpflege",
        "Lackpflege & Versiegelung",
        "Aufbereitung für Verkauf & Leasingrückgabe",
      ],
      cta: "Jetzt Fahrzeugreinigung buchen",
    },
    features: {
      heading: "Unsere Reinigungsleistungen",
      sub: "Professionelle Pflege für Innenraum, Lack und Fahrzeugoberflächen",
      items: [
        { title: "Aussenreinigung", text: "Gründliche Reinigung von Lack, Felgen und Fahrzeugoberflächen." },
        { title: "Innenreinigung", text: "Saubere Pflege von Innenraum, Scheiben und Kunststoffoberflächen." },
        { title: "Lackpflege", text: "Pflege und Versiegelung für Glanz und langfristigen Lackschutz." },
        { title: "Polsterpflege", text: "Gründliche Reinigung und Auffrischung von Stoff- und Lederoberflächen." },
        { title: "Autoaufbereitung", text: "Ideal für Fahrzeugverkauf, Leasingrückgabe oder einen gepflegten Alltag." },
        { title: "Individuelle Pflege", text: "Reinigung und Pflege passend zu Fahrzeugzustand und gewünschtem Umfang." },
      ],
    },
    chips: {
      heading: "Fahrzeugpflege & Aufbereitung",
      sub: "Sauber und gepflegt bis ins Detail",
      items: ["Aussen-Reinigung", "Innen-Reinigung", "Polster-Pflege", "Lack-Pflege", "Fahrzeug-Aufbereitung"],
    },
    cta: {
      heading: "Fahrzeugreinigung buchen",
      sub: "Innen und aussen professionell gepflegt",
      text: "Vereinbaren Sie Ihren Carwash-Termin bei der Garage Markaj AG in Uznach. Wir reinigen und pflegen Ihr Fahrzeug gründlich und passend zu Ihrem Bedarf.",
      button: "Termin vereinbaren",
    },
  },
  {
    slug: "felgen",
    title: "Felgen",
    metaTitle: "Felgenreparatur Uznach | Lackierung & Aufbereitung | Garage Markaj AG",
    metaDescription:
      "Felgenreparatur in Uznach: Bordsteinschäden, Felgenlackierung, Reinigung und Aufbereitung für Alu- und Stahlfelgen.",
    image: images.rims,
    imageAlt: "Felgenreparatur und Felgenaufbereitung Garage Markaj AG in Uznach",
    intro: {
      heading: "Felgenreparatur in Uznach",
      sub: "Reparatur, Lackierung & Aufbereitung für Alu- und Stahlfelgen",
      paragraphs: [
        "Kratzer, Bordsteinschäden oder stumpfe Oberflächen? Bei der Garage Markaj AG in Uznach bringen wir Ihre Felgen wieder in einen gepflegten Zustand.",
        "Wir übernehmen Felgenreparatur, Lackierung, Reinigung und Aufbereitung für Alu- und Stahlfelgen – sauber, professionell und mit viel Sorgfalt.",
      ],
      bullets: [
        "Bordsteinschäden & Kratzer",
        "Felgenlackierung & Aufbereitung",
        "Felgenreinigung & Pflege",
        "Saisonservice & Einlagerungsvorbereitung",
      ],
      cta: "Jetzt Felgen prüfen lassen",
    },
    features: {
      heading: "Unsere Felgen-Dienstleistungen",
      sub: "Pflege, Reparatur und Aufbereitung rund um Ihre Felgen",
      items: [
        { title: "Felgenreparatur", text: "Reparatur von Kratzern, Bordsteinschäden und kleineren Beschädigungen." },
        { title: "Felgenlackierung", text: "Neue Lackierung für eine frische und hochwertige Felgenoptik." },
        { title: "Felgenreinigung", text: "Gründliche Entfernung von Schmutz, Bremsstaub und Rückständen." },
        { title: "Schutz & Pflege", text: "Pflege und Versiegelung für länger anhaltenden Glanz und Schutz." },
        { title: "Saisonservice", text: "Reinigung und Aufbereitung passend zum saisonalen Räderwechsel." },
        { title: "Sichtprüfung", text: "Kontrolle auf sichtbare Schäden vor Reparatur oder Aufbereitung." },
      ],
    },
    chips: {
      heading: "Felgenservice & Aufbereitung",
      sub: "Lösungen für beschädigte und beanspruchte Felgen",
      items: ["Bordstein-Schäden", "Felgen-Lackierung", "Felgen-Aufbereitung", "Felgen-Reinigung", "Saison-Service"],
    },
    cta: {
      heading: "Felgen-Service anfragen",
      sub: "Kratzer, Bordsteinschäden oder Felgen mit Gebrauchsspuren?",
      text: "Lassen Sie Ihre Felgen bei der Garage Markaj AG in Uznach prüfen. Wir beraten Sie zu Reparatur, Lackierung, Reinigung und Aufbereitung.",
      button: "Termin vereinbaren",
    },
  },
];

/* ---------------- Occasionen ---------------- */
export const occasionen = {
  title: "Occasionen & Neuwagen",
  metaTitle: "Occasionen & Neuwagen – Fahrzeuge kaufen bei Garage Markaj AG",
  metaDescription:
    "Geprüfte Occasionen und Neuwagen in Uznach – mit persönlicher Beratung, Eintausch, Finanzierung und Probefahrt.",
  image: images.cars,
  intro: {
    heading: "Occasionen und Gebrauchtwagen in Uznach kaufen",
    paragraphs: [
      "Bei der Garage Markaj AG in Uznach finden Sie geprüfte Occasionen und hochwertige Gebrauchtwagen zu fairen Preisen. Ob Kleinwagen, SUV oder Familienauto – wir bieten Ihnen eine vielseitige Auswahl an Fahrzeugen inklusive Beratung, Eintausch und Finanzierung.",
      "Alle Fahrzeuge werden sorgfältig geprüft und sind sofort verfügbar für eine Probefahrt. Besuchen Sie uns in Uznach oder entdecken Sie unsere aktuellen Angebote online.",
    ],
  },
  cta: {
    heading: "Interessiert an einem Fahrzeug?",
    sub: "Vereinbaren Sie eine Probefahrt oder fordern Sie eine Eintauschofferte an",
    text: "Sie haben ein passendes Fahrzeug entdeckt oder möchten Ihr aktuelles Fahrzeug in Zahlung geben? Gerne beraten wir Sie persönlich, erstellen eine transparente Offerte und ermöglichen Ihnen eine unverbindliche Probefahrt.",
    button: "Jetzt Kontakt aufnehmen",
  },
};

/* ---------------- Legal ---------------- */
export type LegalBlock = { heading?: string; paragraphs: string[]; list?: string[] };
export type LegalPageData = { slug: string; title: string; metaTitle: string; blocks: LegalBlock[] };

export const legalPages: LegalPageData[] = [
  {
    slug: "impressum",
    title: "Impressum",
    metaTitle: "Impressum | Garage Markaj AG – Ihre Autowerkstatt in Uznach",
    blocks: [
      {
        heading: "Angaben gemäss §5 des Schweizerischen Obligationenrechts (OR)",
        paragraphs: [
          "Garage Markaj AG, Zürcherstrasse 81, 8730 Uznach, Schweiz",
          "Telefon: 055 284 26 46 · E-Mail: info@garage-markaj.ch · Web: www.garage-markaj.ch",
          "UID-Nummer: CHE-111.713.748",
        ],
      },
      { heading: "Vertretungsberechtigte Person(en)", paragraphs: ["Agim Markaj, Geschäftsführer"] },
      {
        heading: "Haftungsausschluss",
        paragraphs: [
          "Garage Markaj AG übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche gegen die Garage Markaj AG wegen Schäden materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen entstanden sind, werden ausgeschlossen.",
        ],
      },
      {
        heading: "Urheberrechte",
        paragraphs: [
          "Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf der Website gehören ausschliesslich der Garage Markaj AG oder den speziell genannten Rechteinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung der Urheberrechtsträger im Voraus einzuholen.",
        ],
      },
    ],
  },
  {
    slug: "datenschutz",
    title: "Datenschutzerklärung",
    metaTitle: "Datenschutzerklärung | Garage Markaj AG – Datenschutz & Rechtliches",
    blocks: [
      {
        paragraphs: [
          "Der Schutz Ihrer persönlichen Daten ist uns ein zentrales Anliegen. In dieser Datenschutzerklärung informieren wir Sie transparent darüber, welche Daten wir auf unserer Website erfassen, wie wir sie verwenden und welche Rechte Ihnen dabei zustehen.",
        ],
      },
      {
        heading: "1. Verantwortliche Stelle",
        paragraphs: ["Garage Markaj AG, Zürcherstrasse 81, 8730 Uznach, Schweiz · E-Mail: info@garage-markaj.ch"],
      },
      {
        heading: "2. Erhebung und Verarbeitung personenbezogener Daten",
        paragraphs: [
          "Beim Besuch unserer Website speichern wir standardmässig gewisse Zugriffsdaten in sogenannten Server-Logfiles. Dazu gehören unter anderem:",
          "Diese Daten dienen ausschliesslich der Gewährleistung eines sicheren und stabilen Betriebs der Website und lassen keine Rückschlüsse auf einzelne Personen zu.",
        ],
        list: ["IP-Adresse", "Datum und Uhrzeit des Zugriffs", "Besuchte Seiten und aufgerufene Dateien", "Browsertyp und Version", "Betriebssystem"],
      },
      {
        heading: "3. Kontaktformular und Kommunikation",
        paragraphs: [
          "Wenn Sie uns über das Kontaktformular oder per E-Mail kontaktieren, werden Ihre Angaben (Name, E-Mail, Telefonnummer, Nachricht) zur Bearbeitung Ihrer Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.",
        ],
      },
      {
        heading: "4. Einsatz von Cookies",
        paragraphs: [
          "Wir verwenden Cookies, um die Nutzung unserer Website zu analysieren und zu verbessern. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und keine Schäden verursachen. Sie können Cookies in den Einstellungen Ihres Browsers jederzeit deaktivieren oder löschen.",
        ],
      },
      {
        heading: "5. Drittanbieter-Dienste",
        paragraphs: [
          "Auf unserer Website sind Dienste von Drittanbietern eingebunden, insbesondere:",
          "Diese Anbieter können personenbezogene Daten erfassen (z. B. IP-Adresse, Browserdaten), wenn Sie deren eingebettete Dienste aufrufen. Es gelten jeweils deren eigene Datenschutzbestimmungen.",
        ],
        list: [
          "Google Maps: zur Darstellung des Standorts (Google Ireland Ltd.).",
          "AutoScout24.ch: zur Einbindung unserer Fahrzeugangebote (Scout24 Schweiz AG).",
          "WebPiranha GmbH: als technischer Dienstleister und Website-Betreiber.",
        ],
      },
      {
        heading: "6. Ihre Rechte",
        paragraphs: [
          "Sie haben das Recht auf Auskunft, Berichtigung, Löschung sowie Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Ausserdem können Sie der Verarbeitung widersprechen und haben das Recht auf Datenübertragbarkeit, sofern anwendbar.",
          "Bei Fragen zur Datenverarbeitung oder zur Ausübung Ihrer Rechte können Sie sich jederzeit an uns wenden: info@garage-markaj.ch",
        ],
      },
      {
        heading: "7. Datensicherheit",
        paragraphs: [
          "Wir treffen angemessene technische und organisatorische Sicherheitsmassnahmen, um Ihre personenbezogenen Daten vor Verlust, Missbrauch oder unbefugtem Zugriff zu schützen.",
        ],
      },
      {
        heading: "8. Änderungen",
        paragraphs: [
          "Diese Datenschutzerklärung kann jederzeit ohne Vorankündigung angepasst werden. Es gilt jeweils die aktuelle, auf dieser Website veröffentlichte Version.",
          "Stand: April 2025",
        ],
      },
    ],
  },
  {
    slug: "agb",
    title: "Allgemeine Geschäftsbedingungen",
    metaTitle: "AGB – Allgemeine Geschäftsbedingungen | Garage Markaj AG Uznach",
    blocks: [
      {
        heading: "1. Geltungsbereich",
        paragraphs: [
          'Diese Allgemeinen Geschäftsbedingungen (AGB) regeln das Vertragsverhältnis zwischen der Garage Markaj AG (nachfolgend "Garage") und ihren Kunden für sämtliche Dienstleistungen, Verkäufe und Reparaturen. Abweichende Bedingungen bedürfen der schriftlichen Zustimmung.',
        ],
      },
      {
        heading: "2. Leistungen",
        paragraphs: [
          "Die Garage erbringt Dienstleistungen im Bereich Fahrzeugreparatur, -service, Carrosserie-, Lackier- und Reinigungsarbeiten sowie Fahrzeugverkauf (Occasionen & Neuwagen). Die Leistungen erfolgen nach bestem Wissen und Gewissen sowie nach aktuellem technischem Standard.",
        ],
      },
      {
        heading: "3. Termine und Annahme",
        paragraphs: [
          "Alle Termine werden nach Möglichkeit eingehalten. Verzögerungen durch externe Faktoren (z. B. Lieferverzögerungen, höhere Gewalt) berechtigen nicht zum Rücktritt vom Auftrag oder zu Schadenersatzforderungen.",
        ],
      },
      {
        heading: "4. Preise & Zahlungsbedingungen",
        paragraphs: [
          "Alle Preise verstehen sich in Schweizer Franken (CHF) inkl. MwSt., sofern nicht anders vereinbart. Die Zahlung ist sofort nach Leistungserbringung oder gemäss vereinbarter Zahlungsfrist fällig. Bei verspäteter Zahlung behalten wir uns Mahngebühren und rechtliche Schritte vor.",
        ],
      },
      {
        heading: "5. Fahrzeugverkauf (Occasionen & Neuwagen)",
        paragraphs: [
          "Beim Verkauf gelten die schriftlich vereinbarten Konditionen. Fahrzeugangaben sind unverbindlich; Irrtümer, Zwischenverkauf und Änderungen bleiben vorbehalten. Garantieleistungen erfolgen gemäss separater Vereinbarung oder Herstellerbedingungen.",
        ],
      },
      {
        heading: "6. Haftung",
        paragraphs: [
          "Die Garage haftet nur für grobfahrlässig oder vorsätzlich verursachte Schäden. Für Folgeschäden oder entgangenen Gewinn wird keine Haftung übernommen. Bei Arbeiten mit Fremdteilen oder auf Kundenwunsch entfällt jegliche Haftung.",
        ],
      },
      {
        heading: "7. Abnahme und Beanstandungen",
        paragraphs: [
          "Der Kunde ist verpflichtet, das Fahrzeug nach Erbringung der Leistung umgehend zu prüfen. Offensichtliche Mängel sind innert 3 Werktagen schriftlich zu melden. Nachträgliche Beanstandungen werden nicht anerkannt.",
        ],
      },
      {
        heading: "8. Datenschutz",
        paragraphs: [
          "Personenbezogene Daten werden gemäss unserer Datenschutzerklärung behandelt. Kundendaten werden nicht an Dritte weitergegeben, ausser zur Vertragserfüllung (z. B. Versicherungen, Behörden, Partnerfirmen).",
        ],
      },
      {
        heading: "9. Anwendbares Recht & Gerichtsstand",
        paragraphs: [
          "Es gilt ausschliesslich schweizerisches Recht. Gerichtsstand ist der Sitz der Garage Markaj AG in 8730 Uznach, sofern nicht gesetzlich anders vorgeschrieben.",
          "Stand: April 2025",
        ],
      },
    ],
  },
];
