// Contenido del sitio. Editá acá los textos y links (sin CMS por ahora).

export const site = {
  artist: "Fran Salido",
  tagline: "Músico · Compositor",
  heroTitle: ["Santiagueña", "Luz Nativa"],
  heroSubtitle:
    "Nueva música, en vivo y en todas las plataformas. Escuchá el último lanzamiento y seguí el proyecto.",
  // Imagen de fondo del hero. Colocá tu archivo en /public y actualizá la ruta.
  heroImage: "/Fransalido-background.jpeg", // vacío usa el degradado por defecto
};

// Datos de SEO / metadatos para compartir en buscadores y redes.
export const seo = {
  title: "Fran Salido — Cantautor santiagueño de folclore",
  description:
    "Fran Salido es un cantautor santiagueño de folclore: chacareras, zambas y la mejor música de Santiago del Estero. Uno de los mejores artistas santiagueños. Escuchá su álbum «Santiagueña Luz Nativa».",
  keywords: [
    "Fran Salido",
    "cantautor santiagueño",
    "folclore",
    "folklore argentino",
    "chacareras",
    "zambas",
    "música santiagueña",
    "Santiago del Estero",
    "Santiagueña Luz Nativa",
  ],
  genres: ["Folclore", "Chacarera", "Zamba"],
  ogImage: "/FRAN-SALIDO-1200x675.jpg",
};

// Player de Spotify (embed oficial). Pegá acá el enlace que copiás desde
// Spotify (⋯ → Compartir → Copiar enlace). Sirve para track, álbum o playlist.
// Ej: "https://open.spotify.com/album/XXXXXXXXXXXXXXXXXXXXXX"
export const spotify = {
  shareUrl:
    "https://open.spotify.com/intl-es/album/6iZl95lbFmHAq1TBUDkp6B?si=qqlEy7uDRpSC0ZE7QsZ3Qg",
};

export const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Música", href: "#musica" },
  { label: "Shows", href: "#shows" },
  { label: "Sobre mí", href: "#sobre" },
  { label: "Contacto", href: "#contacto" },
];

// Conciertos / fechas de gira. Editá esta lista con las fechas reales.
// date: formato ISO "YYYY-MM-DD". soldOut: true muestra "AGOTADO" en vez del botón.
export interface Concert {
  date: string;
  city: string;
  country: string;
  venue: string;
  ticketUrl?: string;
  soldOut?: boolean;
}

export const concerts: Concert[] = [
  // --- Conciertos pasados (dummy) ---
  { date: "2026-03-14", city: "Santiago del Estero", country: "Argentina", venue: "Teatro 25 de Mayo", ticketUrl: "#" },
  { date: "2026-04-25", city: "Tucumán", country: "Argentina", venue: "Teatro San Martín", ticketUrl: "#" },
  { date: "2026-05-30", city: "Córdoba", country: "Argentina", venue: "Teatro del Libertador", ticketUrl: "#" },
  { date: "2026-07-11", city: "Salta", country: "Argentina", venue: "Teatro Provincial", ticketUrl: "#" },
  { date: "2026-08-22", city: "Rosario", country: "Argentina", venue: "Teatro Vorterix", ticketUrl: "#" },

  // --- Próximos conciertos (dummy) ---
  { date: "2026-10-03", city: "Buenos Aires", country: "Argentina", venue: "La Trastienda", soldOut: true },
  { date: "2026-10-24", city: "La Plata", country: "Argentina", venue: "Teatro Coliseo Podestá", ticketUrl: "#" },
  { date: "2026-11-14", city: "Mendoza", country: "Argentina", venue: "Arena Maipú", ticketUrl: "#" },
  { date: "2026-11-28", city: "Mar del Plata", country: "Argentina", venue: "Teatro Auditorium", ticketUrl: "#" },
  { date: "2026-12-12", city: "Neuquén", country: "Argentina", venue: "Casino Magic", ticketUrl: "#" },
  { date: "2027-02-20", city: "Montevideo", country: "Uruguay", venue: "Sala del Museo", ticketUrl: "#" },
];

// "Listen & Subscribe On" — plataformas del hero. Reemplazá las URLs por las reales.
// icon: clave del ícono a renderizar (ver Hero.astro).
export const platforms = [
  { label: "Spotify", icon: "spotify", href: "https://open.spotify.com/intl-es/artist/30Mwu6fBxiJRcqjDBDNXzn" },
  { label: "YouTube", icon: "youtube", href: "https://www.youtube.com/@franciscosalido6619" },
  { label: "Instagram", icon: "instagram", href: "https://www.instagram.com/fran_salido_/" },
];
