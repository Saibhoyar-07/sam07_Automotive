import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck, CheckCircle2 } from "lucide-react";
import { serviceCategories } from "../data/services";

export default function BookingSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[600px] -translate-x-1/2 rounded-full bg-ignition/15 blur-[120px]"
      />
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-steel-light bg-panel px-4 py-1.5 text-xs font-medium text-silver">
            <CalendarCheck size={14} className="text-ignition" />
            Quick Booking
          </span>
          <h2 className="mt-5 font-display text-3xl font-semibold text-white sm:text-4xl">
            Book Your Car Service
          </h2>
          <p className="mt-3 text-silver">
            Share a few details and our team will confirm your appointment.
          </p>
        </div>

        <div className="relative mt-10 rounded-3xl border border-steel bg-panel p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center py-8 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp">
                  <CheckCircle2 size={28} />
                </span>
                <p className="mt-4 font-display text-lg font-semibold text-white">
                  Booking Request Sent
                </p>
                <p className="mt-1 text-sm text-silver">
                  We'll call you shortly to confirm your slot.
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              >
                <input
                  required
                  placeholder="Customer Name"
                  className="rounded-xl border border-steel bg-ink-2 px-4 py-3 text-sm text-white placeholder:text-silver-dim focus:border-ignition focus:outline-none"
                />
                <input
                  required
                  placeholder="Mobile Number"
                  className="rounded-xl border border-steel bg-ink-2 px-4 py-3 text-sm text-white placeholder:text-silver-dim focus:border-ignition focus:outline-none"
                />
                <input
                  required
                  placeholder="Vehicle (e.g. Honda City)"
                  className="rounded-xl border border-steel bg-ink-2 px-4 py-3 text-sm text-white placeholder:text-silver-dim focus:border-ignition focus:outline-none"
                />
                <select
                  required
                  defaultValue=""
                  className="rounded-xl border border-steel bg-ink-2 px-4 py-3 text-sm text-white focus:border-ignition focus:outline-none"
                >
                  <option value="" disabled>
                    Select Service
                  </option>
                  {serviceCategories.map((c) => (
                    <option key={c.id} value={c.id} className="bg-ink-2">
                      {c.name}
                    </option>
                  ))}
                </select>
                <input
                  type="date"
                  required
                  className="rounded-xl border border-steel bg-ink-2 px-4 py-3 text-sm text-white focus:border-ignition focus:outline-none"
                />
                <input
                  type="time"
                  required
                  className="rounded-xl border border-steel bg-ink-2 px-4 py-3 text-sm text-white focus:border-ignition focus:outline-none"
                />
                <button
                  type="submit"
                  className="rounded-xl bg-ignition py-3 font-body font-semibold text-white transition-colors hover:bg-ignition-600 sm:col-span-2"
                >
                  Book Service
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
