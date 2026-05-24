import { useEffect, useRef, useState } from "react";
import { stats } from "../data/content";

function useCountUp(target, isVisible) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible || typeof target !== "number") return;
    let start = 0;
    const duration = 1800;
    const step = (target / duration) * 16;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, target]);

  return count;
}

function StatItem({ item }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(typeof item.value === "number" ? item.value : 0, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const displayValue =
    typeof item.value === "number"
      ? `${item.prefix}${count}${item.suffix}`
      : item.value;

  return (
    <div ref={ref} className="text-center group">
      <div className="font-display text-5xl lg:text-6xl font-extrabold gradient-text mb-2 tabular-nums">
        {displayValue}
      </div>
      <p className="font-body text-gray-500 text-sm leading-snug whitespace-pre-line">
        {item.label}
      </p>
    </div>
  );
}

export default function Stats() {
  return (
    <section id="tecnología" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            {stats.sectionTitle}
          </h2>
          <div className="w-12 h-1 rounded-full gradient-purple mx-auto" />
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
          {stats.items.map((item, i) => (
            <StatItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
