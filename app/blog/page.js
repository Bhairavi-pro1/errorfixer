import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "../../lib/sanity";

const baseUrl = "https://www.errorfixer.toolsofsaas.com";

export const metadata = {
  title: "Engineering Blog – HTTP Errors, Fixes & API Best Practices | ErrorFixer",
  description: "Read the latest engineering articles on web standards, HTTP error troubleshooting, REST APIs, security, and developer productivity.",
  openGraph: {
    title: "Engineering Blog – HTTP Errors, Fixes & API Best Practices | ErrorFixer",
    description: "Read the latest engineering articles on web standards, HTTP error troubleshooting, REST APIs, security, and developer productivity.",
    url: `${baseUrl}/blog`,
    siteName: 'ErrorFixer',
    images: [
      {
        url: `${baseUrl}/assets/brand_logo.png`,
        width: 1200,
        height: 630,
        alt: "ErrorFixer Blog Logo",
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Engineering Blog – HTTP Errors, Fixes & API Best Practices | ErrorFixer",
    description: "Read the latest engineering articles on web standards, HTTP error troubleshooting, REST APIs, security, and developer productivity.",
    images: [`${baseUrl}/assets/brand_logo.png`],
  },
};

export default async function BlogPage() {
  let posts = [];

  try {
    const isProjectIdConfigured = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
                                  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-sanity-project-id';

    if (isProjectIdConfigured) {
      posts = await client.fetch(`*[_type == "post"] | order(publishedAt desc) {
        title,
        "slug": slug.current,
        mainImage,
        publishedAt,
        excerpt,
        description,
        category,
        body
      }`);
    }
  } catch (error) {
    console.error("Error fetching Sanity blogs:", error);
  }

  function getDynamicReadTime(post) {
    let text = '';
    if (Array.isArray(post.body)) {
      post.body.forEach(block => {
        if (block._type === 'block' && block.children) {
          block.children.forEach(child => {
            if (child.text) {
              text += ' ' + child.text;
            }
          });
        }
      });
    }

    if (!text.trim()) {
      text = post.excerpt || post.description || '';
    }

    const words = text.trim().split(/\s+/).filter(Boolean).length;
    // A standard reading rate is 200 words per minute. Minimum 2 minutes.
    const minutes = Math.max(2, Math.ceil(words / 200));
    return `${minutes} min read`;
  }

  function getPostImageUrl(post) {
    if (post.mainImage) {
      try {
        return urlFor(post.mainImage).width(800).height(450).url();
      } catch (e) {
        return '/assets/brand_logo.png';
      }
    }
    return '/assets/brand_logo.png';
  }

  return (
    <div className="min-h-screen bg-background py-16 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      {/* Blog Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <span className="px-3 py-1 text-xs font-semibold tracking-wider text-tertiary bg-tertiary-container/10 border border-tertiary/20 rounded-full uppercase">
          Engineering & Guides
        </span>
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
          The Error<span className="gradient-text font-bold">Fixer</span> Blog
        </h1>
        <p className="mt-4 text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Deep dives into HTTP error code resolution, Web architectures, API design best practices, and performance optimization.
        </p>
      </div>

      {posts.length === 0 ? (
        /* Zero State / Empty State */
        <div className="max-w-md mx-auto text-center py-16 px-6 bg-surface-low border border-outline-variant rounded-2xl glass shadow-xl">
          <div className="w-16 h-16 bg-surface-high border border-outline-variant rounded-xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10l4 4v10a2 2 0 01-2 2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 2v6h6" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 13h8" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 17h8" />
            </svg>
          </div>
          <h2 className="text-xl font-display font-bold text-foreground mb-3">No blogs are available at the moment</h2>
          <p className="text-sm text-on-surface-variant mb-8 leading-relaxed">
            Our engineering team is currently crafting technical content. Please check back soon!
          </p>
      
        </div>
      ) : (
        /* Grid Layout of Blogs */
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => {
              const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              });

              return (
                <article 
                  key={post.slug}
                  className="group relative flex flex-col overflow-hidden rounded-2xl border border-outline-variant bg-surface-low hover:bg-surface-container transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 glass"
                >
                  {/* Image Container */}
                  <div className="relative aspect-video w-full overflow-hidden border-b border-outline-variant bg-surface-high">
                    <Image
                      src={getPostImageUrl(post)}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      priority={false}
                    />
                    {/* Category Badge overlay */}
                    {post.category && (
                      <span className="absolute top-4 left-4 z-10 px-2.5 py-1 text-xs font-semibold rounded-md bg-background/80 text-primary border border-outline-variant backdrop-blur-md">
                        {post.category}
                      </span>
                    )}
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-1 flex-col p-6">
                    {/* Date and Read Time */}
                    <div className="flex items-center gap-2 text-xs text-on-surface-variant font-medium mb-3">
                      <time dateTime={post.publishedAt}>{formattedDate}</time>
                      <span>•</span>
                      <span>{getDynamicReadTime(post)}</span>
                    </div>

                    {/* Title */}
                    <h2 className="text-xl font-display font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      <Link href={`/blog/${post.slug}`} className="focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        {post.title}
                      </Link>
                    </h2>

                    {/* Excerpt */}
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt || post.description || "Click to read this article's full troubleshooting guides and solutions."}
                    </p>

                    {/* Default Author Footer: ErrorFixer */}
                    <div className="mt-auto flex items-center gap-3 pt-4 border-t border-outline-variant/60">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-outline-variant bg-surface-high flex items-center justify-center">
                        <Image
                          src="/assets/brand_logo.png"
                          alt="ErrorFixer"
                          fill
                          sizes="32px"
                          className="object-contain p-1"
                        />
                      </div>
                      <span className="text-xs font-semibold text-foreground/90">ErrorFixer</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
