import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import Header from "@/components/Header";
import MobileCTA from "@/components/MobileCTA";
import Footer from "@/components/Footer";

// Fonts
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const fraunces = Fraunces({ variable: "--font-fraunces", subsets: ["latin"] });

// Base URL for metadata
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Advocate Bishnu Rishi Koirala | Mahabai Kanooni Sewa Kendra, Kathmandu",
  description:
    "Advocate Bishnu Rishi Koirala — senior lawyer at Mahabai Kanooni Sewa Kendra, Anamnagar, Kathmandu. 27+ years of experience in family, criminal defense, immigration, business, and personal injury law.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    title: "Advocate Bishnu Rishi Koirala | Mahabai Kanooni Sewa Kendra",
    description:
      "Lawyer in Kathmandu with 27+ years of practice. Senior advocate at Mahabai Kanooni Sewa Kendra, Anamnagar. Contact: +977 9851150766.",
    type: "website",
    url: "/",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Advocate Bishnu Rishi Koirala | Mahabai Kanooni Sewa Kendra",
    description:
      "Senior lawyer at Mahabai Kanooni Sewa Kendra, Kathmandu. 27+ years of trusted legal practice.",
    images: ["/og-image.png"],
  },
  alternates: { canonical: "/" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" id="top" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} antialiased min-h-screen flex flex-col`}
      >
        <Header />
        <MobileCTA />
        <main className="flex-1">{children}</main>
        <Footer />

        {/* JSON-LD for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Advocate Bishnu Rishi Koirala",
                  jobTitle: "Advocate",
                  telephone: "+9779851150766",
                  email: "mailto:kbishnurishi@gmail.com",
                  url: SITE_URL,
                  worksFor: { "@type": "LegalService", name: "Mahabai Kanooni Sewa Kendra" },
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Anamnagar",
                    addressLocality: "Kathmandu",
                    addressRegion: "Bagmati",
                    addressCountry: "NP",
                  },
                  knowsLanguage: ["English", "Nepali", "Hindi"],
                },
                {
                  "@type": "LegalService",
                  name: "Mahabai Kanooni Sewa Kendra",
                  telephone: "+9779851150766",
                  areaServed: "Nepal",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Anamnagar",
                    addressLocality: "Kathmandu",
                    addressRegion: "Bagmati",
                    addressCountry: "NP",
                  },
                  url: SITE_URL,
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
