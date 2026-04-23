import React, { useState } from 'react';

export default function ResidencesSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="residences" className="residences" data-palette="sage">
      <div className="residences-inner">
        <div className="residences-visual" data-reveal="fade">
          <div className="res-card">
            <div className="res-card-head">
              <div className="res-card-eyebrow">For residents</div>
              <div className="res-card-stamp">INTEREST LIST</div>
            </div>

            <div className="res-hero-line">
              <span>Live above</span>
              <em>the marketplace</em>
            </div>

            <p className="res-body">
              We're exploring a small number of homes on the upper floors of the Landmark building — part of the broader restoration of this corner. Details are still taking shape; we're keeping an informal list of neighbors and prospective residents who want to hear first.
            </p>

            <ul className="res-list">
              <li>
                <span className="res-list-num">01</span>
                <div>
                  <div className="res-list-title">Steps from the marketplace</div>
                  <div className="res-list-sub">Restaurants, shops and services just downstairs.</div>
                </div>
              </li>
              <li>
                <span className="res-list-num">02</span>
                <div>
                  <div className="res-list-title">A preserved Victorian block</div>
                  <div className="res-list-sub">One of America's largest preservation districts.</div>
                </div>
              </li>
              <li>
                <span className="res-list-num">03</span>
                <div>
                  <div className="res-list-title">Between downtown &amp; UofL</div>
                  <div className="res-list-sub">Ten minutes either direction by car or bus.</div>
                </div>
              </li>
            </ul>

            <div className="res-foot">
              <span>No listings yet.</span>
              <span className="dot">·</span>
              <span>We'll share details as soon as they're ready.</span>
            </div>
          </div>
        </div>

        <div>
          <div className="section-eyebrow">In development</div>
          <h2 className="section-title" data-reveal="words" data-reveal-mode="slice">
            Residences, arriving at the Landmark.
          </h2>
          <div className="residences-soon" data-reveal style={{ '--d': '0.3s' }}>Coming soon</div>
          <p className="residences-copy" data-reveal style={{ '--d': '0.4s' }}>
            A small number of homes above the marketplace — thoughtfully restored, steps from everything. Join the interest list and we'll share floorplans and availability first.
          </p>
          {submitted ? (
            <form className="email-form" data-reveal style={{ '--d': '0.5s' }}>
              <span style={{ padding: '14px 0', color: 'var(--accent)' }}>
                Thank you — we'll be in touch.
              </span>
            </form>
          ) : (
            <form
              className="email-form"
              data-reveal
              style={{ '--d': '0.5s' }}
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            >
              <input type="email" placeholder="your@email.com" required />
              <button type="submit">Notify me →</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
