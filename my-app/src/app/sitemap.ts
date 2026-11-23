import type { MetadataRoute } from 'next';
import { shopPath, shops } from '@/lib/shops';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    ...shops.map((s) => ({
      url: `${SITE_URL}${shopPath(s)}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ];
}
