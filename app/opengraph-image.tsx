import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

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
    // Load the Neptune logo from public folder
    const logoData = await readFile(join(process.cwd(), "public/neptune.svg"));
    const logoSrc = `data:image/svg+xml;base64,${logoData.toString("base64")}`;

    // Load custom font (optional - will fallback to system fonts if not found)
    let customFont = null;
    try {
        customFont = await readFile(
            join(process.cwd(), "assets/fonts/BauhausBuglerBoldW00-Bold.ttf")
        );
    } catch (error) {
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
                    {/* Neptune Logo */}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "30px",
                        }}
                    >
                        <img
                            src={logoSrc}
                            alt="Neptune Logo"
                            width="80"
                            height="80"
                            style={{
                                marginRight: "20px",
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
