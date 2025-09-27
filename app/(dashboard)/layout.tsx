import { ReactNode } from "react";
import { Sidebar } from "@/components/layout/sidebar";
import Header from "@/components/layout/header";

/**
 * Dashboard Layout
 *
 * This layout is applied to all routes within the (dashboard) route group.
 * It provides a consistent dashboard experience with sidebar navigation.
 */
export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
