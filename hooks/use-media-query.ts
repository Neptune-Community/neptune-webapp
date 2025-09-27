/**
 * Media Query Hook
 *
 * This hook provides responsive design functionality by detecting
 * media query matches and providing reactive updates.
 *
 * Usage patterns:
 * - Responsive component rendering
 * - Conditional styling
 * - Mobile/desktop specific logic
 * - Breakpoint detection
 *
 * Example usage:
 * - const isMobile = useMediaQuery("(max-width: 768px)");
 * - const isDark = useMediaQuery("(prefers-color-scheme: dark)");
 * - const isHover = useMediaQuery("(hover: hover)");
 */

import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia(query);

    // Set initial value
    setMatches(media.matches);

    // Create event listener
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    // Add listener
    media.addEventListener("change", listener);

    // Cleanup
    return () => {
      media.removeEventListener("change", listener);
    };
  }, [query]);

  return matches;
}

// Common breakpoint hooks
export function useBreakpoint() {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
  const isDesktop = useMediaQuery("(min-width: 1025px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1440px)");

  return {
    isMobile,
    isTablet,
    isDesktop,
    isLargeDesktop,
    isSmallScreen: isMobile,
    isMediumScreen: isTablet,
    isLargeScreen: isDesktop || isLargeDesktop,
  };
}

// Device capability hooks
export function useDeviceCapabilities() {
  const isHover = useMediaQuery("(hover: hover)");
  const isTouch = useMediaQuery("(pointer: coarse)");
  const isRetina = useMediaQuery("(-webkit-min-device-pixel-ratio: 2)");
  const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const isReducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  return {
    isHover,
    isTouch,
    isRetina,
    isDarkMode,
    isReducedMotion,
  };
}
