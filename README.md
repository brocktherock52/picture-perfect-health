# Picture Perfect Health, LLC — Website

A premium, conversion-focused, SEO-optimized marketing website for **Picture Perfect Health, LLC** (Dr. Eric Feintuch's corporate wellness business). Built with Vite + React + TypeScript + Tailwind + shadcn/ui.

This is project #1 of two. The companion project, **ChiroVision** (Dr. Feintuch's diagnostic imaging SaaS), lives in `../chirovision`.

---

## 1. Tech Stack

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (CSS variables) + `@tailwindcss/typography`
- **react-router-dom** v6 — client-side routing
- **react-helmet-async** — per-page meta + JSON-LD
- **react-hook-form** + **zod** — form validation
- **embla-carousel-react** — testimonials carousel
- **next-themes** — dark mode toggle
- **framer-motion** — light animation only
- **sonner** — toast notifications
- **lucide-react** — icons

---

## 2. Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# → http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview the production build
npm run preview
```

**Requirements:** Node.js 20+ and npm.

---

## 3. Project Structure

```
pph/
├── public/                 # Static assets, favicons, robots.txt, sitemap.xml
├── src/
│   ├── main.tsx            # React root, providers, scroll restoration
│   ├── App.tsx             # Routes, Header, Footer, lead capture modal
│   ├── index.css           # Tailwind + CSS variables (brand tokens)
│   ├── pages/              # Top-level page components
│   ├── components/
│   │   ├── ui/             # shadcn primitives (button, card, dialog, etc.)
│   │   ├── layout/         # Header, MobileNav, Footer, ThemeProvider
│   │   ├── home/           # Homepage sections
│   │   ├── about/          # About-page sections (DoctorBioHero, NotableEngagements, PersonalStory, etc.)
│   │   ├── services/       # Service grid + detail components
│   │   ├── portfolio/      # Logo grid, case studies, photo gallery
│   │   ├── blog/           # Post card, header, prose, share bar
│   │   ├── membership/     # Tier cards, gated preview, Whop button
│   │   ├── contact/        # Contact form, info block, map embed
│   │   └── shared/         # Cross-page components (Hero CTAs, JsonLd, Seo, etc.)
│   ├── data/               # All site content (services, blog posts, testimonials, logos)
│   ├── lib/                # site-config, seo helpers, JSON-LD generators, validators
│   ├── hooks/              # useScrollDepth, useInViewCounter
│   └── types/              # TypeScript types
└── ...config files
```

---

## 4. Editing Content

### Site-wide info (phone, address, navigation)
**File:** `src/lib/site-config.ts`

This is the **single source of truth** for the site name, phone (`1-800-438-9355`), email, address, navigation menu, and Dr. Feintuch's bio data. Every header, footer, JSON-LD generator, and CTA reads from this file.

### Services
**File:** `src/data/services.ts`

Each service is an object with `slug`, `name`, `shortDescription`, `longDescription`, `features`, `howItWorks`, `faqs`, `heroImage`, `heroAlt`, and an `icon`. To add or edit a service, edit this file. All service pages, the homepage grid, and the sitemap update automatically.

### Blog posts
**Files:**
- `src/data/blog/posts.ts` — registry array
- `src/data/blog/<slug>.tsx` — one TSX file per post

To add a new post:
1. Create `src/data/blog/<slug>.tsx` exporting `post: BlogPost`
2. Import it in `posts.ts` and add to the array
3. The blog hub, post route, sitemap, and related-posts widget all update automatically

### Testimonials, client logos, FAQs, case studies
- `src/data/testimonials.ts` — placeholder quotes (clearly labeled `isPlaceholder: true`)
- `src/data/clientLogos.ts` — text logo placeholders, swap with real SVGs
- `src/data/faq.ts` — general "before you call" FAQs
- `src/data/caseStudies.ts` — Quest Diagnostics + 2 more

### Swapping Unsplash images
All images are hotlinked from Unsplash. To replace one:
1. Find the call site (e.g., `src/components/home/Hero.tsx`)
2. Replace the `https://images.unsplash.com/photo-XXX...` URL with your own
3. Update the `alt` text

---

## 5. Brand System

### Colors
Tailwind CSS variables defined in `src/index.css`:
- `--primary` `215 65% 20%` — medical navy `#12305C`
- `--secondary` `166 65% 45%` — soft teal `#2BB8A0`
- `--accent` `160 75% 92%` — mint tint
- `--background` `210 40% 98%` — off-white

Both light and dark modes are defined. To change the brand colors, edit `src/index.css` `:root` and `.dark` blocks.

### Typography
- **Headings:** Fraunces (serif, weights 500/600/700) — loaded via Google Fonts in `index.html`
- **Body/UI:** Inter (weights 400/500/600)

To change fonts, update the `<link>` in `index.html` and the `fontFamily` in `tailwind.config.ts`.

### Adding shadcn components
This project ships with hand-rolled versions of shadcn primitives in `src/components/ui/`. To add more, run:
```
npx shadcn@latest add <component-name>
```
shadcn config lives in `components.json`.

---

## 6. Whop Integration TODO

The membership page has 3 tier cards with Whop checkout buttons. **None of them are wired yet.**

**Where to add real Whop URLs:**
- File: `src/components/membership/WhopCheckoutButton.tsx`
- Search for: `// TODO: Whop`
- Replace `const whopCheckoutUrl = "#"` with your actual Whop checkout URL per plan.

To find the URLs: Whop dashboard → Products → [your product] → Checkout link.

If you want plan-specific URLs, you can pass them via the `plan` prop in `MembershipTierCard` and switch on it inside `WhopCheckoutButton`.

---

## 7. Forms (current behavior + how to wire a real backend)

All three forms (Contact, Lead Capture Modal, Newsletter signup on Blog) currently:
1. Validate input with `zod` via `react-hook-form`
2. Log the payload to the browser console
3. Show a Sonner success toast
4. Reset the form

**Search for `// TODO: connect form backend` to find every form submit handler.**

### To wire Formspree (zero code, ~2 minutes)
1. Create a free Formspree project at [formspree.io](https://formspree.io)
2. In your form file, change the submit handler to:
   ```ts
   const onSubmit = async (data) => {
     await fetch("https://formspree.io/f/YOUR_FORM_ID", {
       method: "POST",
       body: JSON.stringify(data),
       headers: { "Content-Type": "application/json" },
     });
     toast.success("Thanks! We'll be in touch.");
     reset();
   };
   ```

### To wire Web3Forms (also zero-code)
Same pattern, different endpoint and add an `access_key` field. See [web3forms.com](https://web3forms.com).

### To wire Resend / Postmark / SendGrid (real email backend)
You'll need a small serverless function. Recommended: deploy to Vercel and add a `/api/contact.ts` route handler. See `.env.local.example` for the env var pattern.

---

## 8. SEO

### Per-page meta
Each page renders `<Seo title=... description=... path=... />` which uses `react-helmet-async` to inject `<title>`, `<meta name="description">`, OG, Twitter card, and canonical link. Helper: `src/lib/seo.ts` `buildSeo({})`.

### JSON-LD
Schema generators live in `src/lib/schema.ts`. The site emits:
- **Organization / ProfessionalService / MedicalOrganization** (site-wide via `App.tsx`)
- **Person** for Dr. Feintuch (on `/about`)
- **Service** + **FAQPage** (on each `/services/:slug`)
- **Article** (on each blog post)
- **BreadcrumbList** (on every non-home page)

### Validating schema
1. Run `npm run dev`
2. Open the page (e.g., `/about`)
3. View source, find each `<script type="application/ld+json">` block
4. Paste it into [Google Rich Results Test](https://search.google.com/test/rich-results)
5. Confirm zero errors

### Sitemap
Static file at `public/sitemap.xml` with 17 URLs. **Manually update this file when you add a new page or blog post.** A future enhancement could auto-generate it via a Vite plugin.

---

## 9. Deploying to Lovable.dev

This project is built specifically to drop into Lovable.dev for previewing. Lovable's native stack is **Vite + React + TS + Tailwind + shadcn/ui** — exactly what we built.

### Step-by-step

1. **Push the project to a new GitHub repo:**
   ```bash
   cd pph
   git init
   git add .
   git commit -m "Initial PPH website"
   gh repo create picture-perfect-health --private --source=. --push
   # Or do it manually via github.com → "New repository"
   ```

2. **Sign in to Lovable.dev** at [lovable.dev](https://lovable.dev)

3. **Create a blank Lovable project** (new Vite + React + TS project)

4. **In the new Lovable project:**
   - Click GitHub → Connect → select your `picture-perfect-health` repo
   - Lovable will sync the repo into the project

5. **Lovable provides a preview URL** — send this to Dr. Feintuch.

### Troubleshooting: if Lovable can't import directly

Lovable does not officially support importing existing repos as the *starting point* — it's designed to generate new projects. If the standard "Connect repo" flow doesn't pull our code in:

**Workaround — git clone + push over starter:**
1. Create a blank Lovable project (let it generate the starter)
2. Connect it to its own GitHub repo (Lovable does this for you)
3. Locally:
   ```bash
   git clone <lovable-repo-url> lovable-project
   cd lovable-project
   git rm -rf .             # remove starter files
   cp -r ../pph/* .         # copy our project over
   cp -r ../pph/.* . 2>/dev/null || true  # dotfiles too
   git add .
   git commit -m "Replace Lovable starter with PPH project"
   git push
   ```
4. Lovable will sync the new code and show the preview.

---

## 10. Production Deployment (alternatives to Lovable)

Once Eric approves the demo, deploy to one of these for production:

### Vercel (recommended)
1. Push to GitHub (if not already)
2. Sign in to [vercel.com](https://vercel.com), import the repo
3. Vercel auto-detects Vite — no config needed
4. Add the custom domain `pictureperfecthealth.com` in Project Settings → Domains
5. Update DNS at the registrar to point to Vercel's nameservers

### Netlify
Same flow at [netlify.com](https://netlify.com). Add a `_redirects` file in `public/` with `/* /index.html 200` to support client-side routing.

### Cloudflare Pages
Same flow at [pages.cloudflare.com](https://pages.cloudflare.com). Build command: `npm run build`, output dir: `dist`.

---

## 11. Custom Domain

Once deployed, point `pictureperfecthealth.com` at the deployment:
1. In your DNS provider (GoDaddy, Cloudflare, etc.), add a CNAME record pointing to your deployment URL
2. In your hosting platform (Vercel/Netlify/CF), add the domain
3. Wait for DNS propagation (usually under an hour)

---

## 12. Accessibility & Performance

### Targets
- WCAG AA compliance
- Lighthouse mobile (Incognito): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 90

### How to audit
1. `npm run build && npm run preview`
2. Open `http://localhost:4173` in Chrome Incognito
3. DevTools → Lighthouse → Mobile → Run

### Built-in accessibility
- All interactive elements have `aria-label` where needed
- Focus rings preserved on every focusable element
- Alt text on every image
- Semantic HTML throughout (`<main>`, `<nav>`, `<header>`, `<footer>`, `<article>`)
- Color contrast ≥ 4.5:1 for body text

---

## 13. Known TODOs (search the codebase for these strings)

- `// TODO: Whop` — wire Whop checkout URLs in `src/components/membership/WhopCheckoutButton.tsx`
- `// TODO: connect form backend` — wire real form submission (3 places)
- `// TODO: replace with real testimonial` — replace placeholder quotes
- `// TODO: replace with real client logo` — replace text-only logo placeholders with licensed SVGs
- `// TODO: replace with real photo of Dr. Eric Feintuch` — replace Unsplash portrait

Run `grep -rn "TODO:" src/` to see them all at once.

---

## 14. License

© 2026 Picture Perfect Health, LLC. All rights reserved.
