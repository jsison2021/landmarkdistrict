import { shops, type Shop } from '@/lib/shops';
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from '@/lib/site';

export const toE164 = (phone: string) => {
  const d = phone.replace(/\D/g, '');
  return `+1-${d.slice(0, 3)}-${d.slice(3, 6)}-${d.slice(6)}`;
};

// Shop addresses are stored as "Street, Louisville, KY 40203"; the street part is optional in the data.
export function postalAddress(address: string) {
  const parts = address.split(',').map((p) => p.trim());
  const [state, zip] = (parts.at(-1) ?? '').split(/\s+/);
  const city = parts.at(-2) ?? 'Louisville';
  const street = parts.length > 2 ? parts.slice(0, -2).join(', ') : undefined;
  return {
    '@type': 'PostalAddress',
    ...(street && { streetAddress: street }),
    addressLocality: city,
    addressRegion: state,
    postalCode: zip,
    addressCountry: 'US',
  };
}

export const TENANT_TYPE: Record<Shop['category'], string> = {
  restaurants: 'Restaurant',
  retail: 'Store',
  services: 'LocalBusiness',
};

export function siteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: SITE_NAME,
        inLanguage: 'en-US',
      },
      {
        '@type': 'ShoppingCenter',
        '@id': `${SITE_URL}/#place`,
        name: SITE_NAME,
        alternateName: 'Landmark District',
        description: SITE_DESCRIPTION,
        url: `${SITE_URL}/`,
        image: `${SITE_URL}/opengraph-image.png`,
        logo: `${SITE_URL}/icon.png`,
        telephone: toE164('(502) 653-7251'),
        address: {
          '@type': 'PostalAddress',
          streetAddress: '1167 S 4th St',
          addressLocality: 'Louisville',
          addressRegion: 'KY',
          postalCode: '40203',
          addressCountry: 'US',
        },
        geo: { '@type': 'GeoCoordinates', latitude: 38.235, longitude: -85.7603667 },
        hasMap: 'https://www.google.com/maps?q=38.235,-85.7603667',
        containedInPlace: { '@type': 'Place', name: 'Old Louisville, Louisville, Kentucky' },
        containsPlace: shops.map((s) => ({
          '@type': TENANT_TYPE[s.category],
          '@id': `${SITE_URL}/shops/${s.id}#business`,
          name: s.name,
          url: `${SITE_URL}/shops/${s.id}`,
          image: `${SITE_URL}${s.logo}`,
          address: postalAddress(s.address),
          ...(s.phone && { telephone: toE164(s.phone) }),
          ...(s.website && { sameAs: [s.website] }),
        })),
      },
    ],
  };
}

export function tenantJsonLd(s: Shop) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': TENANT_TYPE[s.category],
        '@id': `${SITE_URL}/shops/${s.id}#business`,
        name: s.name,
        url: `${SITE_URL}/shops/${s.id}`,
        image: `${SITE_URL}${s.logo}`,
        address: postalAddress(s.address),
        ...(s.phone && { telephone: toE164(s.phone) }),
        ...(s.website && { sameAs: [s.website] }),
        containedInPlace: { '@type': 'ShoppingCenter', '@id': `${SITE_URL}/#place`, name: SITE_NAME },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: SITE_NAME, item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Marketplace', item: `${SITE_URL}/#marketplace` },
          { '@type': 'ListItem', position: 3, name: s.name, item: `${SITE_URL}/shops/${s.id}` },
        ],
      },
    ],
  };
}
