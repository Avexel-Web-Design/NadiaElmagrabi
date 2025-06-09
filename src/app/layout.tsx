import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
