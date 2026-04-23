import React from 'react';
import { getShops } from '../../data';

const CATS = [
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'retail',      label: 'Retail' },
  { id: 'services',    label: 'Services' },
];

function telHref(phone) {
  if (!phone) return null;
  return 'tel:' + phone.replace(/[^0-9]/g, '');
}

export default function ShopsSection() {
  const shops = getShops();

  return (
    <section id="marketplace" className="marketplace" data-palette="ink">
      <div className="marketplace-head">
        <div>
          <div className="section-eyebrow">A curated collection</div>
          <h2 className="section-title" data-reveal="words" data-reveal-mode="blur">
            Twenty-one neighbors, <em>one address</em>.
          </h2>
        </div>
        <p className="intro-copy" data-reveal style={{ '--d': '0.2s' }}>
          From a century-old cocktail bar to the corner laundromat, every tenant is independently operated and rooted in Old Louisville. Browse the marketplace by chapter.
        </p>
      </div>

      <div id="marketplace-cats">
        {CATS.map(cat => {
          const items = shops.filter(s => s.category === cat.id);
          if (!items.length) return null;
          return (
            <div key={cat.id} className="category">
              <div className="category-head">
                <div className="category-name">{cat.label}</div>
              </div>
              <div className="shop-grid">
                {items.map((s, i) => (
                  <article
                    key={s.id}
                    className="shop-card"
                    data-reveal=""
                    style={{ '--d': `${(i % 4) * 0.08}s` }}
                  >
                    <div className="shop-card-idx">№ {String(i + 1).padStart(2, '0')}</div>
                    <div className="shop-logo-wrap">
                      <img
                        className="shop-logo"
                        src={s.logo}
                        alt={`${s.name} logo`}
                        loading="lazy"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                      />
                    </div>
                    <div>
                      <h4 className="shop-name">{s.name}</h4>
                      <div className="shop-addr">{s.address}</div>
                      <div className="shop-links">
                        {s.website && (
                          <a href={s.website} target="_blank" rel="noopener noreferrer">Visit ↗</a>
                        )}
                        {s.phone && (
                          <a href={telHref(s.phone)}>Call</a>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
