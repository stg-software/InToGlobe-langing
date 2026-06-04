import { Facebook, Instagram, Linkedin, Twitter, ShieldCheck, Link2, TrendingUp, Lightbulb } from "lucide-react";
import { footer } from "../data/content";
import logoImg from "../assets/logo.jpg";

const iconMap = { Facebook, Instagram, Linkedin, Twitter, ShieldCheck, Link2, TrendingUp, Lightbulb };

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">

      {/* ── Main footer ── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1: Brand + social */}
          <div>
            {/* Logo + nombre */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0">
                <img src={logoImg} alt="InToGlobe"
                  className="w-full h-full object-cover object-top scale-[1.4] translate-y-[-4px]" />
              </div>
              <span className="font-display font-bold text-xl">
                <span style={{ color: '#9B6BC5' }}>In</span>
                <span style={{ color: '#9B6BC5' }}>To</span>
                <span style={{ color: '#D4944A' }}>Globe</span>
              </span>
            </div>

            <p className="text-xs font-body tracking-widest uppercase mb-4" style={{ color: '#D4944A' }}>
              {footer.tagline}
            </p>
            <p className="font-body text-sm leading-relaxed mb-8 text-gray-500">
              {footer.description}
            </p>

            {/* Social icons */}
            <div className="flex gap-3">
              {footer.social.map(({ name, href, icon }) => {
                const Icon = iconMap[icon];
                return (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={name}
                    className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition-colors duration-200"
                  >
                    {Icon && <Icon size={15} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-6 uppercase tracking-wider">
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {footer.links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}
                    className="font-body text-sm text-gray-500 hover:text-white transition-colors duration-200">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-6 uppercase tracking-wider">
              Contacto
            </h4>
            <ul className="flex flex-col gap-3 font-body text-sm text-gray-500">
              <li>📧 contacto@intoglobe.com</li>
              <li>📱 +52 (77) 3240-2090</li>
              <li>📱 +52 (95) 1123-0180</li>
              <li>📍 México</li>
            </ul>

            <div className="mt-8">
              <button className="gradient-orange text-white font-display font-semibold text-sm px-6 py-2.5 rounded-full shadow-lg hover:scale-105 transition-all duration-200">
                Solicitar demo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Badges bar ── */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {footer.badges.map((badge) => {
              const Icon = iconMap[badge.icon] || ShieldCheck;
              return (
                <div key={badge.label} className="flex items-center gap-2">
                  <Icon size={16} className="text-purple-400 shrink-0" strokeWidth={1.5} />
                  <span className="font-body text-xs text-gray-500">{badge.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="border-t border-gray-800 py-4 text-center">
        <p className="font-body text-xs text-gray-600">{footer.copyright}</p>
      </div>
    </footer>
  );
}
