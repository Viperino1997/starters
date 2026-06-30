/** Self-contained drop-in for src/content/site.ts — DEMO preset. */

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
  days: string;
  hours: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface SiteContent {
  brand: { name: string; badge: string; mark: string };
  hero: { title: string; subtitle: string };
  whatsapp: { number: string; reservationMessage: string };
  about: { title: string; body: string };
  menu: MenuCategory[];
  hours: HoursRow[];
  reservation: { partySizes: number[]; timeSlots: string[] };
  location: {
    address: string;
    city: string;
    mapEmbedUrl?: string;
    mapsLink: string;
    geo?: { lat: number; lng: number };
  };
  gallery: GalleryImage[];
  social: { instagram?: string; facebook?: string };
  seo: {
    url: string;
    ogImage: string;
    priceRange: string;
    cuisine: string;
    openingHoursSchema?: string[];
  };
}

/** DEMO — Vinatería (wine bar, Güemes, Córdoba). Oscuro elegante. */
export const site: SiteContent = {
  brand: {
    name: "Vinatería",
    badge: "Wine bar · Güemes",
    mark: "V",
  },
  hero: {
    title: "Una copa, una historia",
    subtitle:
      "Más de 100 etiquetas, descorches y catas cada semana en el corazón de Güemes. Vení a descubrir tu próximo vino.",
  },
  whatsapp: {
    number: "5493513897983",
    reservationMessage:
      "¡Hola Vinatería! Quería reservar para una cata. ¿Tienen lugar el ",
  },
  about: {
    title: "El vino, sin solemnidad",
    body: "Un wine bar para curiosos: bodegas chicas, cepas nuevas y enólogos que pasan a contar su historia. Descorchamos todos los días y siempre hay algo distinto en la copa.",
  },
  menu: [
    {
      title: "Por copa",
      items: [
        { name: "Malbec de altura", description: "Valle de Uco, guarda 12 meses", price: "$4.500" },
        { name: "Naranjo / orange wine", description: "Maceración prolongada, de bodega chica", price: "$5.200" },
        { name: "Espumante nature", description: "Método tradicional", price: "$4.800" },
      ],
    },
    {
      title: "Para acompañar",
      items: [
        { name: "Tabla de fiambres y quesos", description: "Selección de la casa, para dos", price: "$13.000" },
        { name: "Provoleta al horno", description: "Con tomates asados y pan", price: "$7.500" },
        { name: "Hummus y focaccia", description: "De la casa", price: "$6.000" },
      ],
    },
    {
      title: "Vermú",
      items: [
        { name: "Vermú rojo on the rocks", description: "Con piel de naranja", price: "$3.800" },
        { name: "Negroni de la casa", description: "Reposado en barrica", price: "$5.500" },
      ],
    },
  ],
  hours: [
    { days: "Martes a Domingo", hours: "19:00 – 02:00" },
    { days: "Lunes", hours: "Cerrado" },
  ],
  reservation: {
    partySizes: [1, 2, 3, 4, 5, 6],
    timeSlots: ["19:00", "20:00", "21:00", "22:00", "23:00"],
  },
  location: {
    address: "Achával Rodríguez 244, Galería Barrio",
    city: "Córdoba",
    mapEmbedUrl: "",
    mapsLink: "https://maps.google.com/?q=Achaval+Rodriguez+244+Cordoba",
    geo: { lat: -31.4271, lng: -64.1885 },
  },
  gallery: [
    { src: "/gallery/placeholder-1.svg", alt: "Copa de vino" },
    { src: "/gallery/placeholder-2.svg", alt: "Barra del wine bar" },
    { src: "/gallery/placeholder-3.svg", alt: "Tabla de fiambres" },
    { src: "/gallery/placeholder-4.svg", alt: "Estantería de botellas" },
  ],
  social: {
    instagram: "https://instagram.com/",
    facebook: "",
  },
  seo: {
    url: "https://vinateria-demo.vercel.app",
    ogImage: "/og.svg",
    priceRange: "$$",
    cuisine: "Wine bar, Vinos, Tapas",
    openingHoursSchema: ["Tu-Su 19:00-02:00"],
  },
};
