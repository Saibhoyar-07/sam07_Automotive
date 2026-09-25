import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "../data/businessInfo";

interface Props {
  className?: string;
  message?: string;
  label?: string;
  compact?: boolean;
}

export default function WhatsAppButton({
  className = "",
  message = "Hi SAM 07 AUTOMOBILE, I'd like to enquire about a car service.",
  label = "WhatsApp Us",
  compact = false,
}: Props) {
  return (
    <a
      href={getWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp font-body font-semibold text-white transition-transform duration-200 hover:scale-[1.03] hover:bg-whatsapp-600 active:scale-95 ${
        compact ? "h-11 w-11 p-0" : "px-6 py-3"
      } ${className}`}
    >
      <MessageCircle size={20} strokeWidth={2.25} />
      {!compact && <span>{label}</span>}
    </a>
  );
}
