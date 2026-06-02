import { createClient } from 'next-sanity';
import { createImageUrlBuilder } from '@sanity/image-url';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
                  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-sanity-project-id'
                  ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
                  : 'placeholder'; // Alphanumeric only, avoids sanity client validation errors

export const client = createClient({
  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03',
  useCdn: false, // Set to false to bypass CDN caching and fetch fresh content instantly
});

const builder = createImageUrlBuilder(client);

export function urlFor(source) {
  if (!source) return '';
  return builder.image(source);
}
