import { useState, useEffect, useRef } from "react";
import { Menu, X, Sun, Moon, Globe, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useThemeContext } from "../context/ThemeContext";
import logoImg from "../assets/Logo_brain.png";

const LANGS = [
  { code: "es", label: "Español", flag: "🇲🇽" },
  { code: "en", label: "English", flag: "🇺🇸" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
];

const SECTION_IDS = ["inicio", "soluciones", "tecnología", "nosotros", "contacto"];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const { theme, toggleTheme } = useThemeContext();
  const isDark = theme === "dark";

  const [scrolled, setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen]   = useState(false);
  const langRef   = useRef(null);
  const mobileMenuId = "mobile-menu";

  const links = t("navbar.links", { returnObjects: true });
  const currentLang = LANGS.find((l) => l.code === i18n.language) || LANGS[0];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Cerrar menú mobile con Escape
  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") { setMobileOpen(false); setLangOpen(false); } };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const handleLangChange = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("preferredLanguage", code);
    setLangOpen(false);
  };

  const handleNavClick = (e, index) => {
    e.preventDefault();
    scrollToSection(SECTION_IDS[index]);
    setMobileOpen(false);
  };

  return (
    <header
      role="banner"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? isDark ? "bg-gray-900/95 backdrop-blur-md shadow-sm shadow-black/20"
                   : "bg-white/95 backdrop-blur-md shadow-sm"
          : isDark ? "bg-gray-900/80 backdrop-blur-sm"
                   : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* ── Logo ── */}
          <a
            href="#inicio"
            onClick={(e) => handleNavClick(e, 0)}
            aria-label="InToGlobe — Ir al inicio"
            className="flex items-center gap-3 shrink-0"
          >
            <div className="w-10 h-10 p-1 rounded-xl overflow-hidden shrink-0 shadow-sm bg-white flex items-center justify-center">
              <img src={logoImg} alt="Logo InToGlobe" className="w-full h-full object-contain" />
            </div>
            <span className="font-display font-bold text-xl" aria-hidden="true">
              <span style={{ color: "#7B2D8B" }}>In</span>
              <span style={{ color: "#7B2D8B" }}>To</span>
              <span style={{ color: "#C07022" }}>Globe</span>
            </span>
          </a>

          {/* ── Desktop Nav ── */}
          <nav aria-label="Navegación principal" className="hidden lg:flex items-center gap-8">
            {Array.isArray(links) && links.map((link, i) => (
              <a
                key={link}
                href={`#${SECTION_IDS[i]}`}
                onClick={(e) => handleNavClick(e, i)}
                className={`font-body text-sm font-medium transition-colors duration-200 cursor-pointer ${
                  isDark ? "text-gray-300 hover:text-purple-400"
                         : "text-gray-600 hover:text-brand-purple"
                }`}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* ── Controles: idioma + tema ── */}
          <div className="hidden lg:flex items-center gap-1">

            {/* Selector de idioma */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                aria-label={`Idioma actual: ${currentLang.label}. Cambiar idioma`}
                aria-expanded={langOpen}
                aria-haspopup="listbox"
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  isDark ? "text-gray-300 hover:bg-gray-800"
                         : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                <Globe size={15} aria-hidden="true" />
                <span>{currentLang.flag} {currentLang.code.toUpperCase()}</span>
                <ChevronDown size={13} aria-hidden="true" className={`transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`} />
              </button>

              {langOpen && (
                <ul
                  role="listbox"
                  aria-label="Seleccionar idioma"
                  className={`absolute right-0 mt-1 w-36 rounded-xl shadow-lg border overflow-hidden z-50 ${
                    isDark ? "bg-gray-900 border-gray-700" : "bg-white border-gray-100"
                  }`}
                >
                  {LANGS.map((lang) => (
                    <li key={lang.code} role="option" aria-selected={lang.code === i18n.language}>
                      <button
                        onClick={() => handleLangChange(lang.code)}
                        className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm text-left transition-colors duration-150 ${
                          lang.code === i18n.language
                            ? isDark ? "bg-purple-900/40 text-purple-300"
                                     : "bg-purple-50 text-brand-purple"
                            : isDark ? "text-gray-300 hover:bg-gray-800"
                                     : "text-gray-700 hover:bg-gray-50"
                        }`}
                      >
                        <span aria-hidden="true">{lang.flag}</span>
                        <span>{lang.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Toggle tema */}
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className={`p-2 rounded-full transition-all duration-200 ${
                isDark ? "text-amber-400 hover:bg-gray-800"
                       : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>
          </div>

          {/* ── Mobile: tema + hamburguesa ── */}
          <div className="lg:hidden flex items-center gap-1">
            <button
              onClick={toggleTheme}
              aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className={`p-2 rounded-full transition-colors duration-200 ${
                isDark ? "text-amber-400" : "text-gray-500"
              }`}
            >
              {isDark ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>
            <button
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              aria-controls={mobileMenuId}
              className={`p-2 rounded-lg ${isDark ? "text-gray-300" : "text-gray-700"}`}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile menu ── */}
      {mobileOpen && (
        <div
          id={mobileMenuId}
          className={`lg:hidden border-t px-6 py-4 shadow-lg ${
            isDark ? "bg-gray-900 border-gray-800" : "bg-white border-gray-100"
          }`}
        >
          <nav aria-label="Navegación móvil" className="flex flex-col gap-4">
            {Array.isArray(links) && links.map((link, i) => (
              <a
                key={link}
                href={`#${SECTION_IDS[i]}`}
                onClick={(e) => handleNavClick(e, i)}
                className={`font-body text-sm font-medium ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {link}
              </a>
            ))}

            <div className={`flex gap-2 pt-2 border-t ${isDark ? "border-gray-800" : "border-gray-100"}`} role="group" aria-label="Selector de idioma">
              {LANGS.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLangChange(lang.code)}
                  aria-label={`Cambiar idioma a ${lang.label}`}
                  aria-pressed={lang.code === i18n.language}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    lang.code === i18n.language
                      ? "bg-purple-600 text-white"
                      : isDark ? "bg-gray-800 text-gray-300"
                               : "bg-gray-100 text-gray-600"
                  }`}
                >
                  <span aria-hidden="true">{lang.flag}</span> {lang.code.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
