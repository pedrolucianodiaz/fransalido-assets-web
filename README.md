# fransalido-assets-web

Sitio web estático de **Fran Salido** (artista musical).

## Stack

- [Astro](https://astro.build) + [React](https://react.dev) (islas para interactividad)
- [Tailwind CSS v4](https://tailwindcss.com)
- Fuentes: Boldonse (títulos) + Jost (texto)

## Desarrollo

```bash
npm install       # instalar dependencias
npm run dev       # servidor local en http://localhost:4321
npm run build     # build estático en /dist
npm run preview   # previsualizar el build
```

## Estructura

```
src/
  components/
    Header.tsx     # nav sticky + logo + menú mobile (isla React)
    Hero.astro     # banner full-viewport con links a plataformas
  data/
    site.ts        # contenido editable: textos, nav, links a plataformas
  layouts/
    Layout.astro   # HTML base, fuentes, meta
  pages/
    index.astro    # home
  styles/
    global.css     # Tailwind + tokens de diseño
public/            # assets estáticos (favicon, imagen del hero, etc.)
```

## Contenido

Editá `src/data/site.ts` para cambiar textos, ítems del menú y los links a
Spotify / Apple Music / YouTube / etc. Para la imagen de fondo del hero, poné
el archivo en `public/` y actualizá `site.heroImage` (ej. `"/hero.jpg"`).

Diseño inspirado en el theme [Podkest](https://themes.pixelwars.org/podkest/demo-01/).
