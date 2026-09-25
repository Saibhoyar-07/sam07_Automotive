import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, Navigation } from "lucide-react";
import {
  businessInfo,
  getCallLink,
  getEmailLink,
  getWhatsAppLink,
  getMapsDirectionsLink,
} from "../data/businessInfo";

const cards = [
  {
    icon: Phone,
    label: "Call Now",
    value: businessInfo.phoneDisplay,
    href: getCallLink(),
    accent: "bg-ignition/10 text-ignition group-hover:bg-ignition",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: businessInfo.whatsappDisplay,
    href: getWhatsAppLink(),
    accent: "bg-whatsapp/10 text-whatsapp group-hover:bg-whatsapp",
  },
  {
    icon: Mail,
    label: "Send Email",
    value: businessInfo.email,
    href: getEmailLink(),
    accent: "bg-ignition/10 text-ignition group-hover:bg-ignition",
  },
  {
    icon: Navigation,
    label: "Get Directions",
    value: `${businessInfo.address}, ${businessInfo.city}`,
    href: getMapsDirectionsLink(),
    accent: "bg-ignition/10 text-ignition group-hover:bg-ignition",
  },
];

export default function ContactCards() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
      {cards.map((c, i) => (
        <motion.a
          key={c.label}
          href={c.href}
          target={c.label !== "Call Now" ? "_blank" : undefined}
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: i * 0.06 }}
          className="group flex items-center gap-4 rounded-2xl border border-paper-2 bg-white p-5 transition-shadow hover:shadow-lg"
        >
          <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors group-hover:text-white ${c.accent}`}>
            <c.icon size={22} />
          </span>
          <span className="min-w-0">
            <span className="block text-xs font-medium uppercase tracking-wide text-graphite/50">
              {c.label}
            </span>
            <span className="block truncate font-body text-sm font-semibold text-graphite">
              {c.value}
            </span>
          </span>
        </motion.a>
      ))}
    </div>
  );
}
