# Texas Support Events Foundation

Staging website for **Texas Support Events Foundation**, a 501(c)(3) nonprofit that plans, produces, and staffs benefit events for Central Texas organizations.

This is a **soft-launch / staging preview only**. Keep `noindex`. Do not point a public custom domain at it. Do not treat a github.io or Vercel URL as a public launch until Brian signs off.

Design reference: [Claude artifact](https://claude.ai/code/artifact/1d682452-1640-417b-abb1-7548d635acbe).

## Run locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # production build into dist/
npm run preview  # serve the built files locally
```

## Soft-launch URL after merge (no custom domain)

The stack is Vite → static files. Two temporary hosts are wired. Pick one. **Do not add a custom domain in either place.**

### GitHub Pages (default OG / share URL)

After this branch merges to `main`:

1. In the repo: **Settings → Pages**.
2. Source: **GitHub Actions** (not “Deploy from a branch”).
3. Leave **Custom domain** empty.
4. Merge to `main` (or run the **Deploy staging to GitHub Pages** workflow manually).
5. Soft URL: `https://brholdingbrian-beep.github.io/Texas-Support-Events-Foundation/`
6. Share image: `https://brholdingbrian-beep.github.io/Texas-Support-Events-Foundation/tsef-b-banner.png`

`vite.config.ts` sets `base` to `/Texas-Support-Events-Foundation/` only when `GITHUB_PAGES=true` (the workflow does this).

### Vercel (alternate)

1. Import this GitHub repo in Vercel (framework: Vite; output `dist`).
2. Do **not** add a domain.
3. Use the assigned `*.vercel.app` URL.
4. If Vercel is the live soft URL, change `SITE_ORIGIN` in `src/site.ts` and the `og:image` / `twitter:image` / `og:url` tags in `index.html` to that origin so share cards resolve.

`vercel.json` is already in the repo. No domain is configured.

## What is live vs placeholder

| Item | Status |
| --- | --- |
| Org name, EIN `42-4918000`, 501(c)(3) copy | Confirmed |
| Official TSEF wordmark (header) and badge (footer / favicon) | In `public/brand/` |
| OG / Twitter image `tsef-b-banner.png` | Absolute GitHub Pages URL in `index.html` |
| Next event: Austin Veterans Range Day — Sat, Oct 10, 2026 — Top Shot Texas, Rockdale, TX | Confirmed |
| Pricing: $50 spectating / $500 team shooting | Confirmed |
| Registration status | **Open — reserve by email** (mailto) |
| Board: Brian Reynolds (President), Eric Freemen (Secretary), Amy Hoover (Treasurer) | Shown as Freemen — confirm spelling before print |
| Visible contact | “Email the foundation” (no holding-company domain in the UI) |
| Event flyer graphic | CSS/HTML reconstruction (placeholder for designed print art) |
| Partner marks (Gunny’s Warriors, CVRS) | Text placeholders — do not invent art |
| Donate / reserve / sponsor CTAs | `mailto:` only. No payment processor |
| Card / Clover donations | **Not wired.** Hook is `DONATE_URL` in `src/site.ts` |
| Custom domain | **Not attached. Do not add one.** |
| Indexing | `noindex, nofollow` in `index.html` + `public/robots.txt` |

## TODO: Clover donation wiring

Do **not** invent a payment URL.

When Brian is ready:

1. Create the Clover (or other approved) donation / hosted checkout link.
2. Set `DONATE_URL` in `src/site.ts`. Donate / “Email us to give” already prefer that value over mailto.
3. Keep a mailto fallback for checks, sponsor packets, and questions.
4. Update the “goes live shortly” sentence once card giving is actually live.
5. Re-test the donate path on desktop and mobile before any public launch.

## Go-live blockers (do not skip)

1. **Brian OK** — a github.io / Vercel URL is still staging. No public launch until he reviews.
2. **Domain** — none is confirmed. Do not buy, configure, or attach DNS.
3. **Clover (or equivalent)** — card giving is stubbed. Wire a real checkout URL only when one exists.
4. **Public TSEF inbox** — mailto still points at the staging inbox in `src/site.ts`. The holding-company address is not printed. Replace with a foundation inbox before launch.
5. **Assets** — official flyer PDF/PNG and partner logos are still placeholders.
6. **Indexing** — keep `noindex` until public launch.
7. **Legal pass** — tax language, EIN, and board names (especially **Freemen** vs Freeman) should get a final check.
8. **Share cards** — after the first Pages or Vercel deploy, paste the soft URL into a debugger and confirm `tsef-b-banner.png` loads.

## Brand assets

Approved lockups live in `public/brand/`:

- `tsef-logo-official.png` / `.svg` — primary wordmark (header)
- `tsef-b-transparent.png` — same lockup, transparent ground
- `tsef-b-badge-only.png` / `tsef-b-badge.svg` — square/circle mark (footer, favicon)
- `tsef-b-banner.png` — OG / Twitter share image (also at `/tsef-b-banner.png`)

Regenerate rasters with `python3 scripts/build-brand-assets.py` (uses Archivo Black / OFL in `scripts/fonts/`).

## Repo notes

Single-page site (`src/App.tsx`) with anchored sections: Range Day, What We Do, Board, Donate.

Contact, donate hook, and asset paths live in `src/site.ts` so go-live changes stay in one file.
