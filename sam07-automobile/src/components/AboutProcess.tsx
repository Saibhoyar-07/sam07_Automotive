import { motion } from "framer-motion";
import {
  ClipboardList,
  Search,
  FileText,
  ThumbsUp,
  Wrench,
  BadgeCheck,
  KeyRound,
} from "lucide-react";

const steps = [
  { icon: ClipboardList, title: "Vehicle Inspection", desc: "A thorough check of your vehicle's condition on arrival." },
  { icon: Search, title: "Problem Diagnosis", desc: "Computerized diagnostics identify the exact issue." },
  { icon: FileText, title: "Service Estimate", desc: "A transparent estimate is shared before any work starts." },
  { icon: ThumbsUp, title: "Customer Approval", desc: "Work begins only after you approve the estimate." },
  { icon: Wrench, title: "Professional Repair", desc: "Skilled technicians carry out the required service." },
  { icon: BadgeCheck, title: "Quality Inspection", desc: "Every job is checked against our quality standards." },
  { icon: KeyRound, title: "Vehicle Delivery", desc: "Your car is handed back clean, checked and ready." },
];

export default function AboutProcess() {
  return (
    <section className="bg-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">Our Process</h2>
          <p className="mt-4 text-silver">
            A structured, transparent sequence we follow for every vehicle.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-5 top-0 h-full w-px bg-steel lg:left-1/2 lg:-translate-x-1/2"
          />
          <ol className="space-y-8 lg:space-y-12">
            {steps.map((s, i) => {
              const leftSide = i % 2 === 0;
              return (
                <li key={s.title} className="relative lg:grid lg:grid-cols-2 lg:gap-10">
                  <motion.div
                    initial={{ opacity: 0, x: leftSide ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.45 }}
                    className={`flex items-start gap-4 pl-14 lg:pl-0 ${
                      leftSide ? "lg:col-start-1 lg:justify-self-end lg:text-right lg:flex-row-reverse" : "lg:col-start-2"
                    }`}
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-panel text-ignition ring-4 ring-ink">
                      <s.icon size={20} />
                    </span>
                    <div className="max-w-sm">
                      <p className="font-display text-lg font-semibold text-white">
                        {i + 1}. {s.title}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-silver">{s.desc}</p>
                    </div>
                  </motion.div>

                  <span
                    aria-hidden
                    className="absolute left-5 top-1 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-ignition lg:left-1/2"
                  />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
