import { ExternalLink, Globe, TrendingUp } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  TypographyH1,
  TypographyH2,
  TypographyLead,
  TypographyP,
} from "@/components/ui/typography";

export const metadata: Metadata = {
  title: "Where to Buy Neptune (NPT) - Cryptocurrency Exchanges",
  description:
    "Find the best exchanges to buy Neptune (NPT) cryptocurrency. Trade Neptune Cash on SafeTrade and other supported platforms. Get the latest Neptune price and trading information.",
  keywords: [
    "buy Neptune",
    "Neptune exchange",
    "NPT trading",
    "Neptune cryptocurrency exchange",
    "where to buy Neptune Cash",
    "Neptune trading pairs",
    "NPT USDT",
    "SafeTrade Neptune",
    "Neptune price",
    "cryptocurrency exchange",
    "privacy coin exchange",
    "quantum secure crypto trading",
  ],
  openGraph: {
    title: "Where to Buy Neptune (NPT) - Cryptocurrency Exchanges",
    description:
      "Find the best exchanges to buy Neptune (NPT) cryptocurrency. Trade Neptune Cash on SafeTrade and other supported platforms.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Where to Buy Neptune (NPT) - Cryptocurrency Exchanges",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Where to Buy Neptune (NPT) - Cryptocurrency Exchanges",
    description:
      "Find the best exchanges to buy Neptune (NPT) cryptocurrency. Trade Neptune Cash on SafeTrade and other supported platforms.",
    images: ["/opengraph-image"],
  },
};

/**
 * Exchanges Page
 *
 * Lists all exchanges and platforms where users can buy and trade Neptune tokens.
 * Provides comprehensive information about trading options and security.
 */
export default function Exchanges() {
  const exchanges = [
    {
      name: "SafeTrade",
      description:
        "Official Neptune exchange with professional trading interface and advanced features.",
      url: "https://safetrade.com/exchange/NPT-USDT?type=pro",
      tradingPairs: ["NPT/USDT", "NPT/BTC"],
      status: "active",
      icon: TrendingUp,
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "active":
        return <Badge className="bg-green-100 text-green-800">Active</Badge>;
      case "coming-soon":
        return (
          <Badge className="bg-yellow-100 text-yellow-800">Coming Soon</Badge>
        );
      case "maintenance":
        return <Badge className="bg-red-100 text-red-800">Maintenance</Badge>;
      default:
        return <Badge className="bg-gray-100 text-gray-800">Unknown</Badge>;
    }
  };

  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="max-w-4xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-6 py-12">
          <TypographyH1>Where to Get Neptune</TypographyH1>
          <TypographyLead className="max-w-2xl mx-auto">
            Find trusted exchanges and platforms where you can buy, sell, and
            trade Neptune tokens. All listed exchanges have been verified for
            security and reliability.
          </TypographyLead>
        </div>

        {/* Exchanges List */}
        <section className="space-y-6">
          <TypographyH2>Available Exchanges</TypographyH2>

          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {exchanges.map((exchange) => {
              const IconComponent = exchange.icon;
              return (
                <Card
                  key={exchange.name}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <IconComponent className="h-6 w-6 text-primary" />
                        <div>
                          <CardTitle className="text-xl">
                            {exchange.name}
                          </CardTitle>
                          <CardDescription>
                            {exchange.description}
                          </CardDescription>
                        </div>
                      </div>
                      {getStatusBadge(exchange.status)}
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Trading Pairs */}
                    <div>
                      <TypographyP className="font-semibold mb-2">
                        Trading Pairs:
                      </TypographyP>
                      <div className="flex flex-wrap gap-2">
                        {exchange.tradingPairs.map((pair) => (
                          <Badge
                            key={pair}
                            variant="outline"
                            className="font-mono"
                          >
                            {pair}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Button */}
                    <div className="pt-4">
                      <Link
                        href={exchange.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                      >
                        <Globe className="h-4 w-4" />
                        Visit {exchange.name}
                        <ExternalLink className="h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
