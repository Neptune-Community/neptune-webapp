"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import {
    TypographyH2,
    TypographyP,
    TypographySmall,
    TypographyMuted,
} from "@/components/ui/typography";

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

/**
 * Authentication Error Boundary
 *
 * This error boundary is specific to the (auth) route group.
 * It provides auth-specific error handling and recovery options.
 */
export default function AuthError({ error, reset }: ErrorProps) {
    useEffect(() => {
        // Log auth-specific errors
        console.error("Auth error caught:", error);
    }, [error]);

    return (
        <div className="min-h-[400px] flex items-center justify-center p-6">
            <div className="max-w-md w-full text-center space-y-6">
                <div className="flex justify-center">
                    <AlertTriangle className="h-12 w-12 text-destructive" />
                </div>

                <div className="space-y-2">
                    <TypographyH2>Authentication Error</TypographyH2>
                    <TypographyP>
                        We encountered an error while processing your
                        authentication request. Please try again.
                    </TypographyP>
                </div>

                {process.env.NODE_ENV === "development" && (
                    <div className="p-4 bg-muted rounded-lg text-left">
                        <TypographySmall className="font-mono">
                            Error: {error.message}
                        </TypographySmall>
                        {error.digest && (
                            <TypographyMuted className="mt-2">
                                Error ID: {error.digest}
                            </TypographyMuted>
                        )}
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button onClick={reset} className="flex items-center gap-2">
                        <RefreshCw className="h-4 w-4" />
                        Try again
                    </Button>
                    <Button
                        variant="outline"
                        onClick={() => {
                            window.location.href = "/login";
                        }}
                    >
                        Back to login
                    </Button>
                </div>
            </div>
        </div>
    );
}
