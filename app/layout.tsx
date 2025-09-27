import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";

import Notice from "@/components/layout/notice";
import { ThemeProvider } from "@/components/theme-provider";
import { TRPCProvider } from "@/lib/trpc/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Neptune Community - Quantum-Secure Anonymous Cryptocurrency",
    template: "%s | Neptune Community",
  },
  description:
    "Join the Neptune Community - supporting Neptune Cash, the first Layer-1 blockchain with zk-STARKs integration and post-quantum security. Anonymous peer-to-peer cryptocurrency with mutator sets and quantum-resistant cryptography.",
  keywords: [
    "Neptune Cash",
    "Neptune cryptocurrency",
    "quantum secure crypto",
    "post quantum cryptography",
    "zk-STARKs blockchain",
    "anonymous cryptocurrency",
    "privacy coin",
    "mutator sets",
    "quantum resistant",
    "Layer-1 blockchain",
    "peer-to-peer cash",
    "private smart contracts",
    "defi privacy",
    "cryptocurrency privacy",
    "quantum computing threat",
    "NPT token",
    "Neptune community",
    "crypto privacy",
    "blockchain privacy",
    "quantum security",
  ],
  authors: [{ name: "Neptune Community" }],
  creator: "Neptune Community",
  publisher: "Neptune Community",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://neptune-community.org",
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Neptune Community - Quantum-Secure Anonymous Cryptocurrency",
    description:
      "Supporting Neptune Cash - the first Layer-1 blockchain with zk-STARKs integration and post-quantum security. Anonymous peer-to-peer cryptocurrency with mutator sets.",
    siteName: "Neptune Community",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Neptune Community - Quantum-Secure Anonymous Cryptocurrency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neptune Community - Quantum-Secure Anonymous Cryptocurrency",
    description:
      "Supporting Neptune Cash - the first Layer-1 blockchain with zk-STARKs integration and post-quantum security.",
    creator: "@neptune_community",
    images: ["/opengraph-image"],
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/icons/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/icon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon.svg",
        color: "#1e40af",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Neptune Community" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <TRPCProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Notice />
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </TRPCProvider>
      </body>
    </html>
  );
}
