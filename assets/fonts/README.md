# Custom Fonts

This directory contains custom fonts for the Neptune Community webapp.

## Font Structure

```
assets/fonts/
├── README.md
├── fonts.css          # CSS font definitions
└── BauhausBuglerBoldW00-Bold.ttf  # Custom Bauhaus Bugler Bold font
```

## Setup Instructions

1. **Font File**: The Bauhaus Bugler Bold font is already configured and ready to use

2. **Update CSS**: The `fonts.css` file is already configured to load your font with the family name `NeptuneBrand`

3. **Usage in Components**: Use the CSS classes:

   - `.font-brand` - For regular text
   - `.font-brand-bold` - For bold text

4. **Usage in OpenGraph Images**: The font is automatically loaded in OpenGraph image generation

## Font Loading

The font is loaded using:

- **CSS @font-face**: For web components and branding
- **Node.js readFile**: For OpenGraph image generation
- **Font-display: swap**: For optimal loading performance

## Fallbacks

If the custom font fails to load, the system will fallback to:

- `system-ui` for OpenGraph images
- `system-ui, -apple-system, sans-serif` for web components

## Performance

- Fonts are loaded with `font-display: swap` for better performance
- OpenGraph images include font loading with error handling
- CSS is imported in `globals.css` for global availability
