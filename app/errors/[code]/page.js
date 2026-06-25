import { redirect, notFound } from "next/navigation";
import errorsData from "../../../data/errors.json";

export async function generateStaticParams() {
  return errorsData.map((error) => ({
    code: error.code.toString(),
  }));
}

export default async function ErrorCodeRedirectPage({ params }) {
  const { code } = await params;
  const error = errorsData.find((e) => e.code.toString() === code);

  if (error) {
    redirect(`/${error.slug}`);
  } else {
    notFound();
  }
}
