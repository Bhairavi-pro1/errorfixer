export default function robots() {
  const baseUrl = "https://www.errorfixer.toolsofsaas.com";

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: ['GPTBot', 'Google-Extended', 'CCBot', 'Omgilibot', 'FacebookBot'],
        allow: '/',
      }
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
