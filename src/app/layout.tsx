import type { Metadata } from "next";
import { Crimson_Text, EB_Garamond } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const crimsonText = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal", "italic"],
  variable: "--font-crimson",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-garamond",
});

export const metadata: Metadata = {
  title: "Nadia Elmagrabi - Transformational Guide & Intuitive Healer",
  description: "I guide women into deep alignment with their spiritual path through Human Design, past-life regression, and ancestral healing. Break inherited cycles and step into your true power.",
  keywords: "spiritual healing, human design, past life regression, ancestral healing, transformation, intuitive healer",
  authors: [{ name: "Nadia Elmagrabi" }],
  openGraph: {
    title: "Nadia Elmagrabi - Transformational Guide & Intuitive Healer",
    description: "I guide women into deep alignment with their spiritual path through Human Design, past-life regression, and ancestral healing.",
    type: "website",
    url: "https://nadiaelmagrabi.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${crimsonText.variable} ${ebGaramond.variable} antialiased sacred-text`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
