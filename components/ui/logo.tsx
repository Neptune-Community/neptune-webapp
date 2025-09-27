"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
    size?: "sm" | "md" | "lg";
    className?: string;
    showText?: boolean;
}

/**
 * Theme-aware Neptune Logo Component
 *
 * This component automatically adapts the logo colors based on the current theme.
 * It uses CSS filters to invert colors in dark mode for better visibility.
 * Uses hydration-safe approach to prevent SSR/client mismatch.
 */
export function Logo({ size = "md", className, showText = true }: LogoProps) {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [imageError, setImageError] = useState(false);

    // Ensure component is mounted before applying theme-dependent styles
    useEffect(() => {
        setMounted(true);
    }, []);

    // Size configurations
    const sizeConfig = {
        sm: {
            container: "h-6 w-6",
            text: "text-lg",
            icon: "h-6 w-6",
        },
        md: {
            container: "h-8 w-8",
            text: "text-xl",
            icon: "h-8 w-8",
        },
        lg: {
            container: "h-10 w-10",
            text: "text-2xl",
            icon: "h-10 w-10",
        },
    };

    const config = sizeConfig[size];

    // Don't apply theme-dependent styles until mounted to prevent hydration mismatch
    const isDark = mounted && (resolvedTheme === "dark" || theme === "dark");

    // Fallback SVG if image fails to load
    const fallbackSvg = (
        <svg
            width={size === "sm" ? 24 : size === "md" ? 32 : 40}
            height={size === "sm" ? 24 : size === "md" ? 32 : 40}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={cn(
                config.icon,
                "transition-all duration-200",
                isDark ? "text-white" : "text-blue-600"
            )}
        >
            <circle cx="20" cy="20" r="18" fill="currentColor" />
            <text
                x="20"
                y="26"
                textAnchor="middle"
                fill="white"
                fontSize="16"
                fontWeight="bold"
                fontFamily="system-ui, sans-serif"
            >
                N
            </text>
        </svg>
    );

    return (
        <div className={cn("flex items-center space-x-2", className)}>
            <div className={cn("relative", config.container)}>
                {imageError ? (
                    fallbackSvg
                ) : (
                    <img
                        src="/neptune.svg"
                        alt="Neptune Logo"
                        width={size === "sm" ? 24 : size === "md" ? 32 : 40}
                        height={size === "sm" ? 24 : size === "md" ? 32 : 40}
                        className={cn(
                            config.icon,
                            "transition-all duration-200",
                            // Apply filter to invert colors in dark mode only after mount
                            isDark && "brightness-0 invert"
                        )}
                        onError={() => setImageError(true)}
                    />
                )}
            </div>
            {showText && (
                <span className={cn("font-bold text-foreground", config.text)}>
                    Neptune
                </span>
            )}
        </div>
    );
}

/**
 * Logo Icon Only Component
 *
 * Just the logo icon without text, useful for compact spaces
 */
export function LogoIcon({
    size = "md",
    className,
}: Omit<LogoProps, "showText">) {
    return <Logo size={size} className={className} showText={false} />;
}
