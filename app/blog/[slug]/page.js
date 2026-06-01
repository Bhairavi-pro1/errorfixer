import Link from "next/link";
import Image from "next/image";
import { client, urlFor } from "../../../lib/sanity";
import { PortableText } from "@portabletext/react";
import ReadingProgressBar from "../../../components/error-detail/ReadingProgressBar";

const portableTextComponents = {
  block: {
    normal: ({ children }) => <p className="text-base md:text-lg text-foreground/90 leading-relaxed mb-6 font-sans">{children}</p>,
    h1: ({ children }) => <h1 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-12 mb-6">{children}</h1>,
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mt-10 mb-5 flex items-center gap-2 border-b border-outline-variant pb-2">
        <span className="w-1.5 h-6 rounded-full bg-primary inline-block"></span>
        {children}
      </h2>
    ),
    h3: ({ children }) => <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mt-8 mb-4">{children}</h3>,
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary bg-surface-high/30 p-5 pl-6 rounded-r-xl italic my-8 text-foreground/95 border-l-primary/80">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc pl-6 mb-6 space-y-3 text-base md:text-lg text-foreground/90 font-sans">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal pl-6 mb-6 space-y-3 text-base md:text-lg text-foreground/90 font-sans">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li>{children}</li>,
    number: ({ children }) => <li>{children}</li>,
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a 
          href={value.href} 
          target="_blank" 
          rel={rel} 
          className="text-primary hover:text-tertiary underline decoration-primary/30 hover:decoration-tertiary/60 transition-colors font-semibold"
        >
          {children}
        </a>
      );
    },
    code: ({ children }) => (
      <code className="px-1.5 py-0.5 rounded bg-surface-highest border border-outline-variant font-mono text-sm text-tertiary font-medium">
        {children}
      </code>
    ),
  },
  types: {
    image: ({ value }) => {
      if (!value) return null;
      try {
        const imageUrl = urlFor(value).width(900).url();
        return (
          <div className="relative w-full aspect-video my-8 rounded-2xl overflow-hidden border border-outline-variant bg-surface-high">
            <Image
              src={imageUrl}
              alt={value.alt || "Article Image"}
              fill
              sizes="(max-width: 1200px) 100vw, 900px"
              className="object-cover"
            />
          </div>
        );
      } catch (e) {
        return null;
      }
    },
    code: ({ value }) => {
      if (!value || !value.code) return null;
      return (
        <pre className="p-5 rounded-2xl bg-surface-low border border-outline-variant font-mono text-sm overflow-x-auto my-8 text-foreground/95 leading-relaxed shadow-inner">
          <code>{value.code}</code>
        </pre>
      );
    }
  }
};

