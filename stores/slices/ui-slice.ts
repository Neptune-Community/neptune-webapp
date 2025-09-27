import type { StateCreator } from "zustand";

export interface UIState {
    // Dialog states
    donationDialogOpen: boolean;
    setDonationDialogOpen: (open: boolean) => void;

    // Mobile navigation
    mobileNavOpen: boolean;
    setMobileNavOpen: (open: boolean) => void;

    // Copy states
    copied: boolean;
    setCopied: (copied: boolean) => void;
}

export const createUISlice: StateCreator<UIState> = (set) => ({
    // Dialog states
    donationDialogOpen: false,
    setDonationDialogOpen: (open) => set({ donationDialogOpen: open }),

    // Mobile navigation
    mobileNavOpen: false,
    setMobileNavOpen: (open) => set({ mobileNavOpen: open }),

    // Copy states
    copied: false,
    setCopied: (copied) => set({ copied }),
});
