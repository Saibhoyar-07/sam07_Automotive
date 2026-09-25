import { MapPin, Navigation } from "lucide-react";
import { businessInfo, getMapsDirectionsLink } from "../data/businessInfo";

export default function LocationMap() {
  return (
    <div className="overflow-hidden rounded-2xl border border-paper-2 bg-white">
      <div className="relative flex min-h-[260px] flex-col items-center justify-center overflow-hidden bg-ink px-6 py-12 text-center sm:min-h-[320px]">
        <div aria-hidden className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgb(255_255_255_/_0.08)_1px,transparent_1px),linear-gradient(90deg,rgb(255_255_255_/_0.08)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div aria-hidden className="absolute h-48 w-48 rounded-full bg-ignition/20 blur-3xl" />
        <div className="relative">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-ignition text-white shadow-[0_0_0_12px_rgb(255_68_21_/_0.12)]">
            <MapPin size={30} />
          </span>
          <p className="mt-6 font-display text-3xl font-semibold text-white">Find Our Garage</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-silver">
            Trace the fastest route to SAM 07 AUTOMOBILE in Google Maps.
          </p>
          <a
            href={getMapsDirectionsLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ignition px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.03] hover:bg-ignition-600 active:scale-95"
          >
            <Navigation size={16} /> Trace Garage Location
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-start gap-3">
          <MapPin size={20} className="mt-0.5 shrink-0 text-ignition" />
          <div>
            <p className="font-body text-sm font-semibold text-graphite">{businessInfo.address}</p>
            <p className="text-sm text-graphite/60">{businessInfo.addressLine2}, {businessInfo.city}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
