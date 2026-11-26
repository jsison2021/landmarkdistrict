import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';
import { CONTACT, LEGAL_UPDATED } from '@/lib/legal';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Accessibility | ${SITE_NAME}`,
  description: `${SITE_NAME} is committed to a website everyone can use. Our accessibility standard, what we have done, and how to reach us.`,
  alternates: { canonical: '/accessibility' },
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility"
      current="/accessibility"
      lede="We want everyone to be able to find our tenants, ask about leasing and get to 4th & Oak, whatever device or assistive technology they use."
    >
      <h2>Our standard</h2>
      <p>
        We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA, the standard referenced by the
        U.S. Department of Justice for websites under the Americans with Disabilities Act.
      </p>

      <h2>What we have done</h2>
      <ul>
        <li>Clear page structure with headings, landmarks and descriptive page titles.</li>
        <li>Full keyboard access, a visible focus outline, and a &ldquo;Skip to main content&rdquo; link.</li>
        <li>Text and controls that meet WCAG color contrast requirements.</li>
        <li>Text alternatives for meaningful images, and labels on every form field.</li>
        <li>Layouts that work from small phones to large screens, and when text is enlarged.</li>
        <li>Animations that turn off when your device is set to reduce motion.</li>
        <li>Links that tell screen reader users when they open in a new tab.</li>
      </ul>
      <p>
        We test the site with automated accessibility tools and by hand with a keyboard at phone, tablet and desktop
        sizes. This page was last reviewed on {LEGAL_UPDATED}.
      </p>

      <h2>Known limitations</h2>
      <ul>
        <li>
          The interactive map is provided by Google and may not work well with every screen reader. The street address
          and a directions link are always listed next to it.
        </li>
        <li>
          Tenant websites and social media pages are run by the tenants or by other companies, and we cannot control
          their accessibility.
        </li>
      </ul>

      <h2>Tell us if something does not work</h2>
      <p>
        If you have trouble using any part of this website, or need information in another format, call us at{' '}
        <a href={CONTACT.phoneHref}>{CONTACT.phone}</a> or use the contact form. Tell us the page and what happened,
        and we will work to fix it and get you the information you need. We aim to respond within two business days.
      </p>
    </LegalPage>
  );
}
