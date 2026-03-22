import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CurrencyProvider } from "@/contexts/CurrencyContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jcalc.rabinale.com.np"),
  title: {
    default: "JCalc | Smart Online Calculators for Everyday Math and Finance",
    template: "%s | JCalc",
  },
  description:
    "Free online calculators for loans, ROI, percentages, and more. Smart tools for everyday math and finance. Fast, accurate, no signup required.",
  keywords: [
    "calculator",
    "loan calculator",
    "ROI calculator",
    "percentage calculator",
    "online calculator",
    "free calculator",
  ],
  authors: [{ name: "JCalc" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "JCalc",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-M649F3K9PJ"
        />
        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-M649F3K9PJ');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 font-sans text-slate-800 antialiased`}
      >
        <CurrencyProvider>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
        </CurrencyProvider>
      </body>
    </html>
  );
}
