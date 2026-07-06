import { ArrowRight, Lock, Fingerprint, Cloud, ShieldCheck, Camera, ClipboardList } from "lucide-react";
import { useTranslation } from "react-i18next";
import logoImg from "../assets/logo.jpg";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

const ORB_ICONS = [
  { style: { top: '4%',    left: '50%',  transform: 'translateX(-50%)' }, Icon: Lock,          color: '#7C3AED', label: 'Seguridad' },
  { style: { top: '50%',   left: '2%',   transform: 'translateY(-50%)' }, Icon: Fingerprint,   color: '#F97316', label: 'Biometría' },
  { style: { top: '50%',   right: '2%',  transform: 'translateY(-50%)' }, Icon: Cloud,         color: '#7C3AED', label: 'Nube' },
  { style: { bottom: '18%',left: '8%'  },                                  Icon: ShieldCheck,   color: '#F97316', label: 'Protección' },
  { style: { bottom: '18%',right: '8%' },                                  Icon: Camera,        color: '#7C3AED', label: 'Cámara' },
  { style: { bottom: '2%', left: '50%',  transform: 'translateX(-50%)' }, Icon: ClipboardList, color: '#7C3AED', label: 'Registros' },
];

export function BrainOrb() {
  return (
    <div
      role="img"
      aria-label="Ilustración animada de cerebro con tecnología de control de acceso"
      className="relative w-[300px] h-[300px] lg:w-[420px] lg:h-[420px] mx-auto animate-float"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-200/40 via-pink-100/30 to-orange-100/20 blur-2xl" />
      <div className="absolute inset-6 rounded-full border border-purple-200/60 bg-white/10 backdrop-blur-sm" />
      <div className="absolute inset-12 rounded-full border border-purple-300/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 200 200" className="w-40 h-40 lg:w-56 lg:h-56" aria-hidden="true">
          <defs>
            <linearGradient id="brain-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F97316" />
              <stop offset="50%" stopColor="#C026D3" />
              <stop offset="100%" stopColor="#7C3AED" />
            </linearGradient>
          </defs>
          <path d="M100 60 C80 60 65 72 62 88 C58 90 54 95 54 102 C50 106 48 112 50 118 C48 124 50 130 56 134 C58 142 65 148 74 148 C80 150 88 150 100 148" stroke="url(#brain-grad)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <path d="M100 60 C120 60 135 72 138 88 C142 90 146 95 146 102 C150 106 152 112 150 118 C152 124 150 130 144 134 C142 142 135 148 126 148 C120 150 112 150 100 148" stroke="url(#brain-grad)" strokeWidth="3" fill="none" strokeLinecap="round" />
          <line x1="100" y1="60" x2="100" y2="148" stroke="url(#brain-grad)" strokeWidth="2" strokeDasharray="4 3"/>
          <path d="M80 80 Q70 90 75 100 Q68 110 78 118" stroke="#F97316" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
          <path d="M70 95 Q62 100 65 108" stroke="#F97316" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
          <path d="M85 110 Q78 118 80 128" stroke="#F97316" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
          <path d="M120 80 Q130 90 125 100 Q132 110 122 118" stroke="#7C3AED" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
          <path d="M130 95 Q138 100 135 108" stroke="#7C3AED" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.5"/>
          <path d="M115 110 Q122 118 120 128" stroke="#7C3AED" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.7"/>
          {[[80,80],[70,95],[85,110],[75,100],[78,118],[80,128],[120,80],[130,95],[115,110],[125,100],[122,118],[120,128],[100,104]].map(([x,y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill={i < 6 ? "#F97316" : "#7C3AED"} opacity="0.9"/>
          ))}
        </svg>
      </div>
      <div className="absolute inset-0" aria-hidden="true">
        {ORB_ICONS.map(({ style, Icon, color, label }, i) => (
          <div key={i} style={{ position: 'absolute', ...style }}>
            <div className="w-11 h-11 rounded-full flex items-center justify-center shadow-lg" style={{ background: color }}>
              <Icon size={18} color="#fff" aria-label={label} />
            </div>
          </div>
        ))}
      </div>
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * 360;
        const rad = (angle * Math.PI) / 180;
        const r = 48;
        return (
          <div key={i} aria-hidden="true" className="absolute w-1 h-1 rounded-full bg-purple-300/50"
            style={{ left: `${50 + r * Math.cos(rad)}%`, top: `${50 + r * Math.sin(rad)}%` }} />
        );
      })}
    </div>
  );
}

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="inicio" aria-labelledby="hero-heading" className="relative min-h-screen hero-gradient pt-20 overflow-hidden">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-orange-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* ── LEFT: Logo ── */}
          <div className="order-1 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl blur-3xl" aria-hidden="true"
                style={{ background: 'radial-gradient(ellipse, rgba(123,45,139,0.15) 0%, transparent 70%)' }} />
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl border border-purple-100 bg-white">
                <img
                  src={logoImg}
                  alt="InToGlobe — soluciones de control de acceso e inteligencia empresarial"
                  className="w-full h-full object-contain p-6"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-3 shadow-xl border border-purple-50" aria-hidden="true">
                <p className="font-display text-xs font-bold tracking-widest uppercase" style={{ color: '#7B2D8B' }}>
                  Think · Create · Transform
                </p>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Texto + CTA ── */}
          <div className="order-2">
            {/* <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-100 rounded-full px-4 py-1.5 mb-6" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-sm font-body font-medium text-brand-purple">{t("hero.badge")}</span>
            </div> */}

            <h1 id="hero-heading" className="font-display text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-gray-900 dark:text-white">
              {t("hero.headline1")}{" "}<br className="hidden lg:block" />
              {t("hero.headline2")}{" "}<br />
              <span className="gradient-text">{t("hero.highlight")}</span>
            </h1>

            <p className="font-body text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10 max-w-md">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo("contacto")}
                className="gradient-orange text-white font-display font-semibold px-8 py-3.5 rounded-full shadow-lg shadow-orange-200 hover:shadow-orange-300 hover:scale-105 transition-all duration-200 text-base"
              >
                {t("hero.ctaPrimary")}
              </button>
              <button
                onClick={() => scrollTo("soluciones")}
                className="flex items-center gap-2 font-display font-semibold text-gray-700 dark:text-gray-300 px-6 py-3.5 rounded-full border border-gray-200 dark:border-gray-700 hover:border-brand-purple hover:text-brand-purple transition-all duration-200 text-base"
              >
                {t("hero.ctaSecondary")}
                <span className="w-6 h-6 rounded-full border border-current flex items-center justify-center" aria-hidden="true">
                  <ArrowRight size={13} />
                </span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
