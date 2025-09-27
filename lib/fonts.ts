import { readFile } from "node:fs/promises";
import { join } from "node:path";

/**
 * Custom Font Loading Utility
 *
 * This utility loads custom fonts for use in OpenGraph images
 * and other server-side rendering contexts.
 */
export async function loadCustomFont() {
    try {
        const fontData = await readFile(
            join(process.cwd(), "assets/fonts/BauhausBuglerBoldW00-Bold.ttf")
        );
        return fontData;
    } catch (error) {
        console.warn("Custom font not found, falling back to system fonts");
        return null;
    }
}

/**
 * Font configuration for OpenGraph images
 */
export const customFontConfig = {
    name: "NeptuneBrand",
    data: null as Buffer | null,
    style: "normal" as const,
    weight: 700,
};
