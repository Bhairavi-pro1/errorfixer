import { Manrope, Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "ErrorFixer – HTTP Error Code Solutions",
  description: "Understand, identify, and fix HTTP errors instantly with real-world solutions.",
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
      </body>
    </html>
  );
}
