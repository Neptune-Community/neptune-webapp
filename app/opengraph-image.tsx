import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

/**
 * OpenGraph Image Generator
 *
 * This generates dynamic OpenGraph images for social media sharing.
 * According to Next.js App Router conventions, this file:
 * - Must be named "opengraph-image.tsx"
 * - Can be placed at any route segment level
 * - Generates images using the ImageResponse API
 */

export const alt =
    "Neptune Community - Quantum-Secure Anonymous Cryptocurrency";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
    // Load the Neptune logo from public folder (with error handling)
    let logoSrc = "";
    try {
        // Try multiple possible paths for the logo
        const possiblePaths = [
            join(process.cwd(), "public/neptune.svg"),
            join(process.cwd(), "neptune.svg"),
            join(process.cwd(), "..", "public/neptune.svg"),
            join(process.cwd(), "..", "neptune.svg"),
            "./public/neptune.svg",
            "./neptune.svg",
        ];

        let logoData = null;
        for (const path of possiblePaths) {
            try {
                logoData = await readFile(path);
                break;
            } catch (_pathError) {
                // Try next path
            }
        }

        if (logoData) {
            logoSrc = `data:image/svg+xml;base64,${logoData.toString(
                "base64"
            )}`;
        } else {
            // Use a fallback - create a simple SVG logo inline
            logoSrc = `data:image/svg+xml;base64,${Buffer.from(
                `
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="40" cy="40" r="35" fill="#1e40af" stroke="#ffffff" stroke-width="2"/>
                    <text x="40" y="45" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="16" font-weight="bold">N</text>
                </svg>
            `
            ).toString("base64")}`;
        }
    } catch (error) {
        // Logo not found, will use a fallback or skip logo
        console.warn("Neptune logo not found, using fallback:", error);
        // Use a fallback - create a simple SVG logo inline
        logoSrc = `data:image/svg+xml;base64,${Buffer.from(
            `
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="35" fill="#1e40af" stroke="#ffffff" stroke-width="2"/>
                <text x="40" y="45" text-anchor="middle" fill="#ffffff" font-family="Arial, sans-serif" font-size="16" font-weight="bold">N</text>
            </svg>
        `
        ).toString("base64")}`;
    }

    // Load custom font (optional - will fallback to system fonts if not found)
    let customFont = null;
    try {
        customFont = await readFile(
            join(process.cwd(), "assets/fonts/BauhausBuglerBoldW00-Bold.ttf")
        );
    } catch (_error) {
        // Font not found, will use system fonts
    }

    return new ImageResponse(
        (
            <div
                style={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#0a0a0a",
                    backgroundImage:
                        "linear-gradient(45deg, #0a0a0a 0%, #1a1a1a 100%)",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "40px",
                        textAlign: "center",
                    }}
                >
                    {/* Neptune Logo - only render if logo was loaded successfully */}
                    {logoSrc && (
                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                marginBottom: "30px",
                            }}
                        >
                            <div
                                style={{
                                    width: "80px",
                                    height: "80px",
                                    marginRight: "20px",
                                    backgroundImage: `url(${logoSrc})`,
                                    backgroundSize: "contain",
                                    backgroundRepeat: "no-repeat",
                                    backgroundPosition: "center",
                                    filter: "brightness(0) invert(1)", // Make logo white
                                }}
                            />
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "flex-start",
                                }}
                            >
                                <h1
                                    style={{
                                        fontSize: "64px",
                                        fontWeight: "bold",
                                        color: "#ffffff",
                                        margin: "0",
                                        lineHeight: 1,
                                        fontFamily: customFont
                                            ? "NeptuneBrand"
                                            : "system-ui",
                                    }}
                                >
                                    Neptune
                                </h1>
                                <p
                                    style={{
                                        fontSize: "24px",
                                        color: "#a1a1aa",
                                        margin: "0",
                                        lineHeight: 1,
                                        fontFamily: customFont
                                            ? "NeptuneBrand"
                                            : "system-ui",
                                    }}
                                >
                                    community
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Fallback title if no logo */}
                    {!logoSrc && (
                        <div
                            style={{
                                fontSize: "64px",
                                fontWeight: "bold",
                                color: "#ffffff",
                                fontFamily: customFont
                                    ? "NeptuneBrand"
                                    : "system-ui",
                                marginBottom: "30px",
                                textAlign: "center",
                            }}
                        >
                            Neptune Community
                        </div>
                    )}

                    <p
                        style={{
                            fontSize: "32px",
                            color: "#a1a1aa",
                            margin: "0 0 40px 0",
                            maxWidth: "800px",
                        }}
                    >
                        Quantum-Secure Anonymous Cryptocurrency
                    </p>
                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            alignItems: "center",
                        }}
                    >
                        <div
                            style={{
                                padding: "12px 24px",
                                backgroundColor: "#1e40af",
                                borderRadius: "8px",
                                color: "#ffffff",
                                fontSize: "18px",
                                fontWeight: "600",
                            }}
                        >
                            zk-STARKs
                        </div>
                        <div
                            style={{
                                padding: "12px 24px",
                                backgroundColor: "#10b981",
                                borderRadius: "8px",
                                color: "#ffffff",
                                fontSize: "18px",
                                fontWeight: "600",
                            }}
                        >
                            Post-Quantum
                        </div>
                        <div
                            style={{
                                padding: "12px 24px",
                                backgroundColor: "#8b5cf6",
                                borderRadius: "8px",
                                color: "#ffffff",
                                fontSize: "18px",
                                fontWeight: "600",
                            }}
                        >
                            Anonymous
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
            fonts: customFont
                ? [
                      {
                          name: "NeptuneBrand",
                          data: customFont,
                          style: "normal",
                          weight: 700,
                      },
                  ]
                : [],
        }
    );
}
