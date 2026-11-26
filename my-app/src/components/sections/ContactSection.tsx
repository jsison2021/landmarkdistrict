'use client';

import { useActionState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, Phone } from 'lucide-react';
import { submitContact, type FormState } from '@/app/actions';

const initial: FormState = { status: 'idle' };

export default function ContactSection() {
  const [state, action, pending] = useActionState(submitContact, initial);

  return (
    <section id="contact" className="contact" data-theme="dark">
      <div className="contact-inner">
        <div className="contact-intro">
          <div className="section-eyebrow"><span className="section-num">04</span>Leasing &amp; press</div>
          <h2 className="section-title contact-title" data-reveal="words">
            Let&apos;s start a <em>conversation</em>.
          </h2>
          <div className="contact-details" data-reveal style={{ '--d': '0.2s' }}>
            <a className="contact-phone" href="tel:5026537251">
              <Phone aria-hidden="true" size={20} strokeWidth={1.5} />
              (502) 653-7251
            </a>
            <address className="contact-mail">
              Shops at Landmark District<br />
              Louisville Title Building<br />
              223 S 5th Street, Suite 262<br />
              Louisville, KY 40202
            </address>
          </div>
        </div>

        {state.status === 'success' ? (
          <div className="contact-form contact-thanks" role="status">
            <Check aria-hidden="true" size={22} strokeWidth={2} />
            Thank you. We&apos;ll be in touch soon.
          </div>
        ) : (
          <form className="contact-form" action={action} data-reveal style={{ '--d': '0.15s' }}>
            <p hidden>
              <label>Leave this empty: <input name="company_website" tabIndex={-1} autoComplete="off" /></label>
            </p>
            <div className="contact-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Name</label>
                <input id="contact-name" type="text" name="name" autoComplete="name" required />
              </div>
              <div className="contact-field">
                <label htmlFor="contact-email">Email</label>
                <input id="contact-email" type="email" name="email" autoComplete="email" required />
              </div>
            </div>
            <div className="contact-field">
              <label htmlFor="contact-phone">Phone (optional)</label>
              <input id="contact-phone" type="tel" name="phone" autoComplete="tel" />
            </div>
            <div className="contact-field">
              <label htmlFor="contact-message">Tell us about your interest</label>
              <textarea id="contact-message" name="message" rows={4} />
            </div>
            {state.status === 'error' && (
              <div className="form-error" role="alert">{state.message}</div>
            )}
            <button className="btn btn-primary contact-submit" type="submit" disabled={pending}>
              {pending ? 'Sending…' : 'Send inquiry'}
              {!pending && <ArrowRight aria-hidden="true" size={18} strokeWidth={1.75} />}
            </button>
            <p className="form-note">
              We use your details only to reply to you. See our <Link href="/privacy">Privacy Policy</Link>.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
