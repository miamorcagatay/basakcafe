import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://basakcafe.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Başak Aile Çay Bahçesi | Merkezefendi, Denizli",
  description:
    "Denizli Merkezefendi'de aile dostu çay bahçesi ve kafe. Taze tostlar, kumrular, tavuk dönerler. Çocuk parkı mevcut. Her gün gece 01:00'e kadar açık.",
  keywords: [
    "başak kafe",
    "çay bahçesi denizli",
    "merkezefendi kafe",
    "aile kafe denizli",
    "tost kumru denizli",
  ],
  openGraph: {
    title: "Başak Aile Çay Bahçesi",
    description: "Sevdiklerinizle keyifli bir mola için Denizli'nin en güzel çay bahçesi.",
    url: BASE_URL,
    siteName: "Başak Aile Çay Bahçesi",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Başak Aile Çay Bahçesi | Merkezefendi, Denizli",
    description: "Sevdiklerinizle keyifli bir mola için Denizli'nin en güzel çay bahçesi.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
