import { useEffect, useRef } from "react";
import { Shield, Fingerprint, Cpu, Code2, BarChart3 } from "lucide-react";
import { services } from "../data/content";

const iconMap = { Shield, Fingerprint, Cpu, Code2, BarChart3 };

function ServiceCard({ item, index }) {
  const Icon = iconMap[item.icon] || Shield;
  return (
    <div
      className="reveal group flex flex-col items-center text-center p-6 rounded-2xl border border-gray-100 bg-white card-shadow hover:card-shadow-hover hover:-translate-y-1 transition-all duration-300"
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Icon container */}
      <div className="relative mb-5">
        <div className="w-16 h-16 rounded-2xl bg-purple-50 flex items-center justify-center group-hover:bg-purple-100 transition-colors duration-300">
          <Icon size={28} className="text-brand-purple" strokeWidth={1.5} />
        </div>
        {/* Subtle dot accent */}
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h3 className="font-display font-semibold text-gray-900 mb-2 text-base leading-snug">
        {item.title}
      </h3>
      <p className="font-body text-sm text-gray-500 leading-relaxed">
        {item.description}
      </p>
    </div>
  );
}

export default function Services() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll(".reveal").forEach((el) => {
              el.classList.add("visible");
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="soluciones" ref={sectionRef} className="py-24 bg-gray-50/60">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="reveal text-center mb-14">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {services.sectionTitle}
          </h2>
          <div className="w-12 h-1 rounded-full gradient-purple mx-auto" />
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {services.items.map((item, i) => (
            <ServiceCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
