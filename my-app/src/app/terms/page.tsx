import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/legal/LegalPage';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Terms of Use | ${SITE_NAME}`,
  description: `The terms that apply when you use landmarkdistrict.com, the website for ${SITE_NAME} in Old Louisville.`,
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      current="/terms"
      lede="These terms apply when you use landmarkdistrict.com. By using the site, you agree to them."
    >
      <h2>About this website</h2>
      <p>
        landmarkdistrict.com is operated by {SITE_NAME} (&ldquo;we,&rdquo; &ldquo;us&rdquo;) to share information about
        the property at 4th &amp; Oak in Old Louisville, its tenants, leasing and planned residences.
      </p>

      <h2>Tenant information</h2>
      <p>
        Each tenant listed on this site is an independently owned and operated business. We list tenant names,
        addresses, phone numbers and website links as a convenience. We do not guarantee that this information is
        current or complete, and we are not responsible for any tenant&rsquo;s products, services, prices, hours or
        conduct. Please contact tenants directly with questions about their businesses.
      </p>
      <p>
        Tenant names and logos are trademarks of their respective owners and appear here only to identify each tenant.
      </p>

      <h2>Leasing inquiries</h2>
      <p>
        Information about leasing is general and may change. Sending an inquiry does not create an offer, a
        reservation or any agreement. A lease exists only when a written lease is signed by both parties.
      </p>

      <h2>Residences</h2>
      <p>
        Residences at the Landmark building are in development. Descriptions are preliminary and may change, and
        nothing on this site is an offer to rent or sell a home. Joining the interest list does not reserve a unit or
        create any obligation for you or for us. We are committed to equal housing opportunity and do not discriminate
        on the basis of race, color, religion, sex, disability, familial status, national origin or any other status
        protected by law.
      </p>

      <h2>Using the site</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the site for any unlawful purpose or to send spam or false information through our forms;</li>
        <li>interfere with the site&rsquo;s operation or security, or try to access systems you are not authorized to use;</li>
        <li>copy or scrape the site&rsquo;s content in bulk for commercial use without our permission.</li>
      </ul>

      <h2>Our content</h2>
      <p>
        The site&rsquo;s design, text and graphics belong to us or to the people who licensed them to us, and are
        protected by copyright and other laws. Archival photographs are credited where they appear. You may view and
        share pages for personal, non-commercial purposes.
      </p>

      <h2>Links to other websites</h2>
      <p>
        The site links to tenant websites, social media pages and Google Maps. We do not control those sites and are
        not responsible for their content or practices.
      </p>

      <h2>Disclaimers</h2>
      <p>
        The site and its content are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of
        any kind, to the fullest extent permitted by law. We do not promise that the site will always be available or
        error-free.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we will not be liable for any indirect, incidental, special or
        consequential damages arising from your use of the site or your reliance on its content.
      </p>

      <h2>Privacy</h2>
      <p>
        Our <Link href="/privacy">Privacy Policy</Link> explains how we handle information you share with us.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the Commonwealth of Kentucky. Any dispute will be handled in the state
        or federal courts located in Jefferson County, Kentucky.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms from time to time. The date at the top shows when they last changed, and continuing
        to use the site means you accept the current version.
      </p>
    </LegalPage>
  );
}
