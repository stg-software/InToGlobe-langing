import { useTranslation } from "react-i18next";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section aria-labelledby="cta-heading" className="relative py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gray-950" aria-hidden="true" />
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-brand-orange/10 blur-3xl" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-brand-purple/20 blur-3xl" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] opacity-30 pointer-events-none" aria-hidden="true">
        <div className="w-full h-full rounded-full border border-orange-500/20 relative overflow-hidden">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tl from-orange-500/30 via-transparent to-purple-900/30" />
          {[...Array(40)].map((_, i) => (
            <div key={i} className="absolute w-1 h-1 rounded-full bg-orange-300"
              style={{ left: `${15 + Math.random() * 70}%`, top: `${15 + Math.random() * 70}%`, opacity: 0.4 + Math.random() * 0.6 }} />
          ))}
        </div>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-xl">
          <h2 id="cta-heading" className="font-display text-3xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
            {t("cta.headline1")}{" "}
            <span className="text-brand-orange">{t("cta.headline2")}</span>
          </h2>
          <p className="font-body text-gray-400 text-lg mb-10">
            {t("cta.description")}
          </p>
          <button
            onClick={() => scrollTo("soluciones")}
            className="gradient-orange text-white font-display font-semibold px-8 py-3.5 rounded-full shadow-xl shadow-orange-900/30 hover:shadow-orange-800/40 hover:scale-105 transition-all duration-200 text-base"
          >
            {t("cta.button")}
          </button>
        </div>
      </div>
    </section>
  );
}
