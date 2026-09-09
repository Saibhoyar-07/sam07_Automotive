import { motion } from "framer-motion";
import ContactCards from "../components/ContactCards";
import ContactForm from "../components/ContactForm";
import BusinessHours from "../components/BusinessHours";
import LocationMap from "../components/LocationMap";

export default function Contact() {
  return (
    <>
      <title>Contact Us | SAM 07 AUTOMOBILE</title>

      <section className="bg-ink">
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-20">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl font-semibold text-white sm:text-5xl"
          >
            Get In Touch
          </motion.h1>
          <p className="mx-auto mt-5 max-w-xl text-balance text-silver">
            Have a question or need to schedule a service? Reach out — we're happy to help.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <ContactCards />
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 pb-16 sm:px-6 lg:grid-cols-3 lg:px-8 lg:pb-24">
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-semibold text-graphite sm:text-3xl">
              Request a Service
            </h2>
            <p className="mt-2 text-graphite/65">
              Fill in your details and preferred date — we'll confirm your appointment.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <BusinessHours />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <h2 className="font-display text-2xl font-semibold text-graphite sm:text-3xl">
            Find Our Garage
          </h2>
          <p className="mt-2 max-w-xl text-graphite/65">
            Visit us during working hours or get directions straight to our doorstep.
          </p>
          <div className="mt-8">
            <LocationMap />
          </div>
        </div>
      </section>
    </>
  );
}
