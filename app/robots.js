export default function robots() {
  const baseUrl = "https://errorfixer.toolsofsaas.com";

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/studio', '/studio/'],
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'CCBot', 'Omgilibot', 'FacebookBot'],
        allow: '/',
        disallow: ['/studio', '/studio/'],
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}