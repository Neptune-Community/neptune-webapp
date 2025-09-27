import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neptune Community Roadmap - Development Timeline & Features",
  description:
    "Explore the Neptune Community roadmap featuring upcoming projects including Community Wallet, MCP Server, Browser Extension, I2P Marketplace, and Betting Platform. Track development progress and community initiatives.",
  keywords: [
    "Neptune roadmap",
    "Neptune development timeline",
    "Neptune community projects",
    "Neptune wallet development",
    "Neptune browser extension",
    "I2P marketplace",
    "cryptocurrency roadmap",
    "blockchain development",
    "Neptune MCP server",
    "quantum secure crypto roadmap",
    "privacy coin development",
    "anonymous cryptocurrency features",
  ],
  openGraph: {
    title: "Neptune Community Roadmap - Development Timeline & Features",
    description:
      "Explore the Neptune Community roadmap featuring upcoming projects including Community Wallet, MCP Server, Browser Extension, I2P Marketplace, and Betting Platform.",
    type: "website",
    url: "/roadmap",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Neptune Community Roadmap - Development Timeline & Features",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Neptune Community Roadmap - Development Timeline & Features",
    description:
      "Explore the Neptune Community roadmap featuring upcoming projects and development timeline.",
    images: ["/opengraph-image"],
  },
};

export default function RoadmapLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
