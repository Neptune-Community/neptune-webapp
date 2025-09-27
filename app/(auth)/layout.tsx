import type { ReactNode } from "react";
import { TypographyH1, TypographyP } from "@/components/ui/typography";

/**
 * Authentication Layout
 *
 * This layout is applied to all routes within the (auth) route group.
 * Route groups allow organizing routes without affecting the URL structure.
 *
 * According to Next.js App Router conventions:
 * - Route groups are created with parentheses: (auth)
 * - They don't affect the URL path
 * - They can have their own layout.tsx files
 * - They're useful for organizing related routes
 */
export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto">
          {/* Auth-specific header or branding */}
          <div className="text-center mb-8">
            <TypographyH1>Welcome Back</TypographyH1>
            <TypographyP>Sign in to your account to continue</TypographyP>
          </div>

          {/* Auth form content */}
          <div className="bg-card rounded-lg border p-6 shadow-sm">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
