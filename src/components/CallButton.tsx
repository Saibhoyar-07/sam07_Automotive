import { Phone } from "lucide-react";
import { getCallLink, businessInfo } from "../data/businessInfo";

interface Props {
  className?: string;
  label?: string;
  variant?: "solid" | "outline";
  compact?: boolean;
}

export default function CallButton({
  className = "",
  label = "Call Now",
  variant = "solid",
  compact = false,
}: Props) {
  const styles =
    variant === "solid"
      ? "bg-ignition text-white hover:bg-ignition-600"
      : "border border-white/25 text-white hover:border-white/60 hover:bg-white/5";

  return (
    <a
      href={getCallLink()}
      aria-label={`${label} ${businessInfo.phoneDisplay}`}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold transition-transform duration-200 hover:scale-[1.03] active:scale-95 ${styles} ${
        compact ? "h-11 w-11 p-0" : "px-6 py-3"
      } ${className}`}
    >
      <Phone size={20} strokeWidth={2.25} />
      {!compact && <span>{label}</span>}
    </a>
  );
}
