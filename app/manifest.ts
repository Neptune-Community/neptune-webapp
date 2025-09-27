import type { MetadataRoute } from "next";

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
    name: "Neptune Community - Quantum-Secure Anonymous Cryptocurrency",
    short_name: "Neptune Community",
    description:
      "Supporting Neptune Cash - the first Layer-1 blockchain with zk-STARKs integration and post-quantum security",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#1e40af",
    icons: [
      {
        src: "/icons/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["finance", "cryptocurrency", "blockchain"],
    lang: "en",
    orientation: "portrait-primary",
  };
}
