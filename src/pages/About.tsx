import { motion } from "framer-motion";
import {
  Users,
  Wrench,
  ScanLine,
  MessageSquareText,
  ShieldCheck,
  Target,
  Eye,
} from "lucide-react";
import AboutProcess from "../components/AboutProcess";
import BookingSection from "../components/BookingSection";

const highlights = [
  { icon: Users, title: "Experienced Technicians", desc: "Trained hands with years of hands-on repair experience." },
  { icon: Wrench, title: "Quality Workmanship", desc: "Careful, methodical work on every vehicle, every time." },
  { icon: ScanLine, title: "Modern Tools", desc: "Diagnostic equipment that finds the real issue, fast." },
  { icon: MessageSquareText, title: "Transparent Service", desc: "Clear communication from estimate to delivery." },
];

export default function About() {
  return (
    <>
      <title>About Us | SAM 07 AUTOMOBILE</title>

      <section className="bg-ink">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl font-semibold text-white sm:text-5xl"
          >
            About SAM 07 AUTOMOBILE
          </motion.h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance leading-relaxed text-silver">
            SAM 07 AUTOMOBILE is a trusted automobile service and repair center providing
            complete vehicle care. Our objective is to provide dependable automotive services
            with skilled technicians, modern equipment, transparent communication and quality
            replacement parts.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-paper-2 bg-white p-8"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ignition/10 text-ignition">
              <Target size={22} />
            </span>
            <h2 className="mt-4 font-display text-xl font-semibold text-graphite">Our Mission</h2>
            <p className="mt-2 leading-relaxed text-graphite/65">
              Our mission is to provide reliable, professional and affordable vehicle service
              while maintaining high standards of workmanship.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="rounded-2xl border border-paper-2 bg-white p-8"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ignition/10 text-ignition">
              <Eye size={22} />
            </span>
            <h2 className="mt-4 font-display text-xl font-semibold text-graphite">Our Vision</h2>
            <p className="mt-2 leading-relaxed text-graphite/65">
              To become a trusted destination for complete automobile maintenance and repair.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-paper-2 bg-paper p-8 sm:p-10"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ignition/10 text-ignition">
              <ShieldCheck size={22} />
            </span>
            <h2 className="mt-4 font-display text-xl font-semibold text-graphite">
              Genuine Parts Promise
            </h2>
            <p className="mt-2 leading-relaxed text-graphite/65">
              We believe that the quality of parts directly affects vehicle performance and
              safety. Wherever applicable, we use genuine/OEM-quality parts and reliable
              replacement components. Parts are selected according to vehicle requirements and
              customer approval.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h, i) => (
              <motion.div
                key={h.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.08 }}
                className="rounded-2xl border border-paper-2 bg-white p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ignition/10 text-ignition">
                  <h.icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-graphite">{h.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-graphite/65">{h.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <AboutProcess />
      <BookingSection />
    </>
  );
}
