import Link from 'next/link';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';
import { CATEGORIES as CATS, directionsUrl, shopPath, shops, telHref } from '@/lib/shops';

const pad = (n: number) => String(n).padStart(2, '0');

export default function ShopsSection() {
  return (
    <section id="marketplace" className="marketplace" data-theme="light">
      <div className="section-head">
        <div className="section-head-main">
          <div className="section-eyebrow"><span className="section-num">01</span>A curated collection</div>
          <h2 className="section-title" data-reveal="words">
            Twenty-one neighbors, <em>one address</em>.
          </h2>
        </div>
        <p className="section-lede" data-reveal style={{ '--d': '0.15s' }}>
          From a century-old cocktail bar to the corner laundromat, every tenant is independently operated and rooted in Old Louisville. Browse the marketplace by chapter.
        </p>
      </div>

      <nav className="category-index" aria-label="Marketplace categories" data-reveal style={{ '--d': '0.2s' }}>
        {CATS.map((cat, i) => {
          const count = shops.filter(s => s.category === cat.id).length;
          return (
            <a key={cat.id} href={`#cat-${cat.id}`}>
              <span className="category-index-num">{pad(i + 1)}</span>
              <span className="category-index-label">{cat.label}</span>
              <span className="category-index-count">{pad(count)}</span>
            </a>
          );
        })}
      </nav>

      <div className="categories">
        {CATS.map((cat, ci) => {
          const items = shops.filter(s => s.category === cat.id);
          if (!items.length) return null;
          return (
            <div key={cat.id} id={`cat-${cat.id}`} className="category">
              <header className="category-head">
                <span className="category-num">{pad(ci + 1)}</span>
                <h3 className="category-name">{cat.label}</h3>
                <span className="category-count">{items.length} tenants</span>
              </header>
              <ul className="shop-grid">
                {items.map((s, i) => (
                  <li
                    key={s.id}
                    className="shop-card"
                    data-reveal=""
                    style={{ '--d': `${(i % 3) * 0.06}s` }}
                  >
                    <Link href={shopPath(s)} className="shop-plate shop-plate-link" tabIndex={-1} aria-hidden="true">
                      <img
                        className="shop-logo"
                        src={s.logo}
                        alt={`${s.name} logo`}
                        loading="lazy"
                        decoding="async"
                      />
                      <span className="shop-idx">№ {pad(i + 1)}</span>
                    </Link>
                    <div className="shop-body">
                      <h4 className="shop-name"><Link href={shopPath(s)}>{s.name}</Link></h4>
                      <p className="shop-addr">{s.address}</p>
                      <div className="shop-links">
                        {s.website && (
                          <a href={s.website} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${s.name} (opens in a new tab)`}>
                            Visit <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.75} />
                          </a>
                        )}
                        {s.phone && (
                          <a href={telHref(s.phone)} aria-label={`Call ${s.name} at ${s.phone}`}>
                            Call <Phone aria-hidden="true" size={14} strokeWidth={1.75} />
                          </a>
                        )}
                        {!s.website && !s.phone && (
                          <a href={directionsUrl(s)} target="_blank" rel="noopener noreferrer" aria-label={`Directions to ${s.name} (opens in a new tab)`}>
                            Directions <MapPin aria-hidden="true" size={14} strokeWidth={1.75} />
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
