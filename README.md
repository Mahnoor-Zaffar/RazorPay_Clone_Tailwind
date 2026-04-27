# tailwind_RazorPay_Clone

A frontend-only Razorpay-inspired landing page and checkout UI clone built with HTML, Tailwind CSS, and Vite.

This project focuses on UI/UX, responsive layout design, Tailwind utility-first styling, and a polished fintech-style interface. It does not include backend logic, authentication, a database, Razorpay SDK integration, or real payment processing.

## Project Overview

`tailwind_RazorPay_Clone` recreates the structure and visual direction of a Razorpay-style marketing website. It includes landing page sections for payments, business banking, product cards, features, testimonials, a final CTA, footer content, and a mock checkout demo.

The checkout demo is fully static and client-side. It allows users to add mock products to a cart, select a mock payment method, and view a demo-only success state.

## Features

- Responsive Razorpay-style navbar with mobile menu
- Hero section with dark navy background and CTA
- Payment Suite section with feature list and product cards
- RazorpayX Business Banking section
- New Product Suite cards
- Features grid
- Business trust/statistics section
- Testimonial section
- Final CTA section
- Dense professional footer with newsletter UI
- Frontend-only checkout demo with:
  - Mock product cards
  - Add to Cart buttons
  - Cart summary
  - Mock payment method selector
  - Demo-only success message
- Tailwind custom theme colors
- Mulish font integration
- Vite development and production build workflow

## Tech Stack

- HTML
- Tailwind CSS
- Vite
- PostCSS
- Autoprefixer
- Vanilla JavaScript

## Folder Structure

```text
tailwind_RazorPay_Clone/
├── images/
│   ├── avatar.svg
│   ├── business-banking.svg
│   ├── hero-illustration.svg
│   └── trust-illustration.svg
├── index.html
├── main.css
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── README.md
```

## Installation

Install project dependencies:

```bash
npm install
```

## Running Locally

Start the Vite development server:

```bash
npm start
```

Then open the local URL shown in the terminal, usually:

```text
http://localhost:5173/
```

## Build Command

Create a production build:

```bash
npm run build
```

The production files will be generated in the `dist/` folder.

## Deployment Notes

### Netlify

- Build command: `npm run build`
- Publish directory: `dist`

### Vercel

- Framework preset: `Vite`
- Build command: `npm run build`
- Output directory: `dist`

### GitHub Pages

For GitHub Pages, build the project first:

```bash
npm run build
```

Then deploy the generated `dist/` folder using your preferred GitHub Pages workflow or deployment action.

If deploying under a repository subpath, configure Vite `base` as needed.

## Screenshots

Add screenshots here after capturing the UI.

```text
screenshots/
├── desktop-home.png
├── mobile-home.png
└── checkout-demo.png
```

## Future Improvements

- Add more detailed responsive polish for tablet layouts
- Add optional dark/light visual variations
- Add subtle scroll animations
- Add more realistic placeholder product illustrations
- Add accessibility testing notes
- Add automated formatting or linting workflow
- Add a GitHub Pages deployment workflow

## Disclaimer

This project is an educational UI clone created for learning and portfolio purposes only.

It is not affiliated with, endorsed by, or connected to Razorpay. Razorpay names, concepts, and visual references are used only to describe the inspiration for this frontend interface.

No real payments are processed. The checkout demo is mock UI only and does not use the Razorpay SDK, backend services, authentication, database storage, or payment gateway integration.

## License

License placeholder. Add your preferred license, such as MIT, before publishing or distributing the project.
