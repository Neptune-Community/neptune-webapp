"use client";

import { Calendar, Code, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DonationDialog } from "@/components/ui/donation-dialog";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyLead,
  TypographyP,
} from "@/components/ui/typography";
import { useRoadmapStore } from "@/stores";

function RoadmapPage() {
  const { selectedYear, setSelectedYear } = useRoadmapStore();

  const communityProjects = [
    {
      id: "community-wallet",
      title: "Neptune Community Wallet",
      description:
        "A community-driven wallet solution with enhanced privacy features, LLM interaction via MCP, and browser extension connectivity for seamless adoption.",
      status: "in-development",
      timeline: "Q4 2025",
      year: "2025",
      icon: Shield,
      borderColor: "border-blue-500",
    },
    {
      id: "mcp-server",
      title: "Neptune MCP Server",
      description:
        "Model Context Protocol server enabling AI assistants to interact with Neptune blockchain, wallets, and ecosystem tools.",
      status: "completed",
      timeline: "Q4 2025",
      year: "2025",
      icon: Code,
      borderColor: "border-green-500",
    },
    {
      id: "browser-extension",
      title: "Neptune Browser Extension",
      description:
        "Browser extension for seamless Neptune integration, enabling in-browser transactions and dApp interactions.",
      status: "completed",
      timeline: "Q4 2025",
      year: "2025",
      icon: Zap,
      borderColor: "border-green-500",
    },
    {
      id: "i2p-marketplace",
      title: "Neptune I2P Marketplace",
      description:
        "Decentralized marketplace built on I2P network for anonymous trading of goods and services using Neptune.",
      status: "planned",
      timeline: "Q1 2026",
      year: "2026",
      icon: Shield,
      borderColor: "border-yellow-500",
    },
    {
      id: "betting-platform",
      title: "Neptune Betting Platform",
      description:
        "Anonymous betting platform leveraging Neptune's privacy features for secure and private wagering.",
      status: "planned",
      timeline: "Q1 2026",
      year: "2026",
      icon: Calendar,
      borderColor: "border-yellow-500",
    },
  ];

  const availableYears = [
    "all",
    ...new Set(communityProjects.map((p) => p.year)),
  ];

  const filteredProjects =
    selectedYear === "all"
      ? communityProjects
      : communityProjects.filter((p) => p.year === selectedYear);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-800 border-green-200">
            Completed
          </Badge>
        );
      case "in-development":
        return (
          <Badge className="bg-blue-100 text-blue-800 border-blue-200">
            In Development
          </Badge>
        );
      case "planned":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">
            Planned
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <main className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <TypographyH1>Neptune Community Roadmap</TypographyH1>
            <TypographyLead>
              Track the development progress of community-driven projects
              expanding the Neptune ecosystem
            </TypographyLead>
          </div>

          {/* Year Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {availableYears.map((year) => (
              <Button
                key={year}
                variant={selectedYear === year ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedYear(year)}
              >
                {year === "all" ? "All Years" : year}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project) => {
              const IconComponent = project.icon;
              return (
                <Card
                  key={project.id}
                  className={`bg-primary/2 ${project.borderColor} border-2`}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-6 w-6 text-primary" />
                        <div>
                          <CardTitle className="text-lg">
                            {project.title}
                          </CardTitle>
                          <CardDescription>{project.timeline}</CardDescription>
                        </div>
                      </div>
                      {getStatusBadge(project.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <TypographyP className="text-sm text-muted-foreground">
                      {project.description}
                    </TypographyP>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Community Involvement Section */}
          <section className="space-y-6">
            <TypographyH2>Community Involvement</TypographyH2>
            <Card>
              <CardHeader>
                <CardTitle>Get Involved</CardTitle>
                <CardDescription>
                  Join the Neptune community and help shape the future of
                  quantum-secure cryptocurrency
                </CardDescription>
              </CardHeader>
              <CardContent>
                <TypographyP className="mb-4">
                  The Neptune Community thrives on collaboration and innovation.
                  Whether you're a developer, researcher, or enthusiast, there
                  are many ways to contribute to the ecosystem.
                </TypographyP>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <TypographyH3 className="text-lg font-semibold mb-2">
                      Development
                    </TypographyH3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Contribute to core protocol development</li>
                      <li>• Build applications and tools</li>
                      <li>• Improve documentation and tutorials</li>
                      <li>• Report bugs and suggest features</li>
                    </ul>
                  </div>
                  <div>
                    <TypographyH3 className="text-lg font-semibold mb-2">
                      Community
                    </TypographyH3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• Join our Discord and Telegram</li>
                      <li>• Participate in governance discussions</li>
                      <li>• Share knowledge and help others</li>
                      <li>• Organize local meetups and events</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Donation Section */}
            <div className="flex justify-center pt-6">
              <DonationDialog />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default function Roadmap() {
  return <RoadmapPage />;
}
