import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TRPCProvider } from "@/lib/trpc/react";

import Notice from "@/components/layout/notice";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
