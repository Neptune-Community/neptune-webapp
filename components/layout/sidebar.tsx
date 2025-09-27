"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { TypographyH2 } from "@/components/ui/typography";
import {
    LayoutDashboard,
    Users,
    Settings,
    BarChart3,
    FileText,
    LogOut,
} from "lucide-react";

/**
 * Dashboard Sidebar Component
 *
 * Provides navigation for the dashboard area.
 * Uses Next.js usePathname to highlight active routes.
 */
export function Sidebar() {
    const pathname = usePathname();

    const navigation = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: LayoutDashboard,
        },
        {
            name: "Analytics",
            href: "/dashboard/analytics",
            icon: BarChart3,
        },
        {
            name: "Users",
            href: "/dashboard/users",
            icon: Users,
        },
        {
            name: "Reports",
            href: "/dashboard/reports",
            icon: FileText,
        },
        {
            name: "Settings",
            href: "/dashboard/settings",
            icon: Settings,
        },
    ];

    return (
        <div className="hidden md:flex md:w-64 md:flex-col">
            <div className="flex flex-col flex-grow pt-5 bg-card border-r overflow-y-auto">
                <div className="flex items-center flex-shrink-0 px-4">
                    <TypographyH2>Dashboard</TypographyH2>
                </div>

                <div className="mt-5 flex-grow flex flex-col">
                    <nav className="flex-1 px-2 pb-4 space-y-1">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link key={item.name} href={item.href}>
                                    <Button
                                        variant={
                                            isActive ? "secondary" : "ghost"
                                        }
                                        className={cn(
                                            "w-full justify-start",
                                            isActive && "bg-secondary"
                                        )}
                                    >
                                        <item.icon className="mr-3 h-4 w-4" />
                                        {item.name}
                                    </Button>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex-shrink-0 flex border-t border-border p-4">
                        <Button
                            variant="ghost"
                            className="w-full justify-start"
                        >
                            <LogOut className="mr-3 h-4 w-4" />
                            Sign out
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
