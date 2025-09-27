import { MetadataRoute } from "next";

/**
 * Web App Manifest Generator
 *
 * This generates the manifest.json file for PWA functionality.
 * According to Next.js App Router conventions, this file:
 * - Must be named "manifest.ts"
 * - Should export a default function that returns MetadataRoute.Manifest
 * - Can be placed at any route segment level
 */
export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "My Webapp - Production Ready Next.js Application",
        short_name: "My Webapp",
        description:
            "A production-ready Next.js application with shadcn/ui, tRPC, and Zustand",
        start_url: "/",
        display: "standalone",
        background_color: "#0a0a0a",
        theme_color: "#3b82f6",
        icons: [
            {
                src: "/icon-192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icon-512.png",
                sizes: "512x512",
                type: "image/png",
            },
        ],
        categories: ["productivity", "utilities"],
        lang: "en",
        orientation: "portrait-primary",
    };
}
