import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/legal/LegalPage';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Cookie Policy | ${SITE_NAME}`,
  description: `${SITE_NAME} does not set cookies of its own. Here is the one third-party service that may.`,
  alternates: { canonical: '/cookies' },
};

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      current="/cookies"
      lede="Short version: this website does not set cookies of its own, and it does not use analytics or advertising trackers."
    >
      <h2>Cookies we set</h2>
      <p>
        None. landmarkdistrict.com does not place cookies on your device, and it does not use similar technologies such
        as local storage, tracking pixels or device fingerprinting. That is why you do not see a cookie banner here.
      </p>

      <h2>Third-party services</h2>
      <h3>Google Maps</h3>
      <p>
        The Location section on the home page shows an interactive map provided by Google. When the map loads, your
        browser connects to Google, which receives technical information such as your IP address and may set or read
        cookies on Google&rsquo;s own domains. Google handles that information under its{' '}
        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer">
          privacy policy<span className="sr-only"> (opens in a new tab)</span>
        </a>{' '}
        and explains{' '}
        <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer">
          how it uses information from sites that use its services<span className="sr-only"> (opens in a new tab)</span>
        </a>
        . The map loads only when you scroll near the Location section. Tenant pages do not load it.
      </p>
      <h3>Hosting</h3>
      <p>
        Our hosting provider, Vercel, processes technical information such as your IP address to deliver pages
        securely. It does not set cookies on this site for us.
      </p>

      <h2>Your choices</h2>
      <p>
        You can block or delete cookies, including Google&rsquo;s, in your browser settings. The rest of the site works
        normally if you do. The address and directions links work without the interactive map.
      </p>

      <h2>Changes</h2>
      <p>
        If we ever add analytics or other cookies, we will update this page first and ask for your consent where the
        law requires it. See our <Link href="/privacy">Privacy Policy</Link> for more about how we handle information.
      </p>
    </LegalPage>
  );
}
