import errorsData from '../data/errors.json';
import { client } from '../lib/sanity';

export default async function sitemap() {
  const baseUrl = "https://errorfixer.toolsofsaas.com";

  // Static routes
  const staticRoutes = [
    '',
    '/about-us',
    '/affiliate-disclosure',
    '/contact-us',
    '/privacy-policy',
    '/terms-and-conditions',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' || route === '/blog' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic HTTP Error pages
  const dynamicRoutes = errorsData.map((error) => ({
    url: `${baseUrl}/${error.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  // Dynamic Blog pages from Sanity
  let blogRoutes = [];
  try {
    const isProjectIdConfigured = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
                                  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-sanity-project-id';
    if (isProjectIdConfigured) {
      const posts = await client.fetch(`*[_type == "post"] { "slug": slug.current, publishedAt }`);
      if (Array.isArray(posts)) {
        blogRoutes = posts.map((post) => ({
          url: `${baseUrl}/blog/${post.slug}`,
          lastModified: post.publishedAt ? new Date(post.publishedAt).toISOString() : new Date().toISOString(),
          changeFrequency: 'weekly',
          priority: 0.8,
        }));
      }
    }
  } catch (error) {
    console.error("Error fetching Sanity blogs for sitemap:", error);
  }

  return [...staticRoutes, ...dynamicRoutes, ...blogRoutes];
}

