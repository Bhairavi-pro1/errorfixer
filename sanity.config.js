import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './sanity/schemaTypes';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
                  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-sanity-project-id'
                  ? process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
                  : 'placeholder'; // Fallback to pass initial build checks if not configured yet

export default defineConfig({
  name: 'default',
  title: 'ErrorFixer Blog Studio',

  projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath: '/studio',

  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
});
