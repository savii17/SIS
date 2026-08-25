export type TouristPlace = {
  id: string;
  name: string;
  category: string;
  address: string;
  hours: string;
  image: string;
  shortDescription: string;
  description: string;
  highlights: string[];
  services: string[];
};

export const touristPlaces: TouristPlace[] = [
  {
    id: "mirador-del-valle",
    name: "Mirador del Valle",
    category: "Naturaleza",
    address: "Km 8, carretera panorámica del Valle",
    hours: "Lun. a dom. · 06:00 – 18:30",
    image: "/images/lugares-turisticos/mirador-del-valle.jpg",
    shortDescription: "Vistas abiertas al valle, senderos cortos y amaneceres memorables.",
    description: "Un punto de encuentro para contemplar el paisaje, descansar y comenzar recorridos por los senderos del valle.",
    highlights: ["Vista panorámica", "Sendero interpretativo", "Zona de descanso"],
    services: ["Estacionamiento", "Guías locales", "Punto de hidratación"],
  },
  {
    id: "centro-historico",
    name: "Centro Histórico",
    category: "Cultura",
    address: "Plaza Principal, casco urbano",
    hours: "Lun. a dom. · 08:00 – 20:00",
    image: "/images/lugares-turisticos/centro-historico.jpg",
    shortDescription: "Arquitectura, artesanías y sabores locales en el corazón de la ciudad.",
    description: "Recorre calles llenas de historia, visita comercios tradicionales y descubre la identidad cultural de la comunidad.",
    highlights: ["Arquitectura tradicional", "Mercado artesanal", "Rutas a pie"],
    services: ["Información turística", "Baños públicos", "Accesibilidad"],
  },
  {
    id: "cascada-esmeralda",
    name: "Cascada Esmeralda",
    category: "Aventura",
    address: "Reserva natural La Esmeralda, acceso norte",
    hours: "Mar. a dom. · 07:30 – 17:00",
    image: "/images/lugares-turisticos/cascada-esmeralda.jpg",
    shortDescription: "Una caída de agua rodeada de vegetación para quienes aman la aventura.",
    description: "Un refugio natural con senderos, miradores y espacios para conectar con el agua y el bosque.",
    highlights: ["Cascada natural", "Senderismo", "Avistamiento de aves"],
    services: ["Guías certificados", "Primeros auxilios", "Área de picnic"],
  },
  {
    id: "museo-regional",
    name: "Museo Regional",
    category: "Historia",
    address: "Av. de la Cultura 145, centro",
    hours: "Mar. a sáb. · 09:00 – 17:00",
    image: "/images/lugares-turisticos/museo-regional.jpg",
    shortDescription: "Colecciones que cuentan las historias y tradiciones de la región.",
    description: "Conoce piezas arqueológicas, exposiciones temporales y relatos que mantienen viva la memoria regional.",
    highlights: ["Exposición permanente", "Sala interactiva", "Tienda cultural"],
    services: ["Visitas guiadas", "Audioguías", "Tienda de recuerdos"],
  },
  {
    id: "playa-dorada",
    name: "Playa Dorada",
    category: "Playa",
    address: "Bahía Dorada, sector costero",
    hours: "Lun. a dom. · 06:00 – 19:00",
    image: "/images/lugares-turisticos/playa-dorada.jpg",
    shortDescription: "Arena clara, mar tranquilo y un atardecer ideal para disfrutar.",
    description: "Una playa familiar con acceso sencillo, actividades recreativas y opciones gastronómicas cercanas.",
    highlights: ["Atardeceres", "Zona de baño", "Paseo costero"],
    services: ["Salvavidas", "Restaurantes", "Alquiler de sombrillas"],
  },
  {
    id: "ruta-del-cafe",
    name: "Ruta del Café",
    category: "Gastronomía",
    address: "Fincas cafetaleras de la zona alta",
    hours: "Vie. a dom. · 08:00 – 16:00",
    image: "/images/lugares-turisticos/ruta-del-cafe.jpg",
    shortDescription: "Conoce el origen del café con aromas, paisajes y tradición.",
    description: "Una experiencia entre cafetales para descubrir el proceso de cultivo, tostado y degustación del café local.",
    highlights: ["Cata de café", "Recorrido por fincas", "Taller de tostado"],
    services: ["Reserva previa", "Degustación", "Tienda de productos"],
  },
];

export const getTouristPlaceById = (id: string | undefined) =>
  touristPlaces.find((place) => place.id === id);


const englishPlaces: Record<string, Omit<TouristPlace, "id" | "image">> = {
  "mirador-del-valle": { name: "Valley Lookout", category: "Nature", address: "Km 8, Valley scenic highway", hours: "Mon. to Sun. · 06:00 – 18:30", shortDescription: "Open valley views, short trails and memorable sunrises.", description: "A meeting point to take in the scenery, rest and start journeys along the valley trails.", highlights: ["Panoramic view", "Interpretive trail", "Rest area"], services: ["Parking", "Local guides", "Water station"] },
  "centro-historico": { name: "Historic Center", category: "Culture", address: "Main Square, downtown", hours: "Mon. to Sun. · 08:00 – 20:00", shortDescription: "Architecture, crafts and local flavors in the heart of the city.", description: "Walk streets filled with history, visit traditional shops and discover the community's cultural identity.", highlights: ["Traditional architecture", "Craft market", "Walking routes"], services: ["Tourist information", "Public restrooms", "Accessibility"] },
  "cascada-esmeralda": { name: "Emerald Waterfall", category: "Adventure", address: "La Esmeralda nature reserve, north entrance", hours: "Tue. to Sun. · 07:30 – 17:00", shortDescription: "A waterfall surrounded by vegetation for adventure lovers.", description: "A natural retreat with trails, viewpoints and spaces to connect with water and forest.", highlights: ["Natural waterfall", "Hiking", "Birdwatching"], services: ["Certified guides", "First aid", "Picnic area"] },
  "museo-regional": { name: "Regional Museum", category: "History", address: "145 Culture Avenue, downtown", hours: "Tue. to Sat. · 09:00 – 17:00", shortDescription: "Collections that tell the stories and traditions of the region.", description: "Discover archaeological pieces, temporary exhibitions and stories that keep regional memory alive.", highlights: ["Permanent exhibition", "Interactive room", "Cultural shop"], services: ["Guided visits", "Audio guides", "Gift shop"] },
  "playa-dorada": { name: "Golden Beach", category: "Beach", address: "Golden Bay, coastal sector", hours: "Mon. to Sun. · 06:00 – 19:00", shortDescription: "Light sand, calm sea and a sunset made for enjoying.", description: "A family beach with easy access, recreational activities and nearby dining options.", highlights: ["Sunsets", "Swimming area", "Coastal walk"], services: ["Lifeguards", "Restaurants", "Umbrella rental"] },
  "ruta-del-cafe": { name: "Coffee Route", category: "Gastronomy", address: "Coffee farms in the upper area", hours: "Fri. to Sun. · 08:00 – 16:00", shortDescription: "Discover the origin of coffee through aromas, landscapes and tradition.", description: "An experience among coffee plantations to discover the local coffee growing, roasting and tasting process.", highlights: ["Coffee tasting", "Farm tour", "Roasting workshop"], services: ["Advance booking", "Tasting", "Product shop"] },
};

export const getLocalizedTouristPlace = (place: TouristPlace, language: "es" | "en") =>
  language === "en" ? { ...place, ...englishPlaces[place.id] } : place;

