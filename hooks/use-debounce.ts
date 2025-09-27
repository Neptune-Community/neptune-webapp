/**
 * Debounce Hook
 *
 * This hook provides debounced value functionality to delay execution
 * until after a specified delay period has passed.
 *
 * Usage patterns:
 * - Search input debouncing
 * - API call optimization
 * - Form validation delays
 * - Resize event handling
 *
 * Example usage:
 * - const debouncedSearch = useDebounce(searchTerm, 500);
 * - const debouncedValue = useDebounce(value, 300);
 * - const debouncedCallback = useDebounce(callback, 1000);
 */

import { useEffect, useState } from "react";

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // Update debounced value after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cancel the timeout if value changes (also on delay change or unmount)
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

export function useDebouncedCallback<T extends (...args: unknown[]) => unknown>(
  callback: T,
  delay: number,
): T {
  const [debounceTimer, setDebounceTimer] = useState<NodeJS.Timeout | null>(
    null,
  );

  const debouncedCallback = ((...args: Parameters<T>) => {
    if (debounceTimer) {
      clearTimeout(debounceTimer);
    }

    const timer = setTimeout(() => {
      callback(...args);
    }, delay);

    setDebounceTimer(timer);
  }) as T;

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (debounceTimer) {
        clearTimeout(debounceTimer);
      }
    };
  }, [debounceTimer]);

  return debouncedCallback;
}
