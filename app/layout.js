import { Manrope, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import siteMetadata from "../data/metadata.json";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = siteMetadata.layout;

export default function RootLayout({ children }) {
  const baseUrl = siteMetadata.layout.openGraph?.url || "https://errorfixer.toolsofsaas.com";
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${baseUrl}/#organization`,
    "name": siteMetadata.layout.openGraph?.siteName || "ErrorFixer",
    "url": baseUrl,
    "logo": {
      "@type": "ImageObject",
      "@id": `${baseUrl}/#logo`,
      "url": `${baseUrl}/assets/brand_logo.png`,
      "caption": siteMetadata.layout.openGraph?.images?.[0]?.alt || "ErrorFixer Logo"
    },
    "image": {
      "@id": `${baseUrl}/#logo`
    },
    "description": siteMetadata.layout.description,
    "sameAs": [
      `https://twitter.com/${siteMetadata.layout.twitter?.creator?.replace('@', '') || 'errorfixer'}`
    ]
  };

  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {/* Organization / Identity JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, '\\u003c'),
          }}
        />
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        
        {/* Google Analytics Scripts */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-L4TSCHGSZF"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-L4TSCHGSZF');
          `}
        </Script>
      </body>
    </html>
  );
}
