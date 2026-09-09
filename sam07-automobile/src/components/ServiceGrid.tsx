import { featuredServices } from "../data/services";
import ServiceCard from "./ServiceCard";

export default function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {featuredServices.map((s, i) => (
        <ServiceCard key={s.title} service={s} index={i} />
      ))}
    </div>
  );
}
