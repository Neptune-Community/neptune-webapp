import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { TypographyP, TypographySmall } from "@/components/ui/typography";
import { DonationDialog } from "@/components/ui/donation-dialog";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-primary/2">
      <div className="container mx-auto px-4 py-8">
        {/* Brand Section */}
        <div className="flex flex-col items-center space-y-4 mb-6">
          <div className="flex items-center space-x-2">
            <Logo size="sm" showText={false} />
            <div className="flex flex-col items-start">
              <span className="text-lg font-brand text-foreground leading-none">
                Neptune
              </span>
              <span className="text-xs text-muted-foreground leading-none">
                community
              </span>
            </div>
          </div>
          <TypographyP className="text-center max-w-md text-sm">
            A community-run initiative supporting Neptune Cash, a Layer-1
            peer-to-peer anonymous cash protocol featuring privacy, scalability,
            and post-quantum security.
          </TypographyP>
        </div>

        {/* Social Links and Donation */}
        <div className="flex flex-col items-center space-y-4 mb-6">
          <div className="flex justify-center space-x-4">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link
              href="mailto:contact@neptune.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </Link>
          </div>

          {/* Donation Dialog */}
          <DonationDialog />
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm">
          <Link
            href="/roadmap"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Roadmap
          </Link>
          <Link
            href="/about"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </Link>
          <Link
            href="https://docs.neptune.cash/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Documentation
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="pt-4 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            <TypographySmall>
              © {new Date().getFullYear()} Neptune Community. All rights
              reserved.
            </TypographySmall>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>Designed by neurostr1ke</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
