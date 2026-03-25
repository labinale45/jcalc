import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CurrencyProvider } from "@/contexts/CurrencyContext";
import { JsonLd } from "@/components/JsonLd";
import { CookieConsent } from "@/components/CookieConsent";
import { DEFAULT_OG_IMAGE_PATH, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultDescription =
  "Free online calculators for loans, ROI, percentages, and more. Smart tools for everyday math and finance. Fast, accurate, no signup required.";

const ogImage = absoluteUrl(DEFAULT_OG_IMAGE_PATH);

const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim();
const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT?.trim();

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "JCalc | Smart Online Calculators for Everyday Math and Finance",
    template: "%s | JCalc",
  },
  description: defaultDescription,
  applicationName: SITE_NAME,
  keywords: [
    "calculator",
    "loan calculator",
    "ROI calculator",
    "percentage calculator",
    "profit calculator",
    "break-even calculator",
    "cash flow calculator",
    "growth calculator",
    "unit economics calculator",
    "online calculator",
    "free calculator",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "JCalc | Smart Online Calculators for Everyday Math and Finance",
    description: defaultDescription,
    images: [{ url: ogImage, alt: `${SITE_NAME} — online calculators` }],
  },
  twitter: {
    card: "summary_large_image",
    title: "JCalc | Smart Online Calculators for Everyday Math and Finance",
    description: defaultDescription,
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [{ url: "/Jcalc.png", type: "image/png" }],
    apple: "/Jcalc.png",
  },
  ...(googleVerification ? { verification: { google: googleVerification } } : {}),
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#66A3FF",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://pagead2.googlesyndication.com" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-M649F3K9PJ" />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M649F3K9PJ');
          `}
        </Script>
        {adsenseClient ? (
          <Script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
            strategy="afterInteractive"
          />
        ) : null}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 font-sans text-slate-800 antialiased`}
      >
        <JsonLd />
        <CurrencyProvider>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieConsent />
        </CurrencyProvider>
      </body>
    </html>
  );
}
