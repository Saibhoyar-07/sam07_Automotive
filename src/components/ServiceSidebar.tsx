import type { ServiceCategory } from "../data/services";

interface Props {
  categories: ServiceCategory[];
  activeId: string;
  onSelect: (id: string) => void;
  disabled?: boolean;
}

export default function ServiceSidebar({ categories, activeId, onSelect, disabled }: Props) {
  return (
    <>
      {/* Desktop vertical list */}
      <nav
        aria-label="Service categories"
        className={`hidden flex-col gap-1 lg:flex ${disabled ? "pointer-events-none opacity-40" : ""}`}
      >
        {categories.map((c) => {
          const active = c.id === activeId;
          return (
            <button
              key={c.id}
              type="button"
              onClick={() => onSelect(c.id)}
              aria-current={active}
              className={`flex items-center justify-between rounded-xl px-4 py-3 text-left text-sm font-medium transition-colors ${
                active
                  ? "bg-ignition text-white"
                  : "text-silver hover:bg-ink-2 hover:text-white"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <c.icon size={17} />
                {c.name}
              </span>
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${
                  active ? "bg-white/20" : "bg-white/5 text-silver-dim"
                }`}
              >
                {c.services.length}
              </span>
            </button>
          );
        })}
      </nav>

      {/* Mobile horizontal tabs */}
      <div
        role="tablist"
        aria-label="Service categories"
        className={`no-scrollbar flex gap-2 overflow-x-auto pb-1 lg:hidden ${
          disabled ? "pointer-events-none opacity-40" : ""
        }`}
      >
        {categories.map((c) => {
          const active = c.id === activeId;
          return (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => onSelect(c.id)}
              className={`flex shrink-0 items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-medium whitespace-nowrap transition-colors ${
                active
                  ? "border-ignition bg-ignition text-white"
                  : "border-steel text-silver"
              }`}
            >
              <c.icon size={14} />
              {c.name}
              <span className={active ? "text-white/80" : "text-silver-dim"}>({c.services.length})</span>
            </button>
          );
        })}
      </div>
    </>
  );
}
