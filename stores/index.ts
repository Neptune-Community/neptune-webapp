import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { createRoadmapSlice, type RoadmapState } from "./slices/roadmap-slice";
import { createUISlice, type UIState } from "./slices/ui-slice";

// Combined store type
export type AppState = RoadmapState & UIState;

// Create the store with middleware
export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (...args) => ({
        ...createRoadmapSlice(...args),
        ...createUISlice(...args),
      }),
      {
        name: "neptune-app-store",
        // Only persist certain parts of the state
        partialize: (state) => ({
          selectedYear: state.selectedYear,
        }),
      },
    ),
    {
      name: "neptune-app-store",
    },
  ),
);

// Selector hooks for performance optimization
export const useRoadmapStore = () => {
  const selectedYear = useAppStore((state) => state.selectedYear);
  const setSelectedYear = useAppStore((state) => state.setSelectedYear);

  return { selectedYear, setSelectedYear };
};

export const useUIStore = () => {
  const donationDialogOpen = useAppStore((state) => state.donationDialogOpen);
  const setDonationDialogOpen = useAppStore(
    (state) => state.setDonationDialogOpen,
  );
  const mobileNavOpen = useAppStore((state) => state.mobileNavOpen);
  const setMobileNavOpen = useAppStore((state) => state.setMobileNavOpen);
  const copied = useAppStore((state) => state.copied);
  const setCopied = useAppStore((state) => state.setCopied);

  return {
    donationDialogOpen,
    setDonationDialogOpen,
    mobileNavOpen,
    setMobileNavOpen,
    copied,
    setCopied,
  };
};
