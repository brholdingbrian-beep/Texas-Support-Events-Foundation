import EventFlyer from "./components/EventFlyer";
import Header from "./components/Header";
import { CONTACT_LABEL, ORG, assets, links } from "./site";

const work = [
  {
    title: "Plan.",
    body: "Venue, date, permits, run-of-show, and the logistics timeline that keeps an event on schedule instead of on fire.",
  },
  {
    title: "Develop.",
    body: "Shaping the event itself — format, ticket tiers, revenue model, and the fundraising target it has to clear to be worth doing.",
  },
  {
    title: "Market.",
    body: "Flyers, listings, and outreach that put the event in front of the people most likely to show up, bring a team, and give.",
  },
  {
    title: "Sponsor.",
    body: "Recruiting the local businesses and trade partners who underwrite the day before a single ticket is sold.",
  },
  {
    title: "Staff.",
    body: "Our members work the event itself, so the nonprofit’s own people stay free to do the one thing only they can — talk to donors.",
  },
];

const board = [
  { role: "President", name: "Brian Reynolds" },
  { role: "Secretary", name: "Eric Freemen" },
  { role: "Treasurer", name: "Amy Hoover" },
];

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="chrome">
        <div className="staging-banner">
          Staging — not a public site. Card giving is not live.
        </div>
        <Header />
      </div>
      <main id="main">
        <section className="hero" id="top">
          <div className="wrap">
            <p className="eyebrow">501(c)(3) nonprofit · Central Texas</p>
            <h1 className="hero-title">
              We build the
              <br />
              events that
              <br />
              <span className="accent-line">fund the mission.</span>
            </h1>
            <p className="lede">
              Texas Support Events Foundation plans, develops, markets, and
              staffs benefit events for other nonprofits — and brings the
              sponsors with us. Small organizations doing real work rarely have
              the people to run a fundraiser. That is the part we handle.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="#donate">
                Donate
              </a>
              <a className="btn btn-ghost" href="#range-day">
                See our next event
              </a>
            </div>
          </div>
        </section>

        <section className="section" id="range-day">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">Next event</h2>
              <p className="section-kicker">
                One day on the range for veterans, first responders, construction
                crews, and the people who stand with them.
              </p>
            </div>
            <div className="event-grid">
              <EventFlyer />
              <div className="event-copy">
                <p className="eyebrow">Benefit · Fundraiser · Mental health day</p>
                <h3 className="event-copy-title">
                  The Austin
                  <br />
                  Veterans
                  <br />
                  <span className="accent-line">Range Day</span>
                </h3>
                <p className="reg-status" role="status">
                  Registration open — reserve by email
                </p>
                <p>
                  Veterans, first responders, construction, and allies — one day
                  on the range for the men and women who serve.
                </p>
                <div className="meta-grid">
                  <div>
                    <span className="meta-label">When</span>
                    <div className="meta-value">
                      Saturday
                      <br />
                      Oct 10, 2026
                    </div>
                  </div>
                  <div>
                    <span className="meta-label">Where</span>
                    <div className="meta-value">
                      Top Shot Texas
                      <br />
                      Rockdale, TX
                    </div>
                  </div>
                  <div>
                    <span className="meta-label">Who it helps</span>
                    <div className="meta-value">
                      Gunny’s Warriors
                      <br />& CVRS
                    </div>
                  </div>
                </div>
                <div className="price-row">
                  <div className="price-card">
                    <span className="meta-label">Spectating</span>
                    <div className="price-amount">$50</div>
                    <p className="price-note">Per person</p>
                  </div>
                  <div className="price-card featured">
                    <span className="meta-label">Team shooting</span>
                    <div className="price-amount">$500</div>
                    <p className="price-note">Limited spots — first come, first served.</p>
                  </div>
                </div>
                <p className="includes">
                  Raffle & door prizes · Food & drinks · Bring your own gear
                </p>
                <div className="partners">
                  <div className="partner">
                    <span className="mark">Gunny’s Warriors</span>
                    <span>Peer support and outdoor programs for combat veterans.</span>
                  </div>
                  <div className="partner">
                    <span className="mark">CVRS</span>
                    <span>
                      Recovery and mental-health resources for first responders.
                    </span>
                  </div>
                </div>
                <div className="rule-line" />
                <p className="subhead">Sponsorships & team registration</p>
                <div className="cta-row">
                  <a className="btn btn-primary" href={links.reserve}>
                    Reserve a spot
                  </a>
                  <a className="btn btn-ghost" href={links.sponsorPacket}>
                    Request sponsor packet
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="what-we-do">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">What we do</h2>
              <p className="section-kicker">
                A nonprofit partner brings the cause. We bring everything it
                takes to turn a date on the calendar into money in their account.
              </p>
            </div>
            <div className="work-grid">
              {work.map((item) => (
                <article className="work-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="season" id="season" aria-labelledby="season-title">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title" id="season-title">
                The 2026 season
              </h2>
              <p className="section-kicker">
                Our first season. These figures are the ones we can stand behind
                today — totals raised will be published here once Range Day is
                settled.
              </p>
            </div>
            <div className="stats">
              <div className="stat">
                <span className="stat-label">Events in production</span>
                <div className="stat-value">01</div>
              </div>
              <div className="stat">
                <span className="stat-label">Organizations supported</span>
                <div className="stat-value">02</div>
              </div>
              <div className="stat">
                <span className="stat-label">Next event day</span>
                <div className="stat-value">
                  Oct 10<span className="year-mark">’26</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="board">
          <div className="wrap">
            <div className="section-head">
              <h2 className="section-title">Board of directors</h2>
            </div>
            <div className="board-grid">
              {board.map((member) => (
                <article className="board-card" key={member.role}>
                  <span className="role">{member.role}</span>
                  <h3>{member.name}</h3>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="donate">
          <div className="wrap support-grid">
            <div>
              <p className="eyebrow">Support the work</p>
              <h2 className="support-title">
                Every dollar
                <br />
                goes to the
                <br />
                next event.
              </h2>
              <p className="lede">
                A gift to Texas Support Events Foundation pays for the range, the
                permits, the printing, and the people it takes to put on a
                benefit — so that the nonprofits we work with can spend their
                own money on their mission instead of on a fundraiser.
              </p>
              <p className="lede">
                Giving online by card goes live shortly. Until then, email us
                and we will get you set up directly.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href={links.give}>
                  Email us to give
                </a>
                <a className="btn btn-ghost" href={links.sponsorBusiness}>
                  Sponsor as a business
                </a>
              </div>
            </div>
            <aside className="legal-card">
              <dl>
                <div className="legal-item">
                  <dt>Legal name</dt>
                  <dd>{ORG.name}</dd>
                </div>
                <div className="legal-item">
                  <dt>EIN</dt>
                  <dd>{ORG.ein}</dd>
                </div>
                <div className="legal-item">
                  <dt>Status</dt>
                  <dd>{ORG.status}</dd>
                </div>
                <div className="legal-item">
                  <dt>Contact</dt>
                  <dd>
                    <a href={links.give}>{CONTACT_LABEL}</a>
                  </dd>
                </div>
              </dl>
              <p className="legal-note">
                Texas Support Events Foundation is a recognized 501(c)(3)
                nonprofit organization. Contributions are tax-deductible to the
                extent allowed by law. No goods or services are provided in
                exchange for a cash contribution unless stated at the time of
                the gift.
              </p>
            </aside>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <div className="wrap footer-grid">
          <div className="footer-brand">
            <img
              className="footer-badge"
              src={assets.badge}
              alt=""
              width={72}
              height={72}
            />
            <div>
              <p className="footer-name">{ORG.name}</p>
              <p className="footer-copy">{ORG.tagline}</p>
              <p className="footer-copy">{ORG.city}</p>
            </div>
          </div>
          <div>
            <span className="footer-label">Contact</span>
            <a href={links.give}>{CONTACT_LABEL}</a>
          </div>
          <div>
            <span className="footer-label">Nonprofit</span>
            <p className="footer-copy">
              501(c)(3) · EIN {ORG.ein}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
