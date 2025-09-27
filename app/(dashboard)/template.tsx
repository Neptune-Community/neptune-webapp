"use client";

import { useEffect } from "react";

/**
 * Dashboard Template
 *
 * This template is applied to all routes within the (dashboard) route group.
 * According to Next.js App Router conventions:
 * - Templates are re-rendered on navigation (unlike layouts)
 * - Useful for animations, state resets, or analytics tracking
 * - Can be placed at any route segment level
 */
export default function DashboardTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // Track page views for dashboard routes
    console.log("Dashboard route accessed:", window.location.pathname);

    // In production, you would send this to your analytics service
    // Example: analytics.track('page_view', { path: window.location.pathname });
  }, []);

  return <div className="animate-in fade-in-0 duration-300">{children}</div>;
}
