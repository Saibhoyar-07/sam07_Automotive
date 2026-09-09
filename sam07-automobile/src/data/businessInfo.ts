/**
 * ============================================================
 *  SAM 07 AUTOMOBILE — BUSINESS CONFIGURATION
 * ============================================================
 *  This is the ONLY file you need to edit to update the
 *  phone number, WhatsApp number, email, address and map
 *  location shown across the entire website.
 *
 *  Notes:
 *  - `phone` / `whatsapp` must be in international format
 *    with country code and NO spaces, e.g. "919876543210".
 *  - `latitude` / `longitude` are placeholders. Replace them
 *    with your real coordinates (right-click your location on
 *    Google Maps → the numbers shown are lat, lng).
 * ============================================================
 */

export const businessInfo = {
  name: "SAM 07 AUTOMOBILE",
  tagline: "Complete Car Care. Genuine Parts. Trusted Service.",

  phone: "918793033326",
  phoneDisplay: "+91 87930 33326",

  whatsapp: "918793033326",
  whatsappDisplay: "+91 87930 33326",

  // ⚠️ PLACEHOLDER — replace with the real business email
  email: "info@sam07automobile.example",

  address: "Krushi Nagar, 256, Dabha Rd",
  addressLine2: "Vayusena Nagar",
  city: "Nagpur, Maharashtra 440023",

  hours: [
    { day: "Monday", time: "10:00 AM – 8:00 PM" },
    { day: "Tuesday", time: "10:00 AM – 8:00 PM" },
    { day: "Wednesday", time: "10:00 AM – 8:00 PM" },
    { day: "Thursday", time: "10:00 AM – 8:00 PM" },
    { day: "Friday", time: "10:00 AM – 8:00 PM" },
    { day: "Saturday", time: "10:00 AM – 8:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  social: {
    instagram: "https://www.instagram.com/sam07automobile?utm_source=qr&stkn=MXg0MGx4Nm01M2Vxag==",
  },

  stats: [
    { value: 10, suffix: "+", label: "Years Experience" },
    { value: 1000, suffix: "+", label: "Cars Serviced" },
    { value: 15, suffix: "+", label: "Experienced Technicians" },
    { value: 100, suffix: "%", label: "Genuine / OEM-Quality Parts" },
  ],
};

export const getWhatsAppLink = (message?: string) => {
  const base = `https://wa.me/${businessInfo.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
};

export const getCallLink = () => `tel:+${businessInfo.phone}`;
export const getEmailLink = () => `mailto:${businessInfo.email}`;
export const getFullAddress = () =>
  `${businessInfo.address}, ${businessInfo.addressLine2}, ${businessInfo.city}`;
export const getMapsDirectionsLink = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(getFullAddress())}`;
export const getMapsEmbedSrc = () =>
  `https://www.google.com/maps?q=${encodeURIComponent(getFullAddress())}&z=15&output=embed`;
