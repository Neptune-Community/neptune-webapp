import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { MainNav } from "@/components/navigation/main-nav";
import { MobileNav } from "@/components/navigation/mobile-nav";
import { ModeToggle } from "@/components/mode-toggle";
import { FileText, Github } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                {/* Logo and Brand */}
                <div className="flex items-center space-x-3">
                    <Link href="/" className="flex items-center space-x-3">
                        <Logo size="md" showText={false} />
                        <div className="flex flex-col items-start">
                            <span className="text-xl font-bold text-foreground leading-none">
                                Neptune
                            </span>
                            <span className="text-xs text-muted-foreground leading-none">
                                community
                            </span>
                        </div>
                    </Link>
                </div>

                {/* Main Navigation */}
                <div className="hidden md:flex">
                    <MainNav />
                </div>

                {/* Right side actions */}
                <div className="flex items-center space-x-4">
                    <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hidden sm:flex"
                    >
                        <Link
                            href="https://docs.neptune.cash/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <FileText className="h-4 w-4" />
                            Docs
                        </Link>
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="hidden sm:flex"
                    >
                        <Link
                            href="https://github.com/neptune-community"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            <Github className="h-4 w-4" />
                            GitHub
                        </Link>
                    </Button>

                    {/* Theme Toggle */}
                    <ModeToggle />

                    {/* Mobile Navigation */}
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}
