import HomePageContent from "../components/HomePageContent";
import errorsData from "../data/errors.json";
import siteMetadata from "../data/metadata.json";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://errorfixer.toolsofsaas.com";

export const metadata = {
  ...siteMetadata.home,
  openGraph: {
    title: siteMetadata.home?.title || "ErrorFixer – Fix HTTP Errors Instantly | Ultimate Guide",
    description: siteMetadata.home?.description || "Understand, identify, and fix HTTP errors instantly with real-world solutions tailored for developers.",
    url: baseUrl,
    siteName: "ErrorFixer",
    images: [
      {
        url: "/assets/brand_logo.png",
        width: 1200,
        height: 630,
        alt: "ErrorFixer Logo",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteMetadata.home?.title || "ErrorFixer – Fix HTTP Errors Instantly | Ultimate Guide",
    description: siteMetadata.home?.description || "Understand, identify, and fix HTTP errors instantly with real-world solutions tailored for developers.",
    images: ["/assets/brand_logo.png"],
    creator: "@errorfixer",
  },
};

export default function Home() {
  return (
    <HomePageContent errors={errorsData} />
  );
}
