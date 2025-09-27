/**
 * Custom Hooks Index
 *
 * This module exports all custom hooks for centralized access.
 * Provides a single import point for all hook functionality.
 *
 * Usage patterns:
 * - Import all hooks: import * as Hooks from "@/hooks";
 * - Import specific hooks: import { useTrpc, useLocalStorage } from "@/hooks";
 * - Re-export for convenience
 *
 * Example usage:
 * - import { useTrpc, useLocalStorage } from "@/hooks";
 * - import { useDebounce, useMediaQuery, useTheme } from "@/hooks";
 */

export { useDebounce, useDebouncedCallback } from "./use-debounce";

// Utility hooks
export { useLocalStorage } from "./use-local-storage";
export {
  useBreakpoint,
  useDeviceCapabilities,
  useMediaQuery,
} from "./use-media-query";
export { useTheme } from "./use-theme";
// tRPC hooks
export { trpc, useOptimisticUpdate, useTrpcUtils } from "./use-trpc";

// Additional utility hooks can be added here
// export { usePrevious } from "./use-previous";
// export { useInterval } from "./use-interval";
// export { useTimeout } from "./use-timeout";
// export { useClickOutside } from "./use-click-outside";
// export { useKeyPress } from "./use-key-press";
// export { useScroll } from "./use-scroll";
// export { useWindowSize } from "./use-window-size";
