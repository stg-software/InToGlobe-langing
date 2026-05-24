import { useEffect, useRef } from "react";
import { Lightbulb, Cpu, Rocket } from "lucide-react";
import { about } from "../data/content";
import logoImg from "../assets/logo.jpg";

const pillars = [
  { icon: Lightbulb, label: "Think",     color: "#C07022", desc: "Analizamos tus necesidades y diseñamos la estrategia correcta." },
  { icon: Cpu,       label: "Create",    color: "#7B2D8B", desc: "Desarrollamos soluciones a medida con tecnología de punta." },
  { icon: Rocket,    label: "Transform", color: "#C07022", desc: "Convertimos tu operación en una ventaja competitiva real." },
];

export default function About() {
  const sectionRef = useRef(null);

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
    <section id="nosotros" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: logo + decoración ── */}
          <div className="reveal flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl blur-3xl"
                style={{ background: 'radial-gradient(ellipse, rgba(123,45,139,0.12) 0%, transparent 70%)' }} />
              {/* Logo */}
              <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-3xl overflow-hidden shadow-2xl border border-purple-100">
                <img src={logoImg} alt="InToGlobe" className="w-full h-full object-contain p-6 bg-white" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl px-5 py-3 shadow-xl border border-purple-50">
                <p className="font-display text-xs font-bold tracking-widest uppercase"
                  style={{ color: '#7B2D8B' }}>Think · Create · Transform</p>
              </div>
            </div>
          </div>

          {/* ── Right: text ── */}
          <div>
            <div className="reveal mb-3">
              <span className="text-sm font-body font-semibold uppercase tracking-widest"
                style={{ color: '#C07022' }}>Quiénes somos</span>
            </div>

            <h2 className="reveal font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-snug">
              {about.sectionTitle}
            </h2>

            <p className="reveal font-body text-lg text-gray-500 leading-relaxed mb-10">
              {about.description}
            </p>

            {/* Pillars */}
            <div className="reveal flex flex-col gap-5">
              {pillars.map(({ icon: Icon, label, color, desc }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-sm"
                    style={{ background: `${color}15` }}>
                    <Icon size={20} style={{ color }} />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-gray-900 mb-0.5" style={{ color }}>
                      {label}
                    </p>
                    <p className="font-body text-sm text-gray-500">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
