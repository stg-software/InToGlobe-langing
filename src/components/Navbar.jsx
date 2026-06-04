import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { navbar } from "../data/content";
import logoImg from "../assets/logo.jpg";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo: solo ícono + nombre empresa ── */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            {/* Logo real — solo el ícono cuadrado recortado */}
            <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 shadow-sm">
              <img
                src={logoImg}
                alt="InToGlobe logo"
                className="w-full h-full object-cover object-top scale-[1.4] translate-y-[-4px]"
              />
            </div>
            {/* Nombre empresa */}
            <span className="font-display font-bold text-xl">
              <span style={{ color: '#7B2D8B' }}>In</span>
              <span style={{ color: '#7B2D8B' }}>To</span>
              <span style={{ color: '#C07022' }}>Globe</span>
            </span>
          </a>

          {/* ── Desktop Nav ── */}
          <nav className="hidden lg:flex items-center gap-8">
            {navbar.links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm font-medium text-gray-600 hover:text-brand-purple transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* ── CTA ── */}
          <div className="hidden lg:block">
            <button className="gradient-orange text-white font-display font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:scale-105 transition-all duration-200">
              {navbar.cta}
            </button>
          </div>

          {/* ── Mobile menu button ── */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-700"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 py-4 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navbar.links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-body text-sm font-medium text-gray-600 hover:text-brand-purple"
                onClick={() => setMobileOpen(false)}
              >
                {link}
              </a>
            ))}
            <button className="gradient-orange text-white font-display font-semibold text-sm px-6 py-2.5 rounded-full mt-2 w-full">
              {navbar.cta}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
