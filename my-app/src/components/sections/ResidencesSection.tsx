'use client';

import { useActionState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { joinResidencesList, type FormState } from '@/app/actions';

const initial: FormState = { status: 'idle' };

const POINTS = [
  { title: 'Steps from the marketplace', sub: 'Restaurants, shops and services just downstairs.' },
  { title: 'A preserved Victorian block', sub: 'One of America’s largest preservation districts.' },
  { title: 'Between downtown & UofL', sub: 'Ten minutes either direction by car or bus.' },
];

export default function ResidencesSection() {
  const [state, action, pending] = useActionState(joinResidencesList, initial);

  return (
    <section id="residences" className="residences" data-theme="dark">
      <div className="residences-inner">
        <div className="residences-main">
          <div className="section-eyebrow"><span className="section-num">02</span>In development</div>
          <h2 className="section-title" data-reveal="words">
            Residences, arriving at the Landmark.
          </h2>
          <div className="residences-soon" data-reveal style={{ '--d': '0.2s' }}>
            <span className="status-dot" aria-hidden="true" />
            Coming soon
          </div>
          <p className="section-lede" data-reveal style={{ '--d': '0.25s' }}>
            A small number of homes above the marketplace, thoughtfully restored and steps from everything. Join the interest list and we&apos;ll share floorplans and availability first.
          </p>
          {state.status === 'success' ? (
            <div className="email-form email-thanks" role="status">
              <Check aria-hidden="true" size={18} strokeWidth={2} />
              Thank you. We&apos;ll be in touch.
            </div>
          ) : (
            <>
              <form className="email-form" action={action} data-reveal style={{ '--d': '0.3s' }}>
                <p hidden>
                  <label>Leave this empty: <input name="company_website" tabIndex={-1} autoComplete="off" /></label>
                </p>
                <label className="sr-only" htmlFor="residences-email">Email address</label>
                <input id="residences-email" type="email" name="email" placeholder="your@email.com" autoComplete="email" required />
                <button type="submit" disabled={pending}>
                  {pending ? 'Sending…' : 'Notify me'}
                  {!pending && <ArrowRight aria-hidden="true" size={18} strokeWidth={1.75} />}
                </button>
              </form>
              {state.status === 'error' && (
                <div className="form-error" role="alert">{state.message}</div>
              )}
            </>
          )}
        </div>

        <aside className="res-sheet" data-reveal style={{ '--d': '0.1s' }} aria-label="About the residences">
          <div className="res-sheet-head">
            <span>For residents</span>
            <span className="res-stamp">Interest list</span>
          </div>

          <p className="res-hero-line">
            Live above <em>the marketplace</em>
          </p>

          <p className="res-body">
            We&apos;re exploring a small number of homes on the upper floors of the Landmark building, part of the broader restoration of this corner. Details are still taking shape, and we&apos;re keeping an informal list of neighbors and prospective residents who want to hear first.
          </p>

          <ol className="res-list">
            {POINTS.map((p, i) => (
              <li key={p.title}>
                <span className="res-list-num">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div className="res-list-title">{p.title}</div>
                  <div className="res-list-sub">{p.sub}</div>
                </div>
              </li>
            ))}
          </ol>

          <div className="res-foot">
            <span>No listings yet.</span>
            <span>We&apos;ll share details as soon as they&apos;re ready.</span>
          </div>
        </aside>
      </div>
    </section>
  );
}
