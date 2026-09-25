import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const points = [
  "Routine servicing, washing and periodic maintenance",
  "Major suspension, engine repair and engine rebuilding",
  "Transparent estimates before any work begins",
];

export default function AboutPreview() {
  return (
    <section className="bg-paper">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-8 lg:py-24">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative order-2 lg:order-1"
        >
          <div className="overflow-hidden rounded-3xl border border-paper-2 shadow-panel">
            <img
              src="/about-car.jpg"
              alt="SAM 07 AUTOMOBILE garage workshop floor"
              className="h-[300px] w-full object-cover sm:h-[380px]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-ink px-6 py-4 shadow-panel sm:block">
            <p className="font-display text-2xl font-semibold text-white">1000+</p>
            <p className="text-xs text-silver">Cars Serviced</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="order-1 lg:order-2"
        >
          <h2 className="text-balance font-display text-3xl font-semibold text-graphite sm:text-4xl">
            Your Vehicle, Handled With Care
          </h2>
          <p className="mt-5 text-balance leading-relaxed text-graphite/70">
            SAM 07 AUTOMOBILE is a professional automobile service and repair garage
            dedicated to providing reliable, transparent and high-quality car care. From
            routine servicing and washing to major suspension, engine repair and engine
            rebuilding, our experienced technicians handle your vehicle with care.
          </p>

          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-graphite/80">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-ignition" />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="mt-8 inline-flex items-center gap-2 font-body font-semibold text-ignition transition-colors hover:text-ignition-600"
          >
            Learn more about our garage <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
