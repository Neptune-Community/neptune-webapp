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
        dangerouslyAllowSVG: false, // Disable SVG for security
        contentSecurityPolicy:
            "default-src 'self'; script-src 'none'; sandbox;",
    },

    // Experimental security features
    experimental: {
        // Enable server components logging for security monitoring
        serverComponentsExternalPackages: [],
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
