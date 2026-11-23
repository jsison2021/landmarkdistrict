import data from '@/data/shops.json';

export type ShopCategory = 'restaurants' | 'retail' | 'services';

export type Shop = {
  id: string;
  name: string;
  logo: string;
  address: string;
  website?: string;
  phone?: string;
  category: ShopCategory;
};

export const shops = data.shops as Shop[];

export const CATEGORIES: { id: ShopCategory; label: string; noun: string }[] = [
  { id: 'restaurants', label: 'Restaurants', noun: 'a restaurant' },
  { id: 'retail', label: 'Retail', noun: 'a shop' },
  { id: 'services', label: 'Services', noun: 'a local business' },
];

export const categoryOf = (id: ShopCategory) => CATEGORIES.find((c) => c.id === id)!;

export const getShop = (id: string) => shops.find((s) => s.id === id);

export const shopPath = (s: Shop) => `/shops/${s.id}`;

export const telHref = (phone: string) => 'tel:' + phone.replace(/[^0-9]/g, '');

export const directionsUrl = (s: Shop) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${s.name}, ${s.address}`)}`;

export const websiteLabel = (url: string) => {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '');
  } catch {
    return url;
  }
};

// "414 W Oak St, Louisville, KY 40203" becomes "414 W Oak St"; addresses without a street return null.
export const streetOf = (address: string) => {
  const parts = address.split(',').map((p) => p.trim());
  return parts.length > 2 ? parts.slice(0, -2).join(', ') : null;
};
