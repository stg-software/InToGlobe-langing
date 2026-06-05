import { Facebook, Instagram, Linkedin, Twitter, ShieldCheck, Link2, TrendingUp, Lightbulb } from "lucide-react";
import { useTranslation } from "react-i18next";
import { footer } from "../data/content";
import logoImg from "../assets/logo.jpg";

const socialIconMap = { Facebook, Instagram, Linkedin, Twitter };
const badgeIconMap  = { ShieldCheck, Link2, TrendingUp, Lightbulb };
const badgeIconKeys = ["ShieldCheck", "Link2", "TrendingUp", "Lightbulb"];

export default function Footer() {
  const { t } = useTranslation();
  const badges = t("footer.badges", { returnObjects: true });
  const links  = t("navbar.links",  { returnObjects: true });

  const navHrefs = ["#inicio", "#soluciones", "#tecnología", "#nosotros", "#contacto"];

  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1: Brand + social */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden shrink-0 bg-white flex items-center justify-center">
                <img src={logoImg} alt="InToGlobe" className="w-full h-full object-contain" />
              </div>
              <span className="font-display font-bold text-xl">
                <span style={{ color: '#9B6BC5' }}>In</span>
                <span style={{ color: '#9B6BC5' }}>To</span>
                <span style={{ color: '#D4944A' }}>Globe</span>
              </span>
            </div>
            <p className="text-xs font-body tracking-widest uppercase mb-4" style={{ color: '#D4944A' }}>
              {t("footer.tagline")}
            </p>
            <p className="font-body text-sm leading-relaxed mb-8 text-gray-500">
              {t("footer.description")}
            </p>
            <div className="flex gap-3">
              {footer.social.map(({ name, href, icon }) => {
                const Icon = socialIconMap[icon];
                return (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}
                    className="w-9 h-9 rounded-full border border-gray-700 flex items-center justify-center hover:border-purple-500 hover:text-purple-400 transition-colors duration-200">
                    {Icon && <Icon size={15} />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Links */}
          <div>
            <h4 className="font-display font-semibold text-white text-sm mb-6 uppercase tracking-wider">
              {t("navbar.links", { returnObjects: true })[3] ? "Navegación" : "Navigation"}
            </h4>
            <ul className="flex flex-col gap-3">
              {Array.isArray(links) && links.map((label, i) => (
                <li key={label}>
                  <a href={navHrefs[i]}
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
                {t("navbar.cta")}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Badges */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.isArray(badges) && badges.map((label, i) => {
              const Icon = badgeIconMap[badgeIconKeys[i]] || ShieldCheck;
              return (
                <div key={i} className="flex items-center gap-2">
                  <Icon size={16} className="text-purple-400 shrink-0" strokeWidth={1.5} />
                  <span className="font-body text-xs text-gray-500">{label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 py-4 text-center">
        <p className="font-body text-xs text-gray-600">{t("footer.copyright")}</p>
      </div>
    </footer>
  );
}
