import type { Metadata, Viewport } from "next";
import { Assistant, Rubik } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  weight: ["400", "600", "800"],
  variable: "--font-assistant",
  display: "swap",
});

const rubik = Rubik({
  subsets: ["hebrew", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rubik",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7a1f1f",
};

const HOMEPAGE_TITLE = 'קייטרינג כשר למהדרין בד"ץ הרב מחפוד החל מ48 ש"ח למנה: שפע';
const HOMEPAGE_DESC =
  'קייטרינג כשר למהדרין (בדץ יורה דעה: הרב מחפוד) לא צריך להיות עם איכות אוכל ירודה. אנחנו מעניקים חווית מזון כשרה למהדרין אך טעימה וערבה לחך עם אפשרויות הסעדה ברמות שונות החל מאזכרות וכלה בסעודות פאר לחתונות.';

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: HOMEPAGE_TITLE,
    template: `%s | ${SITE.name}`,
  },
  description: HOMEPAGE_DESC,
  applicationName: SITE.name,
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  publisher: SITE.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESC,
    images: [{ url: "/og-image.jpg", width: 900, height: 1200, alt: 'קייטרינג כשר למהדרין בד"ץ הרב מחפוד' }],
  },
  twitter: {
    card: "summary_large_image",
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESC,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  verification: { google: "AtTqy_TLUh0D3v1iy-48Veboz0p7iBdK_0ozntGH0p4" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Restaurant", "Organization"],
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      alternateName: SITE.alternateName,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE.url}/#logo`,
        url: `${SITE.url}/shefa-logo.png`,
        contentUrl: `${SITE.url}/shefa-logo.png`,
        caption: SITE.name,
        inLanguage: SITE.lang,
        width: 600,
        height: 516,
      },
      image: { "@id": `${SITE.url}/#logo` },
      telephone: "0723308072",
      priceRange: "₪-₪₪₪₪₪",
      servesCuisine: "Kosher Mehadrin",
      address: { "@type": "PostalAddress", addressLocality: "פתח תקווה", addressCountry: "IL" },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"], opens: "00:00", closes: "23:49" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Friday", opens: "00:00", closes: "11:00" },
      ],
      foundingDate: "2013",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      alternateName: SITE.alternateName,
      publisher: { "@id": `${SITE.url}/#organization` },
      inLanguage: SITE.lang,
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="he" dir="rtl" className={`${assistant.variable} ${rubik.variable}`}>
      <body className="min-h-screen flex flex-col bg-white text-[#333]">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {children}
      </body>
    </html>
  );
}
