import Link from 'next/link';

export default function Breadcrumbs({ error }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6 overflow-x-auto pb-2 whitespace-nowrap">
      <ol className="flex items-center space-x-2 text-sm text-on-surface-variant font-medium">
        <li>
          <Link href="/" className="hover:text-primary transition-colors flex items-center">
            <svg className="w-4 h-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
        </li>
        <li><span className="text-outline-variant">/</span></li>
        <li>
          <Link href={`/?category=${error.category}`} className="hover:text-primary transition-colors">
            {error.category} Errors
          </Link>
        </li>
        <li><span className="text-outline-variant">/</span></li>
        <li className="text-foreground font-semibold" aria-current="page">
          {error.code} {error.title}
        </li>
      </ol>
    </nav>
  );
}
