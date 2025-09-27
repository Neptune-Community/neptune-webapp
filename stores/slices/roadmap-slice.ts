import type { StateCreator } from "zustand";

export interface RoadmapState {
  selectedYear: string;
  setSelectedYear: (year: string) => void;
}

export const createRoadmapSlice: StateCreator<RoadmapState> = (set) => ({
  selectedYear: "all",
  setSelectedYear: (year) => set({ selectedYear: year }),
});
