"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCw } from "lucide-react";
import {
  TypographyH1,
  TypographyP,
  TypographySmall,
  TypographyMuted,
} from "@/components/ui/typography";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

/**
 * Global Error Boundary
 *
 * This component catches all unhandled errors in the application.
 * It provides a user-friendly error message and recovery options.
 *
 * According to Next.js App Router conventions, this file must:
 * - Be named "global-error.tsx"
 * - Be placed in the app directory
 * - Include <html> and <body> tags
 * - Be a client component
 */
export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to our logging service
    console.error("Global error caught:", error);

    // In production, you would send this to your error tracking service
    // Example: Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-background">
          <div className="max-w-md w-full mx-auto p-6">
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <AlertTriangle className="h-16 w-16 text-destructive" />
              </div>

              <div className="space-y-2">
                <TypographyH1>Something went wrong</TypographyH1>
                <TypographyP>
                  We encountered an unexpected error. Please try again or
                  contact support if the problem persists.
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
                >
                  Go home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
