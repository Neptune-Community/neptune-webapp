/**
 * Test Setup Configuration
 *
 * This file contains global test setup and configuration
 * for the testing environment.
 */

// Global test timeout
jest.setTimeout(10000);

// Mock environment variables
process.env.NODE_ENV = "test";
process.env.NEXTAUTH_SECRET = "test-secret";
process.env.NEXTAUTH_URL = "http://localhost:3000";

// Mock console methods in test environment
const originalError = console.error;
const originalWarn = console.warn;

beforeAll(() => {
    // Suppress console.error and console.warn in tests unless explicitly needed
    console.error = (...args: any[]) => {
        if (
            typeof args[0] === "string" &&
            args[0].includes("Warning: ReactDOM.render is no longer supported")
        ) {
            return;
        }
        originalError.call(console, ...args);
    };

    console.warn = (...args: any[]) => {
        if (
            typeof args[0] === "string" &&
            (args[0].includes("componentWillReceiveProps") ||
                args[0].includes("componentWillMount"))
        ) {
            return;
        }
        originalWarn.call(console, ...args);
    };
});

afterAll(() => {
    console.error = originalError;
    console.warn = originalWarn;
});

// Clean up after each test
afterEach(() => {
    // Clear all mocks
    jest.clearAllMocks();

    // Clear localStorage
    if (typeof window !== "undefined") {
        window.localStorage.clear();
    }

    // Clear sessionStorage
    if (typeof window !== "undefined") {
        window.sessionStorage.clear();
    }
});
