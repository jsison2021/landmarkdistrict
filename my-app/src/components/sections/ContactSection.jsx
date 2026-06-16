import React, { useState } from 'react';
import { submitNetlifyForm } from '../../utils/netlifyForm';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setSubmitting(true);
    setError(false);
    try {
      await submitNetlifyForm(form);
      setSubmitted(true);
    } catch (err) {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact" data-palette="charcoal">
      <div className="contact-inner">
        <div>
          <div className="section-eyebrow">Leasing &amp; press</div>
          <h3 data-reveal="words" data-reveal-mode="letters">
            Let's start a <em>conversation</em>.
          </h3>
          <div className="contact-details" data-reveal style={{ '--d': '0.25s' }}>
            <a href="tel:5026537251">+1 (502) 653 · 7251</a>
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
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            data-reveal
            style={{ '--d': '0.2s' }}
            onSubmit={onSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <p hidden>
              <label>Don't fill this out: <input name="bot-field" /></label>
            </p>
            <div className="contact-row">
              <div className="contact-field">
                <label>Name</label>
                <input type="text" name="name" required />
              </div>
              <div className="contact-field">
                <label>Email</label>
                <input type="email" name="email" required />
              </div>
            </div>
            <div className="contact-field">
              <label>Phone (optional)</label>
              <input type="tel" name="phone" />
            </div>
            <div className="contact-field">
              <label>Tell us about your interest</label>
              <textarea name="message" rows="4" />
            </div>
            {error && (
              <div style={{ color: 'var(--accent)', fontSize: '14px', marginBottom: '8px' }}>
                Something went wrong. Please try again or email us directly.
              </div>
            )}
            <button className="contact-submit" type="submit" disabled={submitting}>
              {submitting ? 'Sending…' : 'Send inquiry →'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
