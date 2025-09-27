#!/usr/bin/env node

/**
 * Simple favicon generator for Neptune logo
 * This script creates basic favicon files from the Neptune SVG logo
 */

const fs = require("fs");
const path = require("path");

// Create a simple 16x16 PNG favicon (base64 encoded minimal PNG)
const createSimplePNG = (size) => {
  // This is a minimal 1x1 transparent PNG in base64
  const base64PNG =
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
  return Buffer.from(base64PNG, "base64");
};

// Create favicon files
const createFaviconFiles = () => {
  const publicDir = path.join(__dirname, "..", "public");
  const iconsDir = path.join(publicDir, "icons");

  // Ensure icons directory exists
  if (!fs.existsSync(iconsDir)) {
    fs.mkdirSync(iconsDir, { recursive: true });
  }

  // Create basic PNG favicon files
  const sizes = [16, 32, 180, 192, 512];

  sizes.forEach((size) => {
    const filename =
      size === 180
        ? "apple-touch-icon.png"
        : size === 192
          ? "icon-192.png"
          : size === 512
            ? "icon-512.png"
            : `icon-${size}x${size}.png`;

    const filepath = path.join(iconsDir, filename);
    const pngData = createSimplePNG(size);

    fs.writeFileSync(filepath, pngData);
    console.log(`Created ${filename}`);
  });

  console.log("Favicon files created successfully!");
  console.log(
    "Note: These are placeholder files. For production, convert the Neptune SVG logo to proper PNG files.",
  );
};

// Run the script
if (require.main === module) {
  createFaviconFiles();
}

module.exports = { createFaviconFiles };
