/**
 * Theme Hook
 *
 * This hook provides theme management functionality using next-themes.
 * Handles theme switching, system preference detection, and persistence.
 *
 * Usage patterns:
 * - Theme switching (light/dark/system)
 * - Theme state management
 * - System preference detection
 * - Theme persistence
 *
 * Example usage:
 * - const { theme, setTheme, systemTheme } = useTheme();
 * - const { resolvedTheme, themes } = useTheme();
 * - const { mounted } = useTheme();
 */

import { useTheme as useNextTheme } from "next-themes";
import { useEffect, useState } from "react";

export function useTheme() {
  const { theme, setTheme, systemTheme, resolvedTheme, themes } =
    useNextTheme();

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const isDark = resolvedTheme === "dark";
  const isLight = resolvedTheme === "light";
  const isSystem = theme === "system";

  return {
    theme,
    setTheme,
    systemTheme,
    resolvedTheme,
    themes,
    mounted: isMounted,
    toggleTheme,
    isDark,
    isLight,
    isSystem,
  };
}
