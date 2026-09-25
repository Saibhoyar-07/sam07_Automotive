import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Gauge } from "lucide-react";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* ambient garage lighting */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-[-10%] h-[520px] w-[520px] rounded-full bg-ignition/20 blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-[-15%] left-[-10%] h-[420px] w-[420px] rounded-full bg-steel-light/25 blur-[110px]"
      />
      <div aria-hidden className="hero-light-sweep pointer-events-none absolute inset-y-0 left-[-18%] w-1/3" />
      <div aria-hidden className="hero-grid pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 pb-16 pt-14 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-8 lg:pb-24 lg:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-steel-light bg-panel px-4 py-1.5 text-xs font-medium text-silver">
            <Gauge size={14} className="text-ignition" />
            Multi-Brand Garage &amp; Service Center
          </span>

          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.08] text-white sm:text-5xl lg:text-[3.4rem]">
            Complete Car Care Under One Roof
          </h1>

          <p className="mt-5 max-w-lg text-balance font-body text-base leading-relaxed text-silver sm:text-lg">
            Professional car servicing, repair, washing, denting, painting and major
            mechanical work performed by experienced technicians using genuine/OEM-quality
            parts.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ignition px-7 py-3.5 font-body font-semibold text-white transition-transform hover:scale-[1.02] hover:bg-ignition-600 active:scale-95"
            >
              Book a Service <ArrowRight size={18} />
            </Link>
            <WhatsAppButton className="!px-7 !py-3.5" />
            <CallButton variant="outline" className="!px-7 !py-3.5" />
          </div>

          <div className="mt-8 flex items-center gap-2 text-sm text-silver-dim">
            <ShieldCheck size={16} className="text-ignition" />
            Transparent estimates &middot; No hidden charges
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-steel shadow-panel">
            <img
              src="/hero-garage.jpg"
              alt="Technician servicing a car engine at SAM 07 AUTOMOBILE garage"
              className="hero-image-drift h-[320px] w-full object-cover sm:h-[420px] lg:h-[480px]"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/0 to-transparent" />
            <div aria-hidden className="hero-image-glint absolute inset-y-0 left-[-35%] w-1/3" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-3 left-4 right-4 rounded-2xl border border-steel bg-panel/95 p-4 shadow-panel backdrop-blur sm:bottom-5 sm:left-6 sm:right-auto sm:w-72"
          >
            <p className="font-display text-2xl font-semibold text-white">10+ Years</p>
            <p className="text-sm text-silver">of trusted automobile service experience</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
