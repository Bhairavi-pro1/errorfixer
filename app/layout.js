import { Manrope, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import siteMetadata from "../data/metadata.json";
import Script from "next/script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://errorfixer.toolsofsaas.com";

export const metadata = {
  metadataBase: new URL(baseUrl),
  ...siteMetadata.layout,
  openGraph: {
    ...siteMetadata.layout?.openGraph,
    url: baseUrl,
    images: [
      {
        url: "/assets/brand_logo.png",
        width: 1200,
        height: 630,
        alt: "ErrorFixer Logo",
        type: "image/png",
      },
    ],
  },
  twitter: {
    ...siteMetadata.layout?.twitter,
    images: ["/assets/brand_logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
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