export async function generateStaticParams() {
  try {
    const isProjectIdConfigured = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
                                  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-sanity-project-id';
    if (!isProjectIdConfigured) return [];

    const posts = await client.fetch(`*[_type == "post"] { "slug": slug.current }`);
    return posts.map((post) => ({ slug: post.slug }));
  } catch (error) {
    return [];
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.errorfixer.toolsofsaas.com";

  try {
    const isProjectIdConfigured = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
                                  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-sanity-project-id';
    
    if (isProjectIdConfigured) {
      const post = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0] { title, excerpt, description, mainImage }`,
        { slug }
      );
      if (post) {
        const title = `${post.title} | ErrorFixer Blog`;
        const description = post.excerpt || post.description || "Read full article details.";
        
        let ogImageUrl = `${baseUrl}/assets/brand_logo.png`;
        if (post.mainImage) {
          try {
            ogImageUrl = urlFor(post.mainImage).width(1200).height(630).url();
          } catch (e) {
            // fallback to site logo
          }
        }

        return {
          title,
          description,
          openGraph: {
            title,
            description,
            url: `${baseUrl}/blog/${slug}`,
            siteName: 'ErrorFixer',
            images: [
              {
                url: ogImageUrl,
                width: 1200,
                height: 630,
                alt: post.title,
              },
            ],
            type: 'article',
          },
          twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImageUrl],
          },
        };
      }
    }
  } catch (e) {
    // Ignore and fallback
  }

  return {
    title: "Article Details | ErrorFixer Blog",
    description: "Read full blog post articles.",
    openGraph: {
      title: "Article Details | ErrorFixer Blog",
      description: "Read full blog post articles.",
      url: `${baseUrl}/blog/${slug}`,
      siteName: 'ErrorFixer',
      images: [
        {
          url: `${baseUrl}/assets/brand_logo.png`,
          width: 1200,
          height: 630,
          alt: "ErrorFixer Blog Logo",
        },
      ],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: "Article Details | ErrorFixer Blog",
      description: "Read full blog post articles.",
      images: [`${baseUrl}/assets/brand_logo.png`],
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  let post = null;

  try {
    const isProjectIdConfigured = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID && 
                                  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== 'your-sanity-project-id';
    
    if (isProjectIdConfigured) {
      post = await client.fetch(
        `*[_type == "post" && slug.current == $slug][0] {
          title,
          "slug": slug.current,
          mainImage,
          publishedAt,
          excerpt,
          description,
          category,
          body
        }`,
        { slug }
      );
    }
  } catch (error) {
    console.error(`Error fetching post ${slug} from Sanity:`, error);
  }

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl font-display font-bold text-foreground mb-4">Article Not Found</h1>
        <p className="text-on-surface-variant mb-8">We could not find the article you are looking for.</p>
        <Link href="/blog" className="px-6 py-3 bg-surface-high hover:bg-surface-highest text-foreground border border-outline-variant font-semibold rounded-lg transition-colors">
          Back to Blog List
        </Link>
      </div>
    );
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  function getDynamicReadTime(p) {
    let text = '';
    if (Array.isArray(p.body)) {
      p.body.forEach(block => {
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
      text = p.excerpt || p.description || '';
    }

    const words = text.trim().split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(2, Math.ceil(words / 200));
    return `${minutes} min read`;
  }

  function getPostImageUrl(p) {
    if (p.mainImage) {
      try {
        return urlFor(p.mainImage).width(1200).height(675).url();
      } catch (e) {
        return '/assets/brand_logo.png';
      }
    }
    return '/assets/brand_logo.png';
  }

  return (
    <>
      {/* Scroll indicator */}
      <ReadingProgressBar />

      <article className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumbs Navigation */}
          <nav className="flex items-center gap-2 text-xs font-semibold tracking-wide text-on-surface-variant mb-6 uppercase">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[200px] md:max-w-xs">{post.title}</span>
          </nav>

          {/* Post Header */}
          <header className="mb-8">
            {post.category && (
              <span className="px-3 py-1 text-xs font-bold tracking-wider text-primary bg-primary-container/10 border border-primary/20 rounded-md uppercase">
                {post.category}
              </span>
            )}
            
            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-display font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            {/* Default Author Profile and Metadata */}
            <div className="mt-6 flex items-center justify-between gap-4 py-4 border-y border-outline-variant/60">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-outline-variant bg-surface-high flex items-center justify-center">
                  <Image
                    src="/assets/brand_logo.png"
                    alt="ErrorFixer"
                    fill
                    sizes="48px"
                    className="object-contain p-1.5"
                  />
                </div>
                <div>
                  <div className="text-sm font-bold text-foreground">ErrorFixer</div>
                  <div className="text-xs text-on-surface-variant">Official Publisher</div>
                </div>
              </div>

              <div className="text-right text-xs md:text-sm text-on-surface-variant font-medium">
                <time dateTime={post.publishedAt}>{formattedDate}</time>
                <div className="mt-0.5 text-xs text-on-surface-variant/80">{getDynamicReadTime(post)}</div>
              </div>
            </div>
          </header>

          {/* Hero Main Image */}
          <div className="relative aspect-video w-full mb-10 overflow-hidden rounded-2xl border border-outline-variant shadow-xl bg-surface-high">
            <Image
              src={getPostImageUrl(post)}
              alt={post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 800px"
              className="object-cover"
              priority
            />
          </div>

          {/* Article Body */}
          <div className="prose prose-invert max-w-none">
            {post.body ? (
              <PortableText value={post.body} components={portableTextComponents} />
            ) : (
              <p className="text-on-surface-variant italic">No article body content was provided.</p>
            )}
          </div>

          {/* Footer Back Button */}
          <div className="mt-16 pt-8 border-t border-outline-variant/60 flex justify-between items-center">
            <Link 
              href="/blog" 
              className="group flex items-center gap-2 text-sm font-bold text-primary hover:text-tertiary transition-colors"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog Listing
            </Link>
            <span className="text-xs text-on-surface-variant">© ErrorFixer Blog</span>
          </div>
        </div>
      </article>
    </>
  );
}
