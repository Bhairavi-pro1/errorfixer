import HomePageContent from "../components/HomePageContent";
import errorsData from "../data/errors.json";
import siteMetadata from "../data/metadata.json";

export const metadata = siteMetadata.home;

export default function Home() {
  return (
    <HomePageContent errors={errorsData} />
  );
}
