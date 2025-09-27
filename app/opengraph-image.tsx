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
export const runtime = "edge";

export const alt = "My Webapp - Production Ready Next.js Application";
export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export default async function Image() {
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
                    <h1
                        style={{
                            fontSize: "72px",
                            fontWeight: "bold",
                            color: "#ffffff",
                            margin: "0 0 20px 0",
                            lineHeight: 1.2,
                        }}
                    >
                        My Webapp
                    </h1>
                    <p
                        style={{
                            fontSize: "32px",
                            color: "#a1a1aa",
                            margin: "0 0 40px 0",
                            maxWidth: "800px",
                        }}
                    >
                        Production Ready Next.js Application with shadcn/ui,
                        tRPC, and Zustand
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
                                backgroundColor: "#3b82f6",
                                borderRadius: "8px",
                                color: "#ffffff",
                                fontSize: "18px",
                                fontWeight: "600",
                            }}
                        >
                            Next.js 15
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
                            TypeScript
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
                            tRPC
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
