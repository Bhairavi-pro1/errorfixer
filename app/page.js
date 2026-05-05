import { Suspense } from 'react';
import HomePageContent from "../components/HomePageContent";
import errorsData from "../data/errors.json";
import siteMetadata from "../data/metadata.json";

export const metadata = siteMetadata.home;

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <HomePageContent errors={errorsData} />
    </Suspense>
  );
}
