import { motion } from "framer-motion";
import {
  Users,
  BadgeCheck,
  ScanLine,
  Receipt,
  Car,
  Smile,
  Award,
  Clock,
} from "lucide-react";

const reasons = [
  { icon: Users, title: "Experienced Technicians", desc: "Skilled hands trained on modern and classic vehicles alike." },
  { icon: BadgeCheck, title: "Genuine & Quality Parts", desc: "Genuine/OEM-quality parts selected for your vehicle." },
  { icon: ScanLine, title: "Modern Diagnostic Equipment", desc: "Computerized diagnostics for accurate problem detection." },
  { icon: Receipt, title: "Transparent Pricing", desc: "Clear estimates before work begins — no surprises." },
  { icon: Car, title: "Complete Car Care", desc: "From a quick wash to a full engine rebuild, all in one place." },
  { icon: Smile, title: "Customer Satisfaction", desc: "We work until you're confident in your vehicle again." },
  { icon: Award, title: "Professional Service", desc: "Structured inspection, diagnosis and quality checks." },
  { icon: Clock, title: "Timely Delivery", desc: "We respect your time and deliver as promised." },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            Why Choose Us?
          </h2>
          <p className="mt-4 text-silver">
            The standards we hold ourselves to on every vehicle that comes through our doors.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-steel bg-panel p-6 transition-colors hover:border-ignition/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ignition/15 text-ignition">
                <r.icon size={22} />
              </span>
              <h3 className="mt-4 font-display text-lg font-semibold text-white">{r.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-silver">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
