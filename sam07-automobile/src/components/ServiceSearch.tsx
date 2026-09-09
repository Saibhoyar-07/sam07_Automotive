import { Search, X } from "lucide-react";
import { forwardRef } from "react";

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const ServiceSearch = forwardRef<HTMLInputElement, Props>(({ value, onChange }, ref) => {
  return (
    <div className="relative">
      <Search size={18} className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-silver-dim" />
      <input
        ref={ref}
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search services (e.g. engine, AC, denting)"
        aria-label="Search services"
        className="w-full rounded-xl border border-steel bg-ink-2 py-3 pl-10 pr-9 text-sm text-white placeholder:text-silver-dim focus:border-ignition focus:outline-none"
      />
      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-silver-dim hover:text-white"
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
});

ServiceSearch.displayName = "ServiceSearch";
export default ServiceSearch;
