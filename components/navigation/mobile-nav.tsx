"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";
import { Menu, FileText, Github } from "lucide-react";

/**
 * Mobile Navigation Component
 *
 * Provides a hamburger menu for mobile devices using shadcn/ui Sheet component.
 * Shows the same navigation items as the desktop version but in a mobile-friendly format.
 */
export function MobileNav() {
    const [open, setOpen] = useState(false);

    const navigationItems = [{ name: "Home", href: "/" }];

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col space-y-4 mt-8">
                    <div className="mb-6">
                        <Logo size="sm" />
                    </div>

                    <nav className="flex flex-col space-y-2">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="flex items-center px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
                                onClick={() => setOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    <div className="pt-4 border-t space-y-2">
                        <Button
                            variant="outline"
                            size="sm"
                            asChild
                            className="w-full"
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
                            className="w-full"
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
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
