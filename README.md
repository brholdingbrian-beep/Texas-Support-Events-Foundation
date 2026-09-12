# Texas Support Events Foundation

Staging website for **Texas Support Events Foundation**, a 501(c)(3) nonprofit that plans, produces, and staffs benefit events for Central Texas organizations.

This is a **local / staging preview only**. Do not point a public domain at it, and do not deploy to production until Brian signs off.

Design reference: [Claude artifact](https://claude.ai/code/artifact/1d682452-1640-417b-abb1-7548d635acbe).

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

Other scripts:

```bash
npm run build    # production build into dist/
npm run preview  # serve the built files locally
```

No custom domain, DNS, or hosting is configured in this repo.

## What is live vs placeholder

| Item | Status |
| --- | --- |
| Org name, EIN `42-4918000`, 501(c)(3) copy | Confirmed |
| Next event: Austin Veterans Range Day — Sat, Oct. 10, 2026 — Top Shot Texas, Rockdale, TX | Confirmed |
| Pricing: $50 spectating / $500 team shooting | Confirmed |
| Board: Brian Reynolds (President), Eric Freemen (Secretary), Amy Hoover (Treasurer) | Confirmed — confirm Secretary spelling before print |
| Contact email `brian@brholdingcompany.com` | From the design reference — confirm as the public inbox |
| Event flyer graphic | CSS/HTML reconstruction of the artifact flyer (placeholder for a designed print file) |
| Partner marks (Gunny’s Warriors, CVRS) | Text placeholders — replace with official logos when provided |
| Donate / reserve / sponsor CTAs | `mailto:` only. No payment processor |
| Domain | **Not confirmed.** Relative/local preview only |
| Card / Clover donations | **Not wired.** Copy says giving by card “goes live shortly.” |

## TODO: Clover donation wiring

Do **not** invent a payment URL.

When Brian is ready:

1. Create the Clover (or other approved) donation / hosted checkout link.
2. Put the public URL in one place (`src/site.ts`) and point the Donate / Email us to give primary buttons at it.
3. Keep a mailto fallback for checks, sponsor packets, and questions.
4. Update the “goes live shortly” sentence once card giving is actually live.
5. Re-test the donate path on desktop and mobile before any public launch.

## Go-live blockers (do not skip)

1. **Brian OK** — no public deploy until he reviews this staging build.
2. **Domain** — none is confirmed. Do not buy, configure, or attach DNS yet.
3. **Clover (or equivalent)** — card giving is stubbed. Wire a real checkout URL only when one exists.
4. **Public email / phone** — confirm `brian@brholdingcompany.com` (or a foundation inbox) before printing it everywhere.
5. **Hosting** — choose a host after the domain is decided. This repo is Vite/static and can deploy as a static site.
6. **Assets** — official flyer PDF/PNG, partner logos, and a real favicon/og image.
7. **Indexing** — `index.html` and `public/robots.txt` currently say `noindex`. Remove that only at public launch.
8. **Legal pass** — tax language, EIN, and board names should get a final check.

## Repo notes

Single-page site (`src/App.tsx`) with anchored sections: Range Day, What We Do, Board, Donate.

Contact and mailto helpers live in `src/site.ts` so go-live changes stay in one file.
