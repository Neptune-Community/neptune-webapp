import "@testing-library/jest-dom";
import "./__tests__/setup/test-setup";

// Mock Next.js router
jest.mock("next/navigation", () => ({
    useRouter() {
        return {
            push: jest.fn(),
            replace: jest.fn(),
            prefetch: jest.fn(),
            back: jest.fn(),
            forward: jest.fn(),
            refresh: jest.fn(),
        };
    },
    useSearchParams() {
        return new URLSearchParams();
    },
    usePathname() {
        return "/";
    },
}));

// Mock Next.js Image component
jest.mock("next/image", () => ({
    __esModule: true,
    default: (props) => {
        // eslint-disable-next-line @next/next/no-img-element
        return <img {...props} />;
    },
}));

// Mock next-themes
jest.mock("next-themes", () => ({
    useTheme: () => ({
        theme: "light",
        setTheme: jest.fn(),
        systemTheme: "light",
        resolvedTheme: "light",
        themes: ["light", "dark", "system"],
    }),
    ThemeProvider: ({ children }) => children,
}));

// Mock tRPC
jest.mock("@/lib/trpc/react", () => ({
    trpc: {
        useQuery: jest.fn(() => ({
            data: null,
            isLoading: false,
            error: null,
        })),
        useMutation: jest.fn(() => ({
            mutate: jest.fn(),
            mutateAsync: jest.fn(),
            isLoading: false,
            error: null,
        })),
        useUtils: jest.fn(() => ({
            invalidate: jest.fn(),
        })),
    },
}));

// Global test utilities
global.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));

// Mock IntersectionObserver
global.IntersectionObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
}));

// Mock matchMedia
Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});
