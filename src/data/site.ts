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

// "Listen & Subscribe On" — plataformas del hero. Reemplazá las URLs por las reales.
export const platforms = [
  { label: "Spotify", href: "https://open.spotify.com/intl-es/album/6iZl95lbFmHAq1TBUDkp6B" },
  { label: "YouTube", href: "https://youtube.com/" },
  { label: "Instagram", href: "https://instagram.com/" },
];
