import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/hero-section";
import { GettingStartedSection } from "@/components/sections/getting-started-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { WarCrySection } from "@/components/sections/war-cry-section";

export const metadata: Metadata = {
    title: "Neptune Community - Quantum-Secure Anonymous Cryptocurrency",
    description:
        "Join the Neptune Community supporting Neptune Cash - the first Layer-1 blockchain with zk-STARKs integration, post-quantum security, and anonymous peer-to-peer transactions. Learn about mutator sets, quantum-resistant cryptography, and the future of private cryptocurrency.",
    keywords: [
        "Neptune Cash",
        "quantum secure cryptocurrency",
        "zk-STARKs blockchain",
        "anonymous crypto",
        "privacy coin",
        "post quantum cryptography",
        "mutator sets",
        "quantum resistant crypto",
        "Layer-1 blockchain",
        "private smart contracts",
        "NPT token",
        "crypto privacy",
        "quantum computing threat",
        "blockchain privacy",
    ],
    openGraph: {
        title: "Neptune Community - Quantum-Secure Anonymous Cryptocurrency",
        description:
            "Supporting Neptune Cash - the first Layer-1 blockchain with zk-STARKs integration and post-quantum security. Anonymous peer-to-peer cryptocurrency with mutator sets.",
        images: [
            {
                url: "/opengraph-image",
                width: 1200,
                height: 630,
                alt: "Neptune Community Homepage - Quantum-Secure Anonymous Cryptocurrency",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Neptune Community - Quantum-Secure Anonymous Cryptocurrency",
        description:
            "Supporting Neptune Cash - the first Layer-1 blockchain with zk-STARKs integration and post-quantum security.",
        images: ["/opengraph-image"],
    },
};

export default function Home() {
    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="max-w-4xl mx-auto space-y-8">
                {/* Hero Section */}
                <HeroSection />

                {/* Getting Started Section */}
                <GettingStartedSection />

                {/* Features Section */}
                <FeaturesSection />

                {/* War Cry Section */}
                <WarCrySection />
            </main>
        </div>
    );
}
