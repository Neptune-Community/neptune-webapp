import type { Metadata } from "next";
import {
    TypographyH1,
    TypographyH2,
    TypographyH3,
    TypographyP,
    TypographyLead,
} from "@/components/ui/typography";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Logo } from "@/components/ui/logo";
import { Users, Zap, Globe, Shield, Heart, Target } from "lucide-react";

export const metadata: Metadata = {
    title: "About Neptune Community - Supporting Quantum-Secure Cryptocurrency",
    description:
        "Learn about the Neptune Community - a community-driven initiative supporting Neptune Cash, the first Layer-1 blockchain with zk-STARKs integration and post-quantum security. Discover our mission to expand the ecosystem and spread awareness.",
    keywords: [
        "Neptune community",
        "about Neptune Cash",
        "quantum secure cryptocurrency community",
        "Neptune ecosystem",
        "cryptocurrency community",
        "blockchain community",
        "privacy coin community",
        "quantum resistant crypto",
        "zk-STARKs community",
        "anonymous cryptocurrency support",
        "Neptune Cash supporters",
        "crypto community initiative",
    ],
    openGraph: {
        title: "About Neptune Community - Supporting Quantum-Secure Cryptocurrency",
        description:
            "Learn about the Neptune Community - a community-driven initiative supporting Neptune Cash, the first Layer-1 blockchain with zk-STARKs integration and post-quantum security.",
        images: [
            {
                url: "/opengraph/neptune-about-og.png",
                width: 1200,
                height: 630,
                alt: "About Neptune Community - Supporting Quantum-Secure Cryptocurrency",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Neptune Community - Supporting Quantum-Secure Cryptocurrency",
        description:
            "Learn about the Neptune Community - a community-driven initiative supporting Neptune Cash and quantum-secure cryptocurrency.",
        images: ["/opengraph/neptune-about-twitter.png"],
    },
};

export default function About() {
    const communityValues = [
        {
            title: "Privacy First",
            description:
                "We believe in the fundamental right to financial privacy and are committed to building tools that protect user anonymity.",
            icon: Shield,
        },
        {
            title: "Community Driven",
            description:
                "Every decision, every feature, and every project is guided by the collective wisdom and needs of our community.",
            icon: Users,
        },
        {
            title: "Innovation Focused",
            description:
                "We push the boundaries of what's possible with blockchain technology, always seeking the next breakthrough.",
            icon: Zap,
        },
        {
            title: "Global Impact",
            description:
                "Our mission extends beyond borders, aiming to provide financial freedom to people worldwide.",
            icon: Globe,
        },
    ];

    const whatWeDo = [
        {
            title: "Expand the Ecosystem",
            description:
                "We develop and support tools, applications, and services that make Neptune more useful and accessible to everyone.",
            icon: Target,
        },
        {
            title: "Add Utility",
            description:
                "From wallets to marketplaces, we create practical applications that demonstrate Neptune's real-world potential.",
            icon: Zap,
        },
        {
            title: "Spread the Word",
            description:
                "We educate, inform, and inspire others about the importance of privacy-focused, quantum-secure cryptocurrency.",
            icon: Globe,
        },
    ];

    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="max-w-4xl mx-auto space-y-12">
                {/* Header */}
                <div className="text-center space-y-6 py-12">
                    <div className="flex justify-center mb-6">
                        <div className="flex items-center space-x-3">
                            <Logo size="lg" showText={false} />
                            <div className="flex flex-col items-start">
                                <span className="text-3xl font-bold text-foreground leading-none">
                                    Neptune
                                </span>
                                <span className="text-sm text-muted-foreground leading-none">
                                    community
                                </span>
                            </div>
                        </div>
                    </div>
                    <TypographyH1>About Neptune Community</TypographyH1>
                    <TypographyLead className="max-w-3xl mx-auto">
                        We are a passionate community of developers,
                        researchers, and enthusiasts dedicated to expanding the
                        Neptune ecosystem, adding real utility, and spreading
                        awareness about the future of privacy-focused,
                        quantum-secure cryptocurrency.
                    </TypographyLead>
                </div>

                {/* Mission Statement */}
                <section className="space-y-6">
                    <TypographyH2>Our Mission</TypographyH2>
                    <Card className="bg-primary/2 border-l-4 border-l-primary">
                        <CardContent className="pt-6">
                            <TypographyP className="text-lg leading-relaxed">
                                The Neptune Community exists to{" "}
                                <strong>expand the Neptune ecosystem</strong>,
                                <strong> add utility</strong>, and{" "}
                                <strong>spread the word</strong> about the
                                revolutionary potential of quantum-secure,
                                privacy-focused cryptocurrency. We believe that
                                financial privacy is a fundamental human right,
                                and we're building the tools and infrastructure
                                to make that vision a reality.
                            </TypographyP>
                        </CardContent>
                    </Card>
                </section>

                {/* What We Do */}
                <section className="space-y-6">
                    <TypographyH2>What We Do</TypographyH2>
                    <div className="grid gap-6 md:grid-cols-3">
                        {whatWeDo.map((item) => {
                            const IconComponent = item.icon;
                            return (
                                <Card key={item.title} className="bg-primary/2">
                                    <CardHeader>
                                        <div className="flex items-center space-x-2">
                                            <IconComponent className="h-5 w-5 text-primary" />
                                            <CardTitle>{item.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            {item.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>

                {/* Community Values */}
                <section className="space-y-6">
                    <TypographyH2>Our Values</TypographyH2>
                    <div className="grid gap-6 md:grid-cols-2">
                        {communityValues.map((value) => {
                            const IconComponent = value.icon;
                            return (
                                <Card
                                    key={value.title}
                                    className="bg-primary/2"
                                >
                                    <CardHeader>
                                        <div className="flex items-center space-x-2">
                                            <IconComponent className="h-5 w-5 text-primary" />
                                            <CardTitle>{value.title}</CardTitle>
                                        </div>
                                    </CardHeader>
                                    <CardContent>
                                        <CardDescription>
                                            {value.description}
                                        </CardDescription>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </section>

                {/* Why Neptune */}
                <section className="space-y-6">
                    <TypographyH2>Why Neptune?</TypographyH2>
                    <Card className="bg-primary/2">
                        <CardContent className="pt-6 space-y-4">
                            <TypographyP>
                                Neptune Cash represents the next evolution of
                                cryptocurrency. While other blockchains are
                                vulnerable to quantum attacks and lack true
                                privacy, Neptune is built from the ground up
                                with:
                            </TypographyP>
                            <ul className="space-y-2 ml-4">
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>
                                        <strong>
                                            Post-quantum cryptography
                                        </strong>{" "}
                                        - Future-proof against quantum computer
                                        attacks
                                    </span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>
                                        <strong>zk-STARKs on Layer-1</strong> -
                                        Revolutionary privacy technology
                                    </span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>
                                        <strong>Mutator sets</strong> - Novel
                                        privacy solution without sacrificing
                                        scalability
                                    </span>
                                </li>
                                <li className="flex items-start space-x-2">
                                    <span className="text-primary mt-1">•</span>
                                    <span>
                                        <strong>Proof-of-Work consensus</strong>{" "}
                                        - Security rooted in objective reality
                                    </span>
                                </li>
                            </ul>
                            <TypographyP>
                                The Neptune Community recognizes that this
                                technology represents the future of money, and
                                we're committed to building the ecosystem that
                                will make it accessible to everyone.
                            </TypographyP>
                        </CardContent>
                    </Card>
                </section>

                {/* Join Us */}
                <section className="space-y-6">
                    <TypographyH2>Join Our Community</TypographyH2>
                    <Card className="bg-primary/2 border-l-4 border-l-green-500">
                        <CardContent className="pt-6">
                            <div className="flex items-start space-x-3">
                                <Heart className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                                <div className="space-y-3">
                                    <TypographyP className="text-lg">
                                        Whether you're a developer, researcher,
                                        investor, or simply someone who believes
                                        in financial privacy, there's a place
                                        for you in the Neptune Community.
                                    </TypographyP>
                                    <TypographyP>
                                        Together, we're not just building
                                        software – we're building the foundation
                                        for a more private, secure, and free
                                        financial future. Join us in making this
                                        vision a reality.
                                    </TypographyP>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>

                {/* Call to Action */}
                <section className="text-center space-y-4">
                    <TypographyH3>Ready to Make a Difference?</TypographyH3>
                    <TypographyP className="text-muted-foreground">
                        Explore our roadmap, contribute to our projects, or
                        simply spread the word about the importance of
                        quantum-secure, privacy-focused cryptocurrency.
                    </TypographyP>
                </section>
            </main>
        </div>
    );
}
