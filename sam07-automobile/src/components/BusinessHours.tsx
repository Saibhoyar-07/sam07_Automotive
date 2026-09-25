import { Clock } from "lucide-react";
import { businessInfo } from "../data/businessInfo";

function isToday(day: string) {
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  return today === day;
}

export default function BusinessHours() {
  return (
    <div className="rounded-2xl border border-steel bg-panel p-6">
      <div className="flex items-center gap-2.5">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ignition/15 text-ignition">
          <Clock size={20} />
        </span>
        <h3 className="font-display text-lg font-semibold text-white">Opening Hours</h3>
      </div>

      <ul className="mt-5 divide-y divide-steel">
        {businessInfo.hours.map((h) => {
          const today = isToday(h.day);
          return (
            <li
              key={h.day}
              className={`flex items-center justify-between py-2.5 text-sm ${
                today ? "text-white" : "text-silver"
              }`}
            >
              <span className="flex items-center gap-2 font-medium">
                {h.day}
                {today && (
                  <span className="rounded-full bg-ignition px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
                    Today
                  </span>
                )}
              </span>
              <span className={h.time === "Closed" ? "text-silver-dim" : ""}>{h.time}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
