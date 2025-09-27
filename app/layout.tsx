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
        default: "My Webapp - Production Ready Next.js Application",
        template: "%s | My Webapp",
    },
    description:
        "A production-ready Next.js application with shadcn/ui, tRPC, Zustand, and comprehensive testing",
    keywords: [
        "Next.js",
        "React",
        "TypeScript",
        "shadcn/ui",
        "tRPC",
        "Zustand",
    ],
    authors: [{ name: "My Webapp Team" }],
    creator: "My Webapp",
    publisher: "My Webapp",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL(
        process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
    ),
    alternates: {
        canonical: "/",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "/",
        title: "My Webapp - Production Ready Next.js Application",
        description:
            "A production-ready Next.js application with shadcn/ui, tRPC, Zustand, and comprehensive testing",
        siteName: "My Webapp",
    },
    twitter: {
        card: "summary_large_image",
        title: "My Webapp - Production Ready Next.js Application",
        description:
            "A production-ready Next.js application with shadcn/ui, tRPC, Zustand, and comprehensive testing",
        creator: "@mywebapp",
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
