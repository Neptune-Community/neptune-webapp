import { Code, Coins, Cpu, Lock, Shield, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TypographyH2 } from "@/components/ui/typography";

/**
 * Features Section Component
 *
 * Displays the key features and technologies used in Neptune Cash.
 * Based on the official Neptune Cash Layer-1 blockchain protocol.
 */
export function FeaturesSection() {
  const features = [
    {
      title: "zk-STARKs Integration",
      description:
        "First blockchain protocol to integrate zk-STARKs on Layer-1. Users prove transactions client-side while miners aggregate them into single-block proofs",
      icon: Shield,
    },
    {
      title: "Mutator Sets",
      description:
        "Novel privacy solution achieving privacy without sacrificing succinctness. A groundbreaking approach to scalable private transactions",
      icon: Zap,
    },
    {
      title: "Post-Quantum Security",
      description:
        "All cryptography is post-quantum, deployable on today's machines while promising to withstand future quantum computer attacks",
      icon: Lock,
    },
    {
      title: "Proof-of-Work Consensus",
      description:
        "Physical resource consumption required for block production, rooting security in objective reality rather than subjective stake",
      icon: Cpu,
    },
    {
      title: "Private Smart Contracts",
      description:
        "Arbitrary logic support with privacy makes Neptune both a private smart contract platform and competitor for the world's best money",
      icon: Code,
    },
    {
      title: "Deflationary Tokenomics",
      description:
        "Asymptotically limited to 42,000,000 coins with less than 1.98% pre-mine. Halvings every 3 years with 50% of block rewards time-locked",
      icon: Coins,
    },
  ];

  return (
    <section className="space-y-6">
      <TypographyH2>Features</TypographyH2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const IconComponent = feature.icon;
          return (
            <Card key={feature.title} className="bg-primary/2">
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <IconComponent className="h-5 w-5 text-primary" />
                  <CardTitle>{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
