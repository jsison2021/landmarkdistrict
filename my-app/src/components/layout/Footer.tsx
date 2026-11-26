import Link from 'next/link';
import { LEGAL_LINKS } from '@/lib/legal';

export default function Footer() {
  return (
    <footer className="signoff" data-theme="dark">
      <div className="signoff-wrap">
        <div className="signoff-copy">
          <span>© {new Date().getFullYear()} · Shops at Landmark District</span>
          <span>Est. 1910 · Old Louisville</span>
        </div>
        <div className="signoff-mark" aria-hidden="true">Landmark</div>
        <div className="signoff-copy">
          <span>Photographs · Archives of Old Louisville</span>
          <span>Site · Redesigned 2026</span>
        </div>
        <nav className="signoff-legal" aria-label="Legal">
          <ul>
            {LEGAL_LINKS.map((l) => (
              <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
            ))}
            <li><span>Equal Housing Opportunity</span></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
