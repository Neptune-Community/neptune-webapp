import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // Security headers to protect against XSS, clickjacking, and other attacks
    async headers() {
        return [
            {
                // Apply security headers to all routes
                source: "/(.*)",
                headers: [
                    // XSS Protection
                    {
                        key: "X-XSS-Protection",
                        value: "1; mode=block",
                    },
                    // Prevent MIME type sniffing
                    {
                        key: "X-Content-Type-Options",
                        value: "nosniff",
                    },
                    // Prevent clickjacking
                    {
                        key: "X-Frame-Options",
                        value: "DENY",
                    },
                    // Referrer policy for privacy
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                    // Permissions policy to restrict browser features
                    {
                        key: "Permissions-Policy",
                        value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
                    },
                    // Content Security Policy (CSP) - strict policy for XSS protection
                    {
                        key: "Content-Security-Policy",
                        value: [
                            "default-src 'self'",
                            "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://vercel.live",
                            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                            "font-src 'self' https://fonts.gstatic.com",
                            "img-src 'self' data: https: blob:",
                            "connect-src 'self' https://api.coingecko.com https://safetrade.com https://*.vercel.app",
                            "frame-src 'none'",
                            "object-src 'none'",
                            "base-uri 'self'",
                            "form-action 'self'",
                            "frame-ancestors 'none'",
                            "upgrade-insecure-requests",
                        ].join("; "),
                    },
                ],
            },
            {
                // Additional security for API routes
                source: "/api/(.*)",
                headers: [
                    {
                        key: "X-Robots-Tag",
                        value: "noindex, nofollow",
                    },
                ],
            },
            {
                // Static assets headers
                source: "/:path*\\.(svg|png|jpg|jpeg|gif|ico|webp)",
                headers: [
                    {
                        key: "Cache-Control",
                        value: "public, max-age=31536000, immutable",
                    },
                ],
            },
        ];
    },

    // Additional security configurations
    poweredByHeader: false, // Remove X-Powered-By header
    compress: true, // Enable compression
    generateEtags: true, // Enable ETags for caching

    // Image optimization security
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "safetrade.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "api.coingecko.com",
                port: "",
                pathname: "/**",
            },
        ],
        dangerouslyAllowSVG: true, // Allow SVG for Neptune logo
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
        unoptimized: false, // Keep optimization enabled
        formats: ["image/webp", "image/avif"], // Modern formats
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    },

    // Ensure static assets are properly handled
    assetPrefix: process.env.NODE_ENV === "production" ? "" : "",

    // Server external packages (moved from experimental in Next.js 15)
    serverExternalPackages: [],

    // Experimental features
    experimental: {
        // Add experimental features here if needed
    },

    // Redirects for security (remove trailing slashes, enforce HTTPS)
    async redirects() {
        return [
            {
                source: "/(.*)/",
                destination: "/$1",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
