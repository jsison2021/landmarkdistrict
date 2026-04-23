import React, { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="contact" data-palette="charcoal">
      <div className="contact-inner">
        <div>
          <div className="section-eyebrow">Leasing &amp; press</div>
          <h3 data-reveal="words" data-reveal-mode="letters">
            Let's start a <em>conversation</em>.
          </h3>
          <div className="contact-details" data-reveal style={{ '--d': '0.25s' }}>
            <a href="mailto:leasing@landmarkdistrict.com">leasing@landmarkdistrict.com</a>
            <a href="tel:5025555555">+1 (502) 555 · 5555</a>
          </div>
          <p className="footer-mail">
            Shops at Landmark District<br />
            Louisville Title Building<br />
            223 S 5th Street, Suite 262<br />
            Louisville, KY 40202
          </p>
        </div>

        {submitted ? (
          <div className="contact-form" data-reveal style={{ '--d': '0.2s' }}>
            <div style={{ padding: '20px 0', fontFamily: 'var(--font-display)', fontSize: '24px', color: 'var(--accent)' }}>
              Thank you — we'll be in touch soon.
            </div>
          </div>
        ) : (
          <form
            className="contact-form"
            data-reveal
            style={{ '--d': '0.2s' }}
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
          >
            <div className="contact-row">
              <div className="contact-field">
                <label>Name</label>
                <input type="text" required />
              </div>
              <div className="contact-field">
                <label>Email</label>
                <input type="email" required />
              </div>
            </div>
            <div className="contact-field">
              <label>Phone (optional)</label>
              <input type="tel" />
            </div>
            <div className="contact-field">
              <label>Tell us about your interest</label>
              <textarea rows="4" />
            </div>
            <button className="contact-submit" type="submit">Send inquiry →</button>
          </form>
        )}
      </div>
    </section>
  );
}
