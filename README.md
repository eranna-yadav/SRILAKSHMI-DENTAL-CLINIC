# Srilakshmi Dental Clinic — Website

React + Vite + Tailwind CSS + Framer Motion.

```bash
npm install
npm run dev      # local preview
npm run build    # production build in dist/
```

## Editing content
All clinic details (phone, address, hours, services, FAQs, testimonials) are in `src/data.js`.

## Before going live
- **Clinic hours** in `src/data.js` are placeholders — confirm the real timings.
- **Testimonials** in `src/data.js` are placeholders — replace with real patient reviews.
- **Photos**: add images to `public/images/` with these names (placeholders show until then):
  `hero.jpg`, `about-1.jpg`, `about-2.jpg`, `doctor.jpg`, `before.jpg`, `after.jpg`,
  `service-general.jpg`, `service-implant.jpg`, `service-whitening.jpg`, `service-rootcanal.jpg`,
  `service-ortho.jpg`, `service-extraction.jpg`, `service-crowns.jpg`, `service-makeover.jpg`, `service-kids.jpg`,
  `journey-whitening.jpg`, `journey-braces.jpg`, `tip-brushing.jpg`, `tip-sensitivity.jpg`, `tip-kids.jpg`.

The booking form sends the patient's details to the clinic's WhatsApp (94485 80245).
