/** Staging contact — confirm public inbox before go-live. */
export const CONTACT_EMAIL = "brian@brholdingcompany.com";

export const ORG = {
  name: "Texas Support Events Foundation",
  ein: "42-4918000",
  status: "501(c)(3) nonprofit organization",
  city: "Austin, Texas",
  tagline: "Benefit events for Central Texas nonprofits.",
};

export function mailTo(subject: string, body?: string): string {
  const params = new URLSearchParams({ subject });
  if (body) params.set("body", body);
  return `mailto:${CONTACT_EMAIL}?${params.toString()}`;
}

export const links = {
  donate: mailTo(
    "Donation to Texas Support Events Foundation",
    "I would like to make a gift to Texas Support Events Foundation.\n\nName:\nPreferred contact:\nGift amount (optional):\n",
  ),
  reserve: mailTo(
    "Reserve a spot — Austin Veterans Range Day",
    "I would like to reserve a spot for Austin Veterans Range Day on Saturday, Oct. 10, 2026 at Top Shot Texas, Rockdale, TX.\n\nName:\nNumber of people:\nSpectating ($50/person) or team shooting ($500):\n",
  ),
  sponsorPacket: mailTo(
    "Request sponsor packet — Austin Veterans Range Day",
    "Please send the sponsor packet for Austin Veterans Range Day.\n\nName:\nBusiness (if applicable):\n",
  ),
  give: mailTo(
    "I would like to give",
    "I would like to support Texas Support Events Foundation.\n\nName:\nPreferred way to give:\n",
  ),
  sponsorBusiness: mailTo(
    "Business sponsorship — Texas Support Events Foundation",
    "I am interested in sponsoring as a business.\n\nBusiness name:\nContact:\n",
  ),
};
