import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { getWhatsAppLink } from "../data/businessInfo";
import type { FeaturedService } from "../data/services";

export default function ServiceCard({ service, index = 0 }: { service: FeaturedService; index?: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      whileHover={{ y: -6 }}
      className="group flex flex-col rounded-2xl border border-paper-2 bg-white p-6 shadow-sm transition-shadow hover:shadow-lg"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-ignition/10 text-ignition transition-colors group-hover:bg-ignition group-hover:text-white">
        <Icon size={24} />
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold text-graphite">{service.title}</h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-graphite/65">{service.description}</p>
      <a
        href={getWhatsAppLink(`Hi, I'd like to enquire about ${service.title}.`)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 font-body text-sm font-semibold text-ignition transition-colors hover:text-ignition-600"
      >
        Enquire Now <ArrowUpRight size={16} />
      </a>
    </motion.div>
  );
}
