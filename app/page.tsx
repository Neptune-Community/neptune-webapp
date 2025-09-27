import { HeroSection } from "@/components/sections/hero-section";
import { GettingStartedSection } from "@/components/sections/getting-started-section";
import { FeaturesSection } from "@/components/sections/features-section";
import { WarCrySection } from "@/components/sections/war-cry-section";

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
