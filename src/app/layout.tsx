import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PT ARTISTA MULTI KREATIF - Creative Advertising Agency",
  description: "PT ARTISTA MULTI KREATIF adalah agency periklanan kreatif yang menghadirkan solusi digital dan kreatif untuk bisnis Anda. Dari branding hingga digital marketing, kami wujudkan visi kreatif Anda.",
  keywords: ["ARTISTA MULTI KREATIF", "advertising agency", "creative agency", "digital marketing", "branding", "periklanan", "agency kreatif", "Kendari", "Sulawesi Tenggara"],
  authors: [{ name: "PT ARTISTA MULTI KREATIF" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "PT ARTISTA MULTI KREATIF - Creative Advertising Agency",
    description: "Agency periklanan kreatif yang menghadirkan solusi digital dan branding untuk bisnis Anda",
    url: "https://artistamultikreatif.com",
    siteName: "PT ARTISTA MULTI KREATIF",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PT ARTISTA MULTI KREATIF - Creative Advertising Agency",
    description: "Agency periklanan kreatif yang menghadirkan solusi digital dan branding untuk bisnis Anda",
  },
  other: {
    "facebook-domain-verification": "c0u7xghsgfglc2ehtizfkndri3t08t",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
