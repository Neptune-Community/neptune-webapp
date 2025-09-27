"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";
import {
  TypographyH2,
  TypographyP,
  TypographySmall,
  TypographyMuted,
} from "@/components/ui/typography";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Route Error Boundary
 *
 * This component catches errors within a specific route segment.
 * It provides a user-friendly error message and recovery options.
 *
 * According to Next.js App Router conventions, this file:
 * - Catches errors in the current route segment and nested routes
 * - Must be a client component
 * - Receives error and reset props
 */
export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to our logging service
    console.error("Route error caught:", error);

    // In production, you would send this to your error tracking service
    // Example: Sentry.captureException(error);
  }, [error]);

  return (
    <div className="min-h-[400px] flex items-center justify-center p-6">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <AlertTriangle className="h-12 w-12 text-destructive" />
        </div>

        <div className="space-y-2">
          <TypographyH2>Oops! Something went wrong</TypographyH2>
          <TypographyP>
            We encountered an error while loading this page. Please try again.
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
              window.location.href = "/";
            }}
            className="flex items-center gap-2"
          >
            <Home className="h-4 w-4" />
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
}
