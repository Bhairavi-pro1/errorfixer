import errorsData from '../data/errors.json';

export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  const staticRoutes = [
    '',
    '/about-us',
    '/affiliate-disclosure',
    '/contact-us',
    '/privacy-policy',
    '/terms-and-conditions',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  const dynamicRoutes = errorsData.map((error) => ({
    url: `${baseUrl}/${error.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  return [...staticRoutes, ...dynamicRoutes];
}
