import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutGrid } from "lucide-react";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import AboutPreview from "../components/AboutPreview";
import WhyChooseUs from "../components/WhyChooseUs";
import ServiceGrid from "../components/ServiceGrid";
import ServiceModal from "../components/ServiceModal";
import BookingSection from "../components/BookingSection";
import { totalServiceCount } from "../data/services";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <title>SAM 07 AUTOMOBILE | Complete Car Care Under One Roof</title>
      <Hero />
      <Stats />
      <AboutPreview />
      <WhyChooseUs />

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold text-graphite sm:text-4xl">
              Our Core Services
            </h2>
            <p className="mt-4 text-graphite/65">
              A snapshot of what we handle — explore all {totalServiceCount}+ services in detail.
            </p>
          </div>

          <div className="mt-12">
            <ServiceGrid />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="mt-10 flex justify-center"
          >
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 font-body font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
            >
              <LayoutGrid size={18} /> View All Services
            </button>
          </motion.div>
        </div>
      </section>

      <BookingSection />

      <ServiceModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
