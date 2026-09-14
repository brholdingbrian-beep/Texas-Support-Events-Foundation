/** Staging contact inbox. Do not print the holding-company domain in UI copy. */
export const CONTACT_EMAIL = "brian@brholdingcompany.com";
export const CONTACT_LABEL = "Email the foundation";

export const ORG = {
  name: "Texas Support Events Foundation",
  ein: "42-4918000",
  status: "501(c)(3) nonprofit organization",
  city: "Austin, Texas",
  tagline: "Benefit events for Central Texas nonprofits.",
};

/**
 * Soft-launch origin for absolute OG / Twitter image URLs.
 * Default assumes GitHub Pages project URL after Pages is enabled.
 * If you deploy on Vercel instead, set this to the *.vercel.app origin.
 * Do not attach a custom domain.
 */
export const SITE_ORIGIN =
  "https://brholdingbrian-beep.github.io/Texas-Support-Events-Foundation";

export const OG_IMAGE_PATH = "/tsef-b-banner.png";
export const OG_IMAGE_ABS = `${SITE_ORIGIN}${OG_IMAGE_PATH}`;

export const assets = {
  wordmark: `${import.meta.env.BASE_URL}brand/tsef-logo-official.png`,
  badge: `${import.meta.env.BASE_URL}brand/tsef-b-badge-only.png`,
  banner: `${import.meta.env.BASE_URL}tsef-b-banner.png`,
};

/**
 * Donate / give CTAs use mailto until a real hosted checkout exists.
 *
 * CLOVER HOOK — when Brian has an approved Clover (or other) donation URL:
 * 1. Set DONATE_URL to that https URL (do not invent one).
 * 2. Primary Donate / "give" buttons already read DONATE_URL ?? mailto.
 * 3. Keep a mailto fallback for checks, sponsor packets, and questions.
 * 4. Update the “goes live shortly” sentence once card giving is actually live.
 */
export const DONATE_URL: string | null = null;

export function mailTo(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
}

export const links = {
  donate: DONATE_URL ?? mailTo(
    "Donation to Texas Support Events Foundation",
    "I would like to make a gift to Texas Support Events Foundation.\n\nName:\nPreferred contact:\nGift amount (optional):\n",
  ),
  reserve: mailTo(
    "Reserve a spot — Austin Veterans Range Day",
    "I would like to reserve a spot for Austin Veterans Range Day on Saturday, Oct 10, 2026 at Top Shot Texas, Rockdale, TX.\n\nName:\nNumber of people:\nSpectating ($50/person) or team shooting ($500):\n",
  ),
  sponsorPacket: mailTo(
    "Request sponsor packet — Austin Veterans Range Day",
    "Please send the sponsor packet for Austin Veterans Range Day.\n\nName:\nBusiness (if applicable):\n",
  ),
  give: DONATE_URL ?? mailTo(
    "I would like to give",
    "I would like to support Texas Support Events Foundation.\n\nName:\nPreferred way to give:\n",
  ),
  sponsorBusiness: mailTo(
    "Business sponsorship — Texas Support Events Foundation",
    "I am interested in sponsoring as a business.\n\nBusiness name:\nContact:\n",
  ),
};
