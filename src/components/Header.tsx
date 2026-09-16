import { useEffect, useState } from "react";
import { site, navLinks } from "../data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Header transparente arriba; con fondo + blur al scrollear (como el theme de referencia).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 transition-all duration-300 " +
        (scrolled
          ? "bg-ink/70 backdrop-blur-xl border-b border-white/10 py-3"
          : "bg-transparent py-6")
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6">
        {/* Logo / nombre del artista */}
        <a
          href="#inicio"
          className="font-display text-lg uppercase tracking-widest text-cream"
        >
          {site.artist}
        </a>

        {/* Menu desktop, alineado a la derecha y en mayusculas */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="eyebrow text-xs text-cream/80 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Boton hamburguesa (mobile) */}
        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex flex-col gap-1.5 md:hidden"
        >
          <span
            className={
              "block h-0.5 w-6 bg-cream transition-transform " +
              (open ? "translate-y-2 rotate-45" : "")
            }
          />
          <span
            className={
              "block h-0.5 w-6 bg-cream transition-opacity " +
              (open ? "opacity-0" : "")
            }
          />
          <span
            className={
              "block h-0.5 w-6 bg-cream transition-transform " +
              (open ? "-translate-y-2 -rotate-45" : "")
            }
          />
        </button>
      </div>

      {/* Menu mobile desplegable */}
      {open && (
        <nav className="mt-4 flex flex-col gap-4 border-t border-white/10 bg-ink/95 px-6 py-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="eyebrow text-sm text-cream/90 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
