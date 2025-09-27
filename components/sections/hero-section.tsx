import { ExternalLink, FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { TypographyH1, TypographyLead } from "@/components/ui/typography";

/**
 * Hero Section Component
 *
 * The main hero section of the homepage featuring the Neptune branding,
 * welcome message, and primary call-to-action buttons.
 */
export function HeroSection() {
    return (
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

            <TypographyH1 className="text-center">
                Welcome to Neptune Cash Community
            </TypographyH1>

            <TypographyLead className="max-w-2xl mx-auto">
                A community-run initiative supporting Neptune Cash, a Layer-1
                peer-to-peer anonymous cash protocol featuring privacy,
                scalability, and post-quantum security. The first blockchain to
                integrate zk-STARKs on Layer-1 with revolutionary mutator sets.
            </TypographyLead>

            {/* Action Buttons */}
            <div className="flex gap-4 items-center flex-col sm:flex-row justify-center pt-6">
                <Button asChild size="lg">
                    <Link
                        href="https://neptune.cash/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Visit Neptune Cash
                    </Link>
                </Button>

                <Button variant="outline" size="lg" asChild>
                    <Link
                        href="https://neptune.cash/learn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FileText className="mr-2 h-4 w-4" />
                        Learn More
                    </Link>
                </Button>
            </div>
        </div>
    );
}
