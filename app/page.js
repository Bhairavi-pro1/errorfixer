import HomePageContent from "../components/HomePageContent";
import errorsData from "../data/errors.json";

export const metadata = {
  title: "ErrorFixer – Fix HTTP Errors Instantly",
  description: "Stop guessing what went wrong. Search your error code, understand the cause, and copy-paste real-world solutions tailored to your tech stack.",
};

export default function Home() {
  return (
    <HomePageContent errors={errorsData} />
  );
}
