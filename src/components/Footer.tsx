import { Link } from "react-router-dom";
import { Wrench, Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { InstagramIcon } from "./SocialIcons";
import { businessInfo, getCallLink, getEmailLink, getWhatsAppLink } from "../data/businessInfo";

const quickLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

const serviceLinks = [
  "Car Service",
  "Engine Repair",
  "Engine Rebuild",
  "Suspension",
  "Denting & Painting",
  "Car Wash",
  "AC Repair",
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-silver">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-ignition">
                <Wrench size={18} className="text-white" strokeWidth={2.5} />
              </span>
              <span className="font-display text-lg font-semibold tracking-wide text-white">
                SAM 07 <span className="text-ignition">AUTOMOBILE</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              {businessInfo.tagline}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={businessInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-steel-light text-silver transition-colors hover:border-ignition hover:text-ignition"
              >
                <InstagramIcon size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="transition-colors hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <Link to="/services" className="transition-colors hover:text-white">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold text-white">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={getCallLink()} className="flex items-center gap-2 transition-colors hover:text-white">
                  <Phone size={15} className="text-ignition shrink-0" /> {businessInfo.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={getWhatsAppLink()} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 transition-colors hover:text-white">
                  <MessageCircle size={15} className="text-whatsapp shrink-0" /> {businessInfo.whatsappDisplay}
                </a>
              </li>
              <li>
                <a href={getEmailLink()} className="flex items-center gap-2 transition-colors hover:text-white break-all">
                  <Mail size={15} className="text-ignition shrink-0" /> {businessInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={15} className="mt-0.5 text-ignition shrink-0" />
                <span>{businessInfo.address}, {businessInfo.addressLine2}, {businessInfo.city}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-steel pt-6 sm:grid-cols-2">
          <p className="text-sm">
            <span className="font-medium text-white">Opening Hours:</span>{" "}
            Mon – Sat, 10:00 AM – 8:00 PM &middot; Sunday Closed
          </p>
          <p className="text-sm sm:text-right">
            © {year} SAM 07 AUTOMOBILE. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
