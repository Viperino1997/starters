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

/** DEMO — Casa Simona (café, brunch & tapas, Alta Córdoba). Fresco moderno. */
export const site: SiteContent = {
  brand: {
    name: "Casa Simona",
    badge: "Brunch & tapas · Alta Córdoba",
    mark: "S",
  },
  hero: {
    title: "Sabores de España, ritmo cordobés",
    subtitle:
      "Café de especialidad, brunch de mañana y tapas con vino al caer la tarde. Una casa de Alta Córdoba con mesa larga y flamenco los fines de semana.",
  },
  whatsapp: {
    number: "5493517397463",
    reservationMessage:
      "¡Hola Casa Simona! Quería reservar una mesa. ¿Tienen lugar el ",
  },
  about: {
    title: "Una casa para quedarse",
    body: "Abrimos temprano con café de especialidad y brunch, y cerramos tarde con tapas y vinos. Producto fresco, recetas españolas con guiño argentino y la sobremesa siempre bienvenida.",
  },
  menu: [
    {
      title: "Brunch",
      items: [
        { name: "Tostada de palta y huevo", description: "Pan de masa madre, huevo poché", price: "$8.500" },
        { name: "Medialunas con jamón crudo", description: "Y café de especialidad", price: "$6.500" },
        { name: "Bowl de yogur y frutas", description: "Granola casera, miel", price: "$6.000" },
      ],
    },
    {
      title: "Tapas",
      items: [
        { name: "Tortilla española", description: "Jugosa, como debe ser", price: "$7.000" },
        { name: "Croquetas de jamón", description: "Cremosas, porción de 6", price: "$8.000" },
        { name: "Pan con tomate y anchoa", description: "Aceite de oliva virgen", price: "$5.500" },
      ],
    },
    {
      title: "Dulces",
      items: [
        { name: "Cheesecake de estación", description: "Con frutos rojos", price: "$5.500" },
        { name: "Churros con chocolate", description: "Recién hechos", price: "$5.000" },
      ],
    },
  ],
  hours: [
    { days: "Martes a Sábado", hours: "09:00 – 14:30 · 18:00 – 01:30" },
    { days: "Domingo", hours: "09:00 – 14:30" },
    { days: "Lunes", hours: "Cerrado" },
  ],
  reservation: {
    partySizes: [1, 2, 3, 4, 5, 6, 8],
    timeSlots: ["09:30", "11:00", "12:30", "18:30", "20:00", "21:30"],
  },
  location: {
    address: "Miguel de Cervantes 624, Alta Córdoba",
    city: "Córdoba",
    mapEmbedUrl: "",
    mapsLink: "https://maps.google.com/?q=Miguel+de+Cervantes+624+Cordoba",
    geo: { lat: -31.3902, lng: -64.1822 },
  },
  gallery: [
    { src: "/gallery/placeholder-1.svg", alt: "Brunch servido" },
    { src: "/gallery/placeholder-2.svg", alt: "Café de especialidad" },
    { src: "/gallery/placeholder-3.svg", alt: "Tapas" },
    { src: "/gallery/placeholder-4.svg", alt: "Salón de la casa" },
  ],
  social: {
    instagram: "https://instagram.com/",
    facebook: "",
  },
  seo: {
    url: "https://casa-simona-demo.vercel.app",
    ogImage: "/og.svg",
    priceRange: "$$",
    cuisine: "Café, Brunch, Tapas españolas",
    openingHoursSchema: ["Tu-Sa 09:00-14:30", "Tu-Sa 18:00-01:30", "Su 09:00-14:30"],
  },
};
