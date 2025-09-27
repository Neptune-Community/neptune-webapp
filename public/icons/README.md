# Neptune Community Favicon Files

This directory contains the favicon files for the Neptune Community webapp, featuring the Neptune trident logo.

## Files

- `icon-16x16.png` - 16x16 pixel favicon for browsers
- `icon-32x32.png` - 32x32 pixel favicon for browsers
- `apple-touch-icon.png` - 180x180 pixel icon for iOS devices
- `icon-192.png` - 192x192 pixel icon for Android devices
- `icon-512.png` - 512x512 pixel icon for Android devices

## Favicon Configuration

The favicon is configured in `app/layout.tsx` with the following setup:

- **SVG Favicon**: `/favicon.svg` - Modern browsers that support SVG favicons
- **ICO Favicon**: `/favicon.ico` - Fallback for older browsers
- **PNG Favicons**: Various sizes for different devices and contexts
- **Apple Touch Icon**: For iOS home screen bookmarks
- **Web App Manifest**: For PWA functionality

## Logo Design

The Neptune logo features a trident symbol representing:

- **Power**: The strength of quantum-secure cryptography
- **Protection**: Security and privacy for users
- **Community**: The three prongs representing the community, technology, and privacy

## Production Notes

The current PNG files are placeholder images. For production deployment, replace these with properly converted versions of the Neptune SVG logo:

1. Convert `public/neptune.svg` to PNG format at the required sizes
2. Replace the placeholder PNG files in this directory
3. Ensure proper contrast and visibility at small sizes
4. Test across different browsers and devices

## Browser Support

- ✅ Modern browsers (Chrome, Firefox, Safari, Edge)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ PWA support (Android, iOS)
- ✅ Dark mode compatibility
