import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

function useCountUp(target, isVisible) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!isVisible || typeof target !== "number") return;
    let start = 0;
    const duration = 1800;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);
  return count;
}

function StatItem({ value, prefix, suffix, label }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(typeof value === "number" ? value : 0, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const displayValue = typeof value === "number" ? `${prefix}${count}${suffix}` : value;

  return (
    <div ref={ref} className="text-center group">
      <div className="font-display text-5xl lg:text-6xl font-extrabold gradient-text mb-2 tabular-nums">
        {displayValue}
      </div>
      <p className="font-body text-gray-500 dark:text-gray-400 text-sm leading-snug whitespace-pre-line">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const { t } = useTranslation();
  const labels = t("stats.labels", { returnObjects: true });
  const values = [
    { value: 250, prefix: "+", suffix: "" },
    { value: 120, prefix: "+", suffix: "" },
    { value: 98,  prefix: "+", suffix: "%" },
    { value: "24/7", prefix: "", suffix: "" },
  ];

  return (
    <section id="tecnología" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            {t("stats.sectionTitle")}
          </h2>
          <div className="w-12 h-1 rounded-full gradient-purple mx-auto" />
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
          {values.map((item, i) => (
            <StatItem
              key={i}
              value={item.value}
              prefix={item.prefix}
              suffix={item.suffix}
              label={Array.isArray(labels) ? labels[i] : ""}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
