import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, X, Wrench } from "lucide-react";
import CallButton from "./CallButton";
import WhatsAppButton from "./WhatsAppButton";
import ServiceSearch from "./ServiceSearch";
import ServiceSidebar from "./ServiceSidebar";
import { serviceCategories } from "../data/services";
import { getWhatsAppLink } from "../data/businessInfo";

interface Props {
  open: boolean;
  onClose: () => void;
  initialCategoryId?: string;
}

export default function ServiceModal({ open, onClose, initialCategoryId }: Props) {
  const [activeId, setActiveId] = useState(initialCategoryId ?? serviceCategories[0].id);
  const [query, setQuery] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => searchRef.current?.focus(), 250);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      clearTimeout(t);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setActiveId(initialCategoryId ?? serviceCategories[0].id);
    } else {
      setQuery("");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const activeCategory = useMemo(
    () => serviceCategories.find((c) => c.id === activeId) ?? serviceCategories[0],
    [activeId]
  );

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return serviceCategories.flatMap((c) =>
      c.services
        .filter((s) => s.toLowerCase().includes(q))
        .map((s) => ({ service: s, category: c.name }))
    );
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-0 backdrop-blur-sm sm:p-4"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label="All services"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-full w-full flex-col overflow-hidden bg-ink shadow-panel sm:h-[90vh] sm:max-h-[820px] sm:w-full sm:max-w-5xl sm:rounded-3xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between gap-3 border-b border-steel px-4 py-4 sm:px-6">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-ignition sm:h-9 sm:w-9">
                  <Wrench size={16} className="text-white" strokeWidth={2.5} />
                </span>
                <span className="font-display text-sm font-semibold tracking-wide text-white sm:text-base">
                  SAM 07 <span className="text-ignition">AUTOMOBILE</span>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CallButton compact variant="outline" />
                <WhatsAppButton compact />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close services"
                  className="flex h-10 w-10 items-center justify-center rounded-full text-silver transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Search + mobile tabs */}
            <div className="space-y-3 border-b border-steel px-4 py-4 sm:px-6">
              <ServiceSearch ref={searchRef} value={query} onChange={setQuery} />
              <ServiceSidebar
                categories={serviceCategories}
                activeId={activeId}
                onSelect={setActiveId}
                disabled={!!searchResults}
              />
            </div>

            {/* Body */}
            <div className="flex flex-1 overflow-hidden">
              <div className="hidden w-72 shrink-0 overflow-y-auto border-r border-steel p-4 lg:block">
                <ServiceSidebar
                  categories={serviceCategories}
                  activeId={activeId}
                  onSelect={setActiveId}
                  disabled={!!searchResults}
                />
              </div>

              <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6">
                {searchResults ? (
                  <>
                    <p className="mb-4 text-sm text-silver-dim">
                      {searchResults.length} result{searchResults.length !== 1 && "s"} for
                      <span className="text-white"> &ldquo;{query}&rdquo;</span>
                    </p>
                    {searchResults.length === 0 ? (
                      <div className="flex flex-col items-center justify-center py-16 text-center">
                        <p className="text-silver">No services matched your search.</p>
                        <a
                          href={getWhatsAppLink(`Hi, I couldn't find "${query}" — is this service available?`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-3 text-sm font-semibold text-ignition"
                        >
                          Ask us on WhatsApp
                        </a>
                      </div>
                    ) : (
                      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {searchResults.map((r, i) => (
                          <motion.li
                            key={r.service + i}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: i * 0.02 }}
                            className="flex items-start gap-2.5 rounded-xl border border-steel bg-panel px-4 py-3"
                          >
                            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-ignition" />
                            <span>
                              <span className="block text-sm font-medium text-white">{r.service}</span>
                              <span className="text-xs text-silver-dim">{r.category}</span>
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeCategory.id}
                      initial={{ opacity: 0, x: 12 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -12 }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                    >
                      <div className="flex items-center gap-2.5">
                        <activeCategory.icon size={22} className="text-ignition" />
                        <h3 className="font-display text-xl font-semibold text-white">
                          {activeCategory.name}
                        </h3>
                        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-silver">
                          {activeCategory.services.length} services
                        </span>
                      </div>

                      <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        {activeCategory.services.map((s) => (
                          <li
                            key={s}
                            className="flex items-center gap-2.5 rounded-xl border border-steel bg-panel px-4 py-3 text-sm font-medium text-white transition-colors hover:border-ignition/50"
                          >
                            <CheckCircle2 size={18} className="shrink-0 text-ignition" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </AnimatePresence>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
