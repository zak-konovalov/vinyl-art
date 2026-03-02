import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/site";

// ===== ГЛОБАЛЬНЫЙ SEO =====
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`, 
    // Любая страница будет:
    // "Услуги | Винил Арт"
  },

  description: siteConfig.description,

  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage, // OG картинка 1200x630
        width: 1200,
        height: 630,
      },
    ],
    locale: "ru_RU",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="bg-white text-gray-900">

        {/* ===== SCHEMA.ORG МИКРОРАЗМЕТКА ===== */}
        {/* Добавляем structured data для Google */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: siteConfig.name,
              url: siteConfig.url,
              telephone: siteConfig.contacts.phone,
              image: `${siteConfig.url}${siteConfig.ogImage}`,
              address: {
                "@type": "PostalAddress",
                streetAddress: siteConfig.contacts.address,
                addressCountry: "RU",
              },
              openingHours: siteConfig.contacts.workingHoursDisplay,
            }),
          }}
        />

        <Header />

        {/* ===== ОСНОВНОЙ КОНТЕНТ ===== */}
        <main className="min-h-screen max-w-6xl mx-auto px-4 py-10">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}