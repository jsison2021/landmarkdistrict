import Link from 'next/link';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import { CONTACT, LEGAL_LINKS, LEGAL_UPDATED } from '@/lib/legal';

type Props = {
  title: string;
  lede: string;
  current: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, lede, current, children }: Props) {
  return (
    <>
      <Navigation />
      <main id="main" tabIndex={-1}>
        <section className="legal-hero" data-theme="dark">
          <div className="legal-inner">
            <p className="legal-eyebrow">Last updated {LEGAL_UPDATED}</p>
            <h1 className="legal-title">{title}</h1>
            <p className="legal-lede">{lede}</p>
          </div>
        </section>

        <section className="legal-body" data-theme="light">
          <div className="legal-inner legal-grid">
            <nav className="legal-nav" aria-label="Legal pages">
              <ul>
                {LEGAL_LINKS.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} aria-current={l.href === current ? 'page' : undefined}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <article className="legal-prose">
              {children}
              <h2>Contact us</h2>
              <p>
                Questions about this page can go to us by phone at{' '}
                <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>, through the{' '}
                <Link href="/#contact">contact form</Link>, or by mail:
              </p>
              <address>
                {CONTACT.mailing.map((line) => (
                  <span key={line}>{line}<br /></span>
                ))}
              </address>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
