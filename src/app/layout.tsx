import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pure Elements by Marilyn | Natural Personal Care Products | Burleson, TX",
  description: "Handcrafted natural toothpaste, soaps, deodorant & more. Made with love in Burleson, Texas. 100% natural ingredients, aluminum-free, chemical-free personal care.",
  keywords: "natural toothpaste, handmade soap, aluminum-free deodorant, natural personal care, Burleson Texas, chemical-free, organic, handcrafted",
  openGraph: {
    title: "Pure Elements by Marilyn - Natural Personal Care",
    description: "Handcrafted natural personal care products made with love in Burleson, Texas.",
    type: "website",
    locale: "en_US",
    siteName: "Pure Elements by Marilyn"
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Elements by Marilyn - Natural Personal Care",
    description: "Handcrafted natural personal care products made with love in Burleson, Texas."
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://pureelements.com" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Burleson" />
        <meta name="geo.position" content="32.5421;-97.3207" />
        <meta name="ICBM" content="32.5421, -97.3207" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}