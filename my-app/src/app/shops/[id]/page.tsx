import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, MapPin, Phone } from 'lucide-react';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import {
  categoryOf, directionsUrl, getShop, shopPath, shops, streetOf, telHref, websiteLabel,
} from '@/lib/shops';
import { SITE_NAME } from '@/lib/site';
import { tenantJsonLd } from '@/lib/structured-data';

type Props = { params: Promise<{ id: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return shops.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const shop = getShop((await params).id);
  if (!shop) return {};
  const where = streetOf(shop.address) ?? 'Shops at Landmark District';
  const title = `${shop.name} | ${SITE_NAME}, Old Louisville`;
  const details = ['Address', shop.phone && 'phone', shop.website && 'website'].filter(Boolean).join(', ');
  const description = `${shop.name} is ${categoryOf(shop.category).noun} at ${where} in Old Louisville, part of ${SITE_NAME} at 4th & Oak. ${details} and directions.`;
  return {
    title,
    description,
    alternates: { canonical: shopPath(shop) },
    openGraph: { type: 'website', url: shopPath(shop), title, description },
    twitter: { title, description },
  };
}

export default async function TenantPage({ params }: Props) {
  const shop = getShop((await params).id);
  if (!shop) notFound();

  const cat = categoryOf(shop.category);
  const neighbors = shops.filter((s) => s.category === shop.category && s.id !== shop.id);
  const jsonLd = JSON.stringify(tenantJsonLd(shop)).replace(/</g, '\\u003c');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
      <Navigation />
      <main id="main" tabIndex={-1}>
        <section className="tenant-hero" data-theme="dark">
          <div className="tenant-hero-inner">
            <nav className="tenant-crumbs" aria-label="Breadcrumb">
              <Link href="/#marketplace">Marketplace</Link>
              <span aria-hidden="true">/</span>
              <Link href={`/#cat-${cat.id}`}>{cat.label}</Link>
            </nav>

            <div className="tenant-hero-grid">
              <div className="tenant-hero-copy">
                <p className="tenant-kind">{cat.label} · Landmark District</p>
                <h1 className="tenant-name">{shop.name}</h1>
                <p className="tenant-addr">{shop.address}</p>
                <div className="tenant-actions">
                  <a className="btn btn-primary" href={directionsUrl(shop)} target="_blank" rel="noopener noreferrer">
                    Get directions<span className="sr-only"> (opens in a new tab)</span> <MapPin aria-hidden="true" size={18} strokeWidth={1.75} />
                  </a>
                  {shop.phone && (
                    <a className="btn btn-ghost" href={telHref(shop.phone)}>
                      Call {shop.phone} <Phone aria-hidden="true" size={16} strokeWidth={1.75} />
                    </a>
                  )}
                </div>
              </div>
              <div className="tenant-plate">
                <img src={shop.logo} alt={`${shop.name} logo`} className="tenant-logo" />
              </div>
            </div>
          </div>
        </section>

        <section className="tenant-details" data-theme="light">
          <div className="tenant-details-inner">
            <dl className="tenant-facts">
              <div>
                <dt>Address</dt>
                <dd>
                  <a href={directionsUrl(shop)} target="_blank" rel="noopener noreferrer">{shop.address}<span className="sr-only"> (opens in a new tab)</span></a>
                </dd>
              </div>
              {shop.phone && (
                <div>
                  <dt>Phone</dt>
                  <dd><a href={telHref(shop.phone)}>{shop.phone}</a></dd>
                </div>
              )}
              {shop.website && (
                <div>
                  <dt>Website</dt>
                  <dd>
                    <a href={shop.website} target="_blank" rel="noopener noreferrer">
                      {websiteLabel(shop.website)}<span className="sr-only"> (opens in a new tab)</span> <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.75} />
                    </a>
                  </dd>
                </div>
              )}
              <div>
                <dt>Category</dt>
                <dd><Link href={`/#cat-${cat.id}`}>{cat.label}</Link></dd>
              </div>
            </dl>

            <div className="tenant-about">
              <p className="tenant-about-lede">
                {shop.name} is one of {shops.length} independent tenants at {SITE_NAME}, the restored corner
                of 4th &amp; Oak in Old Louisville, between downtown Louisville and the University of Louisville.
              </p>
              <Link className="tenant-back" href="/#marketplace">
                <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.75} /> Back to the marketplace
              </Link>
            </div>
          </div>
        </section>

        {neighbors.length > 0 && (
          <section className="tenant-neighbors" data-theme="light" aria-labelledby="neighbors-title">
            <div className="tenant-neighbors-inner">
              <h2 id="neighbors-title" className="tenant-neighbors-title">
                More {cat.label.toLowerCase()} at <em>Landmark District</em>
              </h2>
              <ul className="tenant-neighbor-list">
                {neighbors.map((n) => (
                  <li key={n.id}>
                    <Link href={shopPath(n)} className="tenant-neighbor">
                      <span className="tenant-neighbor-plate">
                        <img src={n.logo} alt="" loading="lazy" decoding="async" />
                      </span>
                      <span className="tenant-neighbor-name">{n.name}</span>
                      <span className="tenant-neighbor-addr">{streetOf(n.address) ?? n.address}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}
