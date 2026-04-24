import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://muslimrea.org';
  const now = new Date();

  const routes = [
    { url: '/', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/membership', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/chapters', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/councils', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/womens-alliance', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/events', priority: 0.8, changeFrequency: 'weekly' as const },
    { url: '/resources', priority: 0.7, changeFrequency: 'monthly' as const },
    { url: '/ethics', priority: 0.7, changeFrequency: 'yearly' as const },
    { url: '/contact', priority: 0.7, changeFrequency: 'yearly' as const },
    { url: '/privacy', priority: 0.4, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.4, changeFrequency: 'yearly' as const },
  ];

  return routes.map(r => ({
    url: `${base}${r.url}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
