import {
  Wrench,
  SprayCan,
  Droplets,
  Wind,
  Cog,
  Settings2,
  Disc3,
  Zap,
  CircleDot,
  Truck,
  type LucideIcon,
} from "lucide-react";

export interface ServiceCategory {
  id: string;
  name: string;
  icon: LucideIcon;
  services: string[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: "general",
    name: "General Services",
    icon: Wrench,
    services: [
      "General Car Service",
      "Periodic Maintenance",
      "Oil Change",
      "Filter Replacement",
      "Vehicle Inspection",
    ],
  },
  {
    id: "denting-painting",
    name: "Denting & Painting",
    icon: SprayCan,
    services: [
      "Car Denting",
      "Car Painting",
      "Full Body Painting",
      "Scratch Removal",
      "Bumper Repair",
      "Paint Touch-Up",
    ],
  },
  {
    id: "wash-spa",
    name: "Car Wash & Spa",
    icon: Droplets,
    services: [
      "Car Wash",
      "Interior Cleaning",
      "Exterior Cleaning",
      "Car Spa",
      "Interior Detailing",
      "Exterior Detailing",
    ],
  },
  {
    id: "ac-service",
    name: "AC Service & Repair",
    icon: Wind,
    services: [
      "Car AC Repair",
      "AC Gas Filling",
      "AC Cooling Problem",
      "AC Compressor Repair",
      "AC Cleaning",
      "AC Diagnosis",
    ],
  },
  {
    id: "engine",
    name: "Engine & Mechanical",
    icon: Cog,
    services: [
      "Engine Repair",
      "Engine Diagnostics",
      "Engine Rebuild",
      "Major Engine Work",
      "Timing Belt Replacement",
      "Oil Leakage Repair",
    ],
  },
  {
    id: "suspension",
    name: "Suspension & Steering",
    icon: Settings2,
    services: [
      "Suspension Repair",
      "Shock Absorber Replacement",
      "Strut Replacement",
      "Steering Repair",
      "Ball Joint Replacement",
      "Control Arm Repair",
    ],
  },
  {
    id: "brake-clutch",
    name: "Brake & Clutch",
    icon: Disc3,
    services: [
      "Brake Service",
      "Brake Pad Replacement",
      "Brake Disc Service",
      "Clutch Repair",
      "Clutch Plate Replacement",
      "Brake Inspection",
    ],
  },
  {
    id: "electrical",
    name: "Electrical & Diagnostics",
    icon: Zap,
    services: [
      "Battery Service",
      "Car Electrical Repair",
      "ECU Diagnostics",
      "Sensor Diagnosis",
      "Wiring Repair",
      "Computerized Vehicle Diagnostics",
    ],
  },
  {
    id: "wheels-tyres",
    name: "Wheels & Tyres",
    icon: CircleDot,
    services: [
      "Wheel Alignment",
      "Wheel Balancing",
      "Tyre Inspection",
      "Tyre Replacement",
      "Puncture Repair",
    ],
  },
  {
    id: "additional",
    name: "Additional Services",
    icon: Truck,
    services: [
      "Pickup & Drop",
      "Emergency Assistance",
      "Vehicle Inspection",
      "Pre-Purchase Inspection",
    ],
  },
];

export const totalServiceCount = serviceCategories.reduce(
  (sum, c) => sum + c.services.length,
  0
);

export interface FeaturedService {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const featuredServices: FeaturedService[] = [
  {
    title: "Engine Rebuild",
    description:
      "Complete engine rebuilding and major mechanical repair performed by experienced technicians with proper diagnostics and quality replacement components.",
    icon: Cog,
  },
  {
    title: "Suspension Work",
    description:
      "Inspection and repair of suspension components to improve ride comfort, stability and handling.",
    icon: Settings2,
  },
  {
    title: "Car Washing & Spa",
    description:
      "Professional exterior washing, interior cleaning and detailing to keep your vehicle clean and refreshed.",
    icon: Droplets,
  },
  {
    title: "Denting & Painting",
    description:
      "Professional dent repair, body restoration and paint finishing for a clean factory-style appearance.",
    icon: SprayCan,
  },
  {
    title: "AC Service & Repair",
    description:
      "Complete air-conditioning diagnosis, gas filling and compressor repair to keep your cabin cool and comfortable.",
    icon: Wind,
  },
  {
    title: "Brake & Clutch",
    description:
      "Brake pad, disc and clutch inspection and replacement for safe, confident and smooth driving.",
    icon: Disc3,
  },
];
