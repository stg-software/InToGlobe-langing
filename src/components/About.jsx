import { useEffect, useRef } from "react";
import { Lightbulb, Cpu, Rocket } from "lucide-react";
import { useTranslation } from "react-i18next";
import { BrainOrb } from "./Hero";

const pillarIcons = [Lightbulb, Cpu, Rocket];
const pillarColors = ["#C07022", "#7B2D8B", "#C07022"];
const pillarKeys = ["Think", "Create", "Transform"];

export default function About() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  // pillar descriptions hardcoded ya que son textos de marca, no necesitan traducción por ahora
  const pillarDescs = {
    es: [
      "Analizamos tus necesidades y diseñamos la estrategia correcta.",
      "Desarrollamos soluciones a medida con tecnología de punta.",
      "Convertimos tu operación en una ventaja competitiva real.",
    ],
    en: [
      "We analyze your needs and design the right strategy.",
      "We develop custom solutions with cutting-edge technology.",
      "We turn your operation into a real competitive advantage.",
    ],
    fr: [
      "Nous analysons vos besoins et concevons la bonne stratégie.",
      "Nous développons des solutions sur mesure avec une technologie de pointe.",
      "Nous transformons votre opération en véritable avantage concurrentiel.",
    ],
  };
  const { i18n } = useTranslation();
  const descs = pillarDescs[i18n.language] || pillarDescs.es;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="nosotros" ref={sectionRef} className="py-24 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div className="reveal flex justify-center">
            <BrainOrb />
          </div>

          <div>
            <div className="reveal mb-3">
              <span className="text-sm font-body font-semibold uppercase tracking-widest" style={{ color: '#C07022' }}>
                {t("about.sectionTitle")}
              </span>
            </div>

            <h2 className="reveal font-display text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-snug">
              {t("about.tagline")}
            </h2>

            <p className="reveal font-body text-lg text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              {t("about.description")}
            </p>

            <div className="reveal flex flex-col gap-5">
              {pillarKeys.map((key, i) => {
                const Icon = pillarIcons[i];
                const color = pillarColors[i];
                return (
                  <div key={key} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                      style={{ background: `${color}15` }}>
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div>
                      <p className="font-display font-semibold mb-0.5" style={{ color }}>{key}</p>
                      <p className="font-body text-sm text-gray-500 dark:text-gray-400">{descs[i]}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
