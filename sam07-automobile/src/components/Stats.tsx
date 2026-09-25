import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { businessInfo } from "../data/businessInfo";
import { useCountUp } from "../hooks/useCountUp";

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const count = useCountUp(value, inView);

  return (
    <div ref={ref} className="text-center">
      <p className="font-display text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
        {count}
        <span className="text-ignition">{suffix}</span>
      </p>
      <p className="mt-2 text-sm text-silver sm:text-base">{label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-steel bg-ink-2">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:gap-6 lg:px-8 lg:py-16">
        {businessInfo.stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <StatItem value={s.value} suffix={s.suffix} label={s.label} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
