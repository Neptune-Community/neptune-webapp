"use client";

import { useState } from "react";
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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Shield, Code, Zap, Calendar } from "lucide-react";

export default function Roadmap() {
    const [selectedYear, setSelectedYear] = useState<string>("all");

    const communityProjects = [
        {
            title: "Neptune Community Wallet",
            description:
                "A community-driven wallet solution with enhanced privacy features and community governance. Features LLM interaction via MCP protocol and seamless browser extension connectivity, enabling in-browser usage for maximum adoption.",
            icon: Shield,
            status: "in-development",
            timeline: "Q4 2025",
            years: ["2025"],
        },
        {
            title: "Neptune MCP Server",
            description:
                "A Model Context Protocol (MCP) server that enables AI assistants to interact with the Neptune blockchain, providing secure access to wallet operations, transaction history, and network data.",
            icon: Code,
            status: "planned",
            timeline: "Q4 2025",
            years: ["2025"],
        },
        {
            title: "Neptune Browser Extension and SDK",
            description:
                "A browser extension that enables seamless Neptune transactions directly from web browsers, with built-in privacy protection and easy merchant integration.",
            icon: Code,
            status: "planned",
            timeline: "Q4 2025",
            years: ["2025"],
        },
        {
            title: "Neptune I2P Marketplace",
            description:
                "A Neptune-centric marketplace built on I2P (Invisible Internet Project) for maximum privacy and anonymity. This will include comprehensive specifications and APIs for decentralized commerce.",
            icon: Zap,
            status: "research",
            timeline: "Q1 2026",
            years: ["2026"],
        },
        {
            title: "Neptune Betting Platform",
            description:
                "A decentralized betting platform built on Neptune blockchain with privacy-focused features, enabling secure and anonymous wagering on various events while maintaining complete transaction privacy.",
            icon: Zap,
            status: "research",
            timeline: "Q1 2026",
            years: ["2026"],
        },
    ];

    // Derive available years from the actual projects
    const availableYears = [
        "all",
        ...Array.from(
            new Set(communityProjects.flatMap((project) => project.years))
        ),
    ].sort();

    const filteredCommunityProjects =
        selectedYear === "all"
            ? communityProjects
            : communityProjects.filter((project) =>
                  project.years.includes(selectedYear)
              );

    const getStatusBadge = (status: string) => {
        switch (status) {
            case "completed":
                return (
                    <Badge className="bg-green-100 text-green-800">
                        Completed
                    </Badge>
                );
            case "in-development":
                return (
                    <Badge className="bg-blue-100 text-blue-800">
                        In Development
                    </Badge>
                );
            case "planned":
                return (
                    <Badge className="bg-yellow-100 text-yellow-800">
                        Planned
                    </Badge>
                );
            case "research":
                return (
                    <Badge className="bg-purple-100 text-purple-800">
                        Research Phase
                    </Badge>
                );
            default:
                return <Badge variant="secondary">{status}</Badge>;
        }
    };

    const getStatusBorderColor = (status: string) => {
        switch (status) {
            case "completed":
                return "border-l-green-500";
            case "in-development":
                return "border-l-blue-500";
            case "planned":
                return "border-l-yellow-500";
            case "research":
                return "border-l-purple-500";
            default:
                return "border-l-gray-500";
        }
    };

    return (
        <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <main className="max-w-4xl mx-auto space-y-8">
                {/* Header */}
                <div className="text-center space-y-4 py-12">
                    <TypographyH1>Neptune Development Roadmap</TypographyH1>
                    <TypographyLead className="max-w-3xl mx-auto">
                        Our comprehensive roadmap for building the future of
                        quantum-secure, privacy-focused cryptocurrency. From
                        foundational infrastructure to global adoption, discover
                        what's coming next for Neptune.
                    </TypographyLead>
                </div>

                {/* Year Filter */}
                <section className="space-y-4">
                    <div className="flex items-center justify-center space-x-2">
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                        <TypographyH3>Filter by Year</TypographyH3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-2">
                        {availableYears.map((year) => (
                            <Button
                                key={year}
                                variant={
                                    selectedYear === year
                                        ? "default"
                                        : "outline"
                                }
                                size="sm"
                                onClick={() => setSelectedYear(year)}
                                className="min-w-[80px]"
                            >
                                {year === "all" ? "All Years" : year}
                            </Button>
                        ))}
                    </div>
                </section>

                {/* Community Projects */}
                <section className="space-y-6">
                    <TypographyH2>
                        Community Projects{" "}
                        {selectedYear !== "all" && `- ${selectedYear}`}
                    </TypographyH2>
                    <TypographyP className="text-muted-foreground">
                        The Neptune community is actively developing additional
                        tools and infrastructure to enhance the ecosystem. These
                        projects are driven by community members and
                        contributors who share our vision of privacy-focused,
                        quantum-secure cryptocurrency.
                    </TypographyP>
                    {filteredCommunityProjects.length > 0 ? (
                        <div className="grid gap-6 md:grid-cols-1">
                            {filteredCommunityProjects.map((project) => {
                                const IconComponent = project.icon;
                                return (
                                    <Card
                                        key={project.title}
                                        className={`bg-primary/2 border-l-4 ${getStatusBorderColor(
                                            project.status
                                        )}`}
                                    >
                                        <CardHeader>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <IconComponent className="h-5 w-5 text-primary" />
                                                    <CardTitle>
                                                        {project.title}
                                                    </CardTitle>
                                                </div>
                                                {getStatusBadge(project.status)}
                                            </div>
                                            <div className="flex items-center space-x-2">
                                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                                <TypographyP className="text-sm text-muted-foreground">
                                                    {project.timeline}
                                                </TypographyP>
                                            </div>
                                        </CardHeader>
                                        <CardContent>
                                            <CardDescription>
                                                {project.description}
                                            </CardDescription>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>
                    ) : (
                        <Card className="bg-primary/2">
                            <CardContent className="pt-6">
                                <TypographyP className="text-center text-muted-foreground">
                                    No community projects scheduled for{" "}
                                    {selectedYear}.
                                </TypographyP>
                            </CardContent>
                        </Card>
                    )}
                </section>

                {/* Community Involvement */}
                <section className="space-y-6">
                    <TypographyH2>Community Involvement</TypographyH2>
                    <Card className="bg-primary/2">
                        <CardHeader>
                            <CardTitle>Get Involved</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <TypographyP>
                                Neptune is a community-driven project. We
                                welcome contributions from developers,
                                researchers, and enthusiasts who share our
                                vision of quantum-secure, privacy-focused
                                cryptocurrency.
                            </TypographyP>
                            <div className="grid gap-4 md:grid-cols-2">
                                <div>
                                    <TypographyH3 className="text-lg font-semibold mb-2">
                                        Development
                                    </TypographyH3>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li>
                                            • Contribute to core protocol
                                            development
                                        </li>
                                        <li>• Build applications and tools</li>
                                        <li>
                                            • Improve documentation and
                                            tutorials
                                        </li>
                                        <li>
                                            • Report bugs and suggest features
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <TypographyH3 className="text-lg font-semibold mb-2">
                                        Community
                                    </TypographyH3>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        <li>• Join our Discord and Telegram</li>
                                        <li>
                                            • Participate in governance
                                            discussions
                                        </li>
                                        <li>
                                            • Share knowledge and help others
                                        </li>
                                        <li>
                                            • Organize local meetups and events
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </section>
            </main>
        </div>
    );
}
