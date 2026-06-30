/**
 * Single source of content for a gastro landing.
 *
 * This is the ONLY file you edit to spin a new mockup per restaurant/bar:
 * fill the data, drop the images in /public, set brand colors in theme.css.
 * Everything in the pages reads from here.
 */

export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export interface HoursRow {
  /** e.g. "Lun a Vie", "Sábados", "Domingos" */
  days: string;
  /** e.g. "19:00 – 01:00" or "Cerrado" */
  hours: string;
}

export interface GalleryImage {
  /** path under /public, e.g. "/gallery/plato-1.jpg" */
  src: string;
  alt: string;
}

export interface SiteContent {
  brand: {
    name: string;
    /** short tagline shown in the hero badge */
    badge: string;
    /** single letter or short string for the logo mark */
    mark: string;
  };
  hero: {
    title: string;
    subtitle: string;
  };
  /** WhatsApp click-to-chat: international number, digits only (e.g. 5493517684603) */
  whatsapp: {
    number: string;
    /** prefilled message when a visitor taps "Reservar" */
    reservationMessage: string;
  };
  about: {
    title: string;
    body: string;
  };
  menu: MenuCategory[];
  hours: HoursRow[];
  /** Options for the reservation form */
  reservation: {
    partySizes: number[];
    timeSlots: string[];
  };
  location: {
    address: string;
    city: string;
    /** Google Maps embed URL (Share → Embed a map → src="...") or a plain maps link */
    mapEmbedUrl?: string;
    mapsLink: string;
    /** Optional coordinates for SEO structured data */
    geo?: { lat: number; lng: number };
  };
  gallery: GalleryImage[];
  social: {
    instagram?: string;
    facebook?: string;
  };
  /** SEO + Google Business structured data */
  seo: {
    /** Full deployed URL (no trailing slash) — used for canonical, og:url, JSON-LD */
    url: string;
    /** Share image under /public (1200×630 ideal) */
    ogImage: string;
    /** "$", "$$", "$$$" */
    priceRange: string;
    /** e.g. "Argentina, Bodegón" */
    cuisine: string;
    /** schema.org openingHours strings, e.g. ["Tu-Su 19:00-01:00"] */
    openingHoursSchema?: string[];
  };
}

/**
 * DEMO DATA — Fanfarrón (Güemes, Córdoba).
 * Replace with the real client's data. Kept realistic so the mockup looks finished.
 */
export const site: SiteContent = {
  brand: {
    name: "Fanfarrón",
    badge: "Bodegón contemporáneo · Güemes",
    mark: "F",
  },
  hero: {
    title: "El bodegón de siempre, servido como hoy",
    subtitle:
      "Recetas clásicas, pastas caseras y carnes bien servidas en el corazón de Güemes. La sobremesa larga es parte del plato.",
  },
  whatsapp: {
    number: "5493517684603",
    reservationMessage:
      "¡Hola Fanfarrón! Quería reservar una mesa. ¿Tienen lugar para el ",
  },
  about: {
    title: "La mesa que no tiene apuro",
    body: "Reivindicamos el bodegón argentino: el encuentro, la charla que se estira y los platos que se comparten. Cocina honesta, porciones que rinden y una carta que mira al clásico con ojos de hoy.",
  },
  menu: [
    {
      title: "Para empezar",
      items: [
        { name: "Vitel toné", description: "Todo el año, no solo en las fiestas", price: "$8.500" },
        { name: "Provoleta a la parrilla", description: "Orégano, aceite de oliva, pan casero", price: "$7.000" },
        { name: "Rabas a la provenzal", description: "Porción para compartir", price: "$11.000" },
      ],
    },
    {
      title: "Principales",
      items: [
        { name: "Osobuco braseado al malbec", description: "El favorito indiscutido de la casa", price: "$16.500" },
        { name: "Milanesa napolitana", description: "Con ñoquis caseros", price: "$13.000" },
        { name: "Bife de chorizo", description: "Con guarnición a elección", price: "$15.000" },
        { name: "Fusilli al fierrito", description: "Con salmón rosado", price: "$12.500" },
      ],
    },
    {
      title: "Para cerrar",
      items: [
        { name: "Flan casero", description: "Con dulce de leche y crema", price: "$5.500" },
        { name: "Vigilante", description: "Queso y dulce de membrillo", price: "$4.500" },
      ],
    },
  ],
  hours: [
    { days: "Martes a Domingo", hours: "19:00 – 01:00" },
    { days: "Lunes", hours: "Cerrado" },
  ],
  reservation: {
    partySizes: [1, 2, 3, 4, 5, 6, 7, 8],
    timeSlots: ["19:00", "20:00", "21:00", "22:00", "23:00"],
  },
  location: {
    address: "Fructuoso Rivera 260, Galería Muy Güemes",
    city: "Córdoba",
    mapEmbedUrl: "",
    mapsLink: "https://maps.google.com/?q=Fructuoso+Rivera+260+Cordoba",
    geo: { lat: -31.4263, lng: -64.1888 },
  },
  gallery: [
    { src: "/gallery/placeholder-1.svg", alt: "Plato de la casa" },
    { src: "/gallery/placeholder-2.svg", alt: "Salón del bodegón" },
    { src: "/gallery/placeholder-3.svg", alt: "Mesa servida" },
    { src: "/gallery/placeholder-4.svg", alt: "Detalle de la barra" },
  ],
  social: {
    instagram: "https://instagram.com/",
    facebook: "",
  },
  seo: {
    url: "https://gastro-psi-three.vercel.app",
    ogImage: "/og.svg",
    priceRange: "$$",
    cuisine: "Argentina, Bodegón",
    openingHoursSchema: ["Tu-Su 19:00-01:00"],
  },
};
