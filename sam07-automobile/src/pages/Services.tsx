import { useState } from "react";
import { motion } from "framer-motion";
import { LayoutGrid, CheckCircle2 } from "lucide-react";
import ServiceGrid from "../components/ServiceGrid";
import ServiceModal from "../components/ServiceModal";
import BookingSection from "../components/BookingSection";
import { serviceCategories, totalServiceCount } from "../data/services";

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [initialCategory, setInitialCategory] = useState<string | undefined>();

  const openCategory = (id: string) => {
    setInitialCategory(id);
    setModalOpen(true);
  };

  return (
    <>
      <title>Services | SAM 07 AUTOMOBILE</title>

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-2xl text-balance font-display text-4xl font-semibold text-white sm:text-5xl"
          >
            Our Complete Range of Services
          </motion.h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-silver">
            From routine maintenance to major mechanical work — {totalServiceCount}+ services across
            10 categories, all under one roof.
          </p>
          <button
            type="button"
            onClick={() => {
              setInitialCategory(undefined);
              setModalOpen(true);
            }}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ignition px-7 py-3.5 font-body font-semibold text-white transition-transform hover:scale-[1.02] active:scale-95"
          >
            <LayoutGrid size={18} /> View All Services
          </button>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-2xl font-semibold text-graphite sm:text-3xl">
            Browse by Category
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((c, i) => (
              <motion.button
                key={c.id}
                type="button"
                onClick={() => openCategory(c.id)}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: (i % 6) * 0.05 }}
                whileHover={{ y: -4 }}
                className="group flex flex-col items-start rounded-2xl border border-paper-2 bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-lg"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ignition/10 text-ignition transition-colors group-hover:bg-ignition group-hover:text-white">
                  <c.icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-graphite">{c.name}</h3>
                <p className="mt-1 text-sm text-graphite/55">{c.services.length} services</p>
                <ul className="mt-3 space-y-1.5">
                  {c.services.slice(0, 3).map((s) => (
                    <li key={s} className="flex items-center gap-1.5 text-xs text-graphite/60">
                      <CheckCircle2 size={13} className="text-ignition" /> {s}
                    </li>
                  ))}
                </ul>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
              Popular Services
            </h2>
          </div>
          <div className="mt-12">
            <div className="[&_h3]:text-graphite [&_p]:text-graphite/65">
              <div className="rounded-3xl bg-paper p-6 sm:p-8">
                <ServiceGrid />
              </div>
            </div>
          </div>
        </div>
      </section>

      <BookingSection />

      <ServiceModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        initialCategoryId={initialCategory}
      />
    </>
  );
}
