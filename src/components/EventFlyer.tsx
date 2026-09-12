import { CONTACT_EMAIL } from "../site";
import Seal from "./Seal";

export default function EventFlyer() {
  return (
    <aside className="flyer" aria-label="Austin Veterans Range Day flyer placeholder">
      <div className="flyer-top">
        <span>Benefit · Fund raiser · Supporting mental health day</span>
        <span>Those who serve</span>
      </div>
      <div className="flyer-body">
        <div className="flyer-title-row">
          <h3 className="flyer-title">
            The Austin
            <br />
            Veterans
            <br />
            <span className="accent-line">Range Day</span>
          </h3>
          <Seal />
        </div>
        <p className="flyer-blurb">
          Veterans · First responders · Construction · Allies — one day on the
          range for the men and women who serve.
        </p>
        <div className="flyer-meta">
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
              Top Shot
              <br />
              Texas
              <br />
              Rockdale, TX
            </div>
          </div>
          <div>
            <span className="meta-label">Who it helps</span>
            <div className="meta-value">
              Gunny’s
              <br />
              Warriors
              <br />& CVRS
            </div>
          </div>
        </div>
        <div className="flyer-prices">
          <div>
            <span className="meta-label">Spectating</span>
            <div className="price-amount">$50</div>
          </div>
          <div className="featured">
            <span className="meta-label">Team shooting</span>
            <div className="price-amount">$500</div>
            <p className="price-note">Limited spots — first come, first served.</p>
          </div>
        </div>
        <div className="flyer-includes">
          Raffle & door prizes · Food & drinks · Bring your own gear
        </div>
        <div className="flyer-partners">
          <div className="partner">
            <span className="mark">Gunny’s Warriors</span>
            <span>Peer support and outdoor programs for combat veterans.</span>
          </div>
          <div className="partner">
            <span className="mark">CVRS</span>
            <span>Recovery and mental-health resources for first responders.</span>
          </div>
        </div>
        <div className="flyer-foot">
          <div>
            Sponsorships & team registration
            <br />
            {CONTACT_EMAIL}
          </div>
          <div>
            Top Shot Texas
            <br />
            Rockdale · Texas
          </div>
        </div>
      </div>
      <p className="flyer-caption">Official event flyer · Share freely</p>
    </aside>
  );
}
