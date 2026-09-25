# SAM 07 AUTOMOBILE — Website

A premium, animated, fully responsive website for **SAM 07 AUTOMOBILE**, a multi-brand
car service & repair garage. Built with React, Vite, TypeScript, Tailwind CSS v4,
Framer Motion and lucide-react.

## Pages
- **Home** — hero, animated stats, about preview, why-choose-us, service highlights, booking CTA
- **Services** — category browser, full-service catalogue modal (search + categories), popular services
- **About** — mission, vision, genuine-parts promise, animated process timeline
- **Contact** — call/WhatsApp/email/directions cards, enquiry form, business hours, embedded map

## Getting Started

```bash
npm install
npm run dev       # start local dev server
npm run build      # production build (outputs to /dist)
npm run preview    # preview the production build locally
```

## ⚙️ How to update your business details (IMPORTANT)

Everything — phone number, WhatsApp number, email, address, map coordinates,
opening hours and social links — lives in **one file**:

```
src/data/businessInfo.ts
```

Open it and replace the placeholder values marked with `⚠️ PLACEHOLDER`:

| Field         | What to change it to                                             |
|---------------|--------------------------------------------------------------------|
| `phone`       | Your phone number in international format, digits only, e.g. `919876543210` |
| `whatsapp`    | Your WhatsApp number, same format as above                        |
| `email`       | Your business email address                                       |
| `address` / `addressLine2` / `city` | Your garage's real address                            |
| `latitude` / `longitude` | Your garage's real GPS coordinates (right-click the spot on Google Maps to copy them) |
| `hours`       | Your actual weekly opening hours                                   |
| `social`      | Your real Instagram / Facebook / YouTube URLs                      |

No other file needs to change — the Navbar, Footer, Contact page, map embed,
"Get Directions" button, and every Call/WhatsApp button all read from this
single file automatically.

The same real address/coordinates should also be updated in `index.html`
inside the `<script type="application/ld+json">` block (the `AutoRepair`
structured data used for SEO / Google search listings).

## Adding or editing services

All services and categories live in `src/data/services.ts` as plain arrays —
add, remove or rename entries there and they'll automatically appear in the
Services page, the full-service modal, its search, and the booking form's
service dropdown.

## Project structure

```
src/
  components/     Reusable UI building blocks (Navbar, Footer, ServiceModal, ...)
  pages/          Home, Services, About, Contact
  data/           businessInfo.ts, services.ts — all editable content lives here
  hooks/          useCountUp (stat counter animation)
  index.css       Design tokens (colors, fonts) + Tailwind v4 theme
```

## Notes
- Contact form and booking form are front-end only (no backend). Both are
  structured so you can swap the `onSubmitRequest` function in
  `src/components/ContactForm.tsx` for a real API call later.
- Images currently use royalty-free Unsplash placeholders. Swap the `src`
  attributes in `Hero.tsx` and `AboutPreview.tsx` with your own garage photos
  for the most authentic result.
- Replace `public/favicon.svg` and add a real `public/og-image.jpg`
  (1200×630px) for social-media link previews.
