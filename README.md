# Wise Leaders Academy — Astro Static Site

A fully static HTML/CSS site built with [Astro](https://astro.build), migrated from the original CMS (Wix/Duda). All page titles, meta descriptions, and canonical URLs are preserved for SEO continuity.

---

## Project Structure

```
wise-leaders-academy/
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro          # Shared nav + footer + <head>
│   ├── pages/
│   │   ├── index.astro               # Home page
│   │   ├── about.astro               # About Us (/about)
│   │   ├── about_us.astro            # Redirect: /about_us → /about
│   │   ├── gallery.astro             # Gallery (/gallery)
│   │   ├── contact.astro             # Contact / Schedule a Tour (/contact)
│   │   ├── new-page.astro            # Redirect: /new-page → /contact
│   │   ├── 404.astro                 # 404 page
│   │   └── understanding-daycare-costs-in-los-angeles-2025/
│   │       └── index.astro           # Blog post (SEO page)
│   └── styles/
│       └── global.css                # Design system & global styles
├── public/
│   └── gallery/                      # ← Put your gallery photos here
├── astro.config.mjs
└── package.json
```

---

## Quick Start

### 1. Install dependencies

```bash
npm install
```

### 2. Start the dev server

```bash
npm run dev
```

Visit `http://localhost:4321`

### 3. Build for production

```bash
npm run build
```

Output goes to `dist/`. Upload the contents of `dist/` to any static host.

---

## 📧 Setting Up the Contact Form (required before launch)

The site uses a simple form-to-email service. Choose one of the free options below and follow the instructions in `src/pages/contact.astro` and `src/pages/index.astro`.

### Option A — Formspree (recommended)
- Free tier: 50 submissions/month
- Sign up at https://formspree.io
- Create a new form → copy the endpoint (e.g. `https://formspree.io/f/abcd1234`)
- In **both** `contact.astro` and `index.astro`, replace:
  ```
  action="https://formspree.io/f/YOUR_FORM_ID"
  ```
  with your actual endpoint.

### Option B — Web3Forms (unlimited free)
- Sign up at https://web3forms.com
- Get your access key
- Change the form `action` to `https://api.web3forms.com/submit`
- Add this hidden field inside each `<form>`:
  ```html
  <input type="hidden" name="access_key" value="YOUR_KEY" />
  ```

### Option C — Netlify Forms (if deploying on Netlify — zero config)
- Change each form opening tag to:
  ```html
  <form name="contact" method="POST" data-netlify="true">
  ```
- Add inside the form:
  ```html
  <input type="hidden" name="form-name" value="contact" />
  ```
- Remove the `action` attribute entirely.

---

## 🖼️ Adding Gallery Photos

1. Place your `.jpg` / `.webp` photos in `public/gallery/`
2. Open `src/pages/gallery.astro`
3. Update the `images` array at the top of the file:

```js
const images = [
  { src: "/gallery/photo-01.jpg", alt: "Children painting at Wise Leaders Academy" },
  { src: "/gallery/photo-02.jpg", alt: "Outdoor garden time" },
  // add more...
];
```

---

## 🚀 Deployment Options

All options below are free for a static site this size.

### Netlify (easiest)
1. Push this repo to GitHub
2. Go to https://app.netlify.com → "Add new site" → "Import an existing project"
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Click Deploy

### Vercel
1. Push to GitHub
2. Go to https://vercel.com → "New Project" → import repo
3. Framework: Astro (auto-detected)
4. Deploy

### Cloudflare Pages
1. Push to GitHub
2. Go to Cloudflare Dashboard → Pages → Create application
3. Build command: `npm run build`, output: `dist`

---

## 🔁 Old URL Redirects (SEO-safe)

The following old CMS URLs are handled with instant JS + meta redirects so no existing backlinks or bookmarks break:

| Old URL (CMS)       | New URL (Astro)    |
|---------------------|--------------------|
| `/about_us`         | `/about`           |
| `/new-page`         | `/contact`         |

If you were also using `/tour-scheduling` or `/blank` as form destinations, add redirects for those too in `src/pages/`.

---

## 🔍 SEO Summary

| Page | Title | Meta Description |
|------|-------|-----------------|
| `/` | Daycare in West Adams & Mid-City \| Wise Leaders Academy | Safe, licensed, loving home daycare in West Adams & Mid-City Los Angeles… |
| `/about` | About Wise Leaders Academy \| Licensed Daycare West Adams | Learn about Wise Leaders Academy — licensed home-based daycare for ages 1–6… |
| `/gallery` | Daycare Gallery \| Wise Leaders Academy \| LA, 90016 | See photos of daily life at Wise Leaders Academy… |
| `/contact` | Schedule a Tour \| Wise Leaders Academy \| Contact Us | Get in touch with Wise Leaders Academy. Schedule a tour… |
| `/understanding-daycare-costs-in-los-angeles-2025` | How Much Does Daycare Cost In Los Angeles? (2025 Guide) | A complete guide to understanding daycare costs in Los Angeles in 2025… |

All pages include: `<title>`, `<meta name="description">`, `<link rel="canonical">`, and Open Graph tags.

---

## Customization Notes

- **Colors**: Edit CSS variables in `src/styles/global.css` (`:root` block)
- **Fonts**: Currently using Playfair Display (headings) + DM Sans (body) from Google Fonts
- **Logo / images**: Pulled directly from the CDN of the original site. Download and place in `public/` for full independence from the old host
- **Phone numbers**: `(323) 330-7271` and `(310) 904-2655` — update in `BaseLayout.astro` footer if they change
- **License number**: `#197495535` — appears in footer and hero badge

---

## License

All content © Wise Leaders Academy. Code structure is yours to use freely.
