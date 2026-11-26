import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/legal/LegalPage';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Privacy Policy | ${SITE_NAME}`,
  description: `How ${SITE_NAME} collects, uses and protects the information you share through landmarkdistrict.com.`,
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      current="/privacy"
      lede="We collect very little, we use it only to answer you, and we never sell it. Here is exactly what happens to information you share on landmarkdistrict.com."
    >
      <h2>Who we are</h2>
      <p>
        This website is operated by {SITE_NAME} (&ldquo;we,&rdquo; &ldquo;us&rdquo;), the property at 4th &amp; Oak in
        Old Louisville, Louisville, Kentucky. This policy covers landmarkdistrict.com and the emails we send from it.
      </p>

      <h2>Information we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li>
          <strong>Leasing and press inquiries.</strong> When you use the contact form, we receive your name, email
          address, your phone number if you choose to include it, and your message.
        </li>
        <li>
          <strong>Residences interest list.</strong> When you join the list, we receive your email address.
        </li>
      </ul>
      <h3>Information collected automatically</h3>
      <p>
        Our hosting provider keeps standard server logs, such as your IP address, browser type, the page you requested
        and the time of the request. These are used to run and secure the site.
      </p>
      <p>
        We do not use analytics, advertising trackers, tracking pixels or cookies of our own. See our{' '}
        <Link href="/cookies">Cookie Policy</Link> for the one third-party service, Google Maps, that may set cookies.
      </p>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to your inquiry and send you a confirmation that we received it.</li>
        <li>To tell people on the residences interest list about floorplans and availability.</li>
        <li>To operate, maintain and protect the website, including preventing spam and abuse.</li>
        <li>To meet legal obligations.</li>
      </ul>

      <h2>How we share it</h2>
      <p>
        We do not sell your personal information, and we do not share it for targeted advertising. We share it only
        with service providers that help us run the site, under their own privacy and security commitments:
      </p>
      <ul>
        <li><strong>Vercel</strong> hosts the website.</li>
        <li><strong>Resend</strong> delivers the emails sent from our forms.</li>
        <li><strong>Google</strong> provides the map in the Location section.</li>
      </ul>
      <p>
        We may also disclose information when required by law, to protect our rights or the safety of others, or as
        part of a sale or transfer of the property or business.
      </p>

      <h2>Links to other sites</h2>
      <p>
        Tenant listings link to tenants&rsquo; own websites and social pages, and directions links open Google Maps.
        Those sites are run by others, and their own privacy policies apply.
      </p>

      <h2>How long we keep it</h2>
      <p>
        We keep inquiries for as long as we need them to respond and to keep ordinary business records. We keep
        residences interest list emails until you ask to be removed or the list is no longer needed.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask us to tell you what information we have about you, to correct it, or to delete it, and you can
        leave the residences interest list at any time. Contact us using the details below and we will respond within
        45 days. Any marketing email we send will include a way to unsubscribe.
      </p>

      <h2>Children</h2>
      <p>
        This website is not directed to children under 13, and we do not knowingly collect their personal information.
        If you believe a child has sent us information, contact us and we will delete it.
      </p>

      <h2>Security</h2>
      <p>
        The site is served over an encrypted connection (HTTPS), and access to submitted information is limited to the
        people who need it. No method of transmission or storage is completely secure, but we take reasonable steps to
        protect what you share.
      </p>

      <h2>Do Not Track and Global Privacy Control</h2>
      <p>
        Because we do not track visitors across sites or sell personal information, there is nothing additional to
        switch off when your browser sends these signals.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If we change how we handle information, we will update this page and the date at the top.
      </p>
    </LegalPage>
  );
}
