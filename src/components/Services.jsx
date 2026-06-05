import { useEffect, useRef } from "react";
import { Shield, Fingerprint, Cpu, Code2, BarChart3 } from "lucide-react";
import { useTranslation } from "react-i18next";

const iconMap = { Shield, Fingerprint, Cpu, Code2, BarChart3 };
const iconKeys = ["Shield", "Fingerprint", "Cpu", "Code2", "BarChart3"];

function ServiceCard({ title, description, iconKey, index }) {
  const Icon = iconMap[iconKey] || Shield;
  return (
    <div
      className="reveal group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="relative mb-5">
        <div className="w-16 h-16 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center group-hover:bg-purple-100 dark:group-hover:bg-purple-900/50 transition-colors duration-300">
          <Icon size={28} className="text-brand-purple" strokeWidth={1.5} />
        </div>
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <h3 className="font-display font-semibold text-gray-900 dark:text-white mb-2 text-base leading-snug">
        {title}
      </h3>
      <p className="font-body text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default function Services() {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const items = t("services.items", { returnObjects: true });

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
    <section id="soluciones" ref={sectionRef} className="py-24 bg-gray-50/60 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="reveal text-center mb-14">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {t("services.sectionTitle")}
          </h2>
          <div className="w-12 h-1 rounded-full gradient-purple mx-auto" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {Array.isArray(items) && items.map((item, i) => (
            <ServiceCard
              key={i}
              title={item.title}
              description={item.description}
              iconKey={iconKeys[i]}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
