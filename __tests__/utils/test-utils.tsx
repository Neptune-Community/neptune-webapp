import { type RenderOptions, render } from "@testing-library/react";
import { ThemeProvider } from "next-themes";
import type React from "react";
import type { ReactElement } from "react";

// Mock providers for testing
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options });

// Mock tRPC provider
export const mockTrpcProvider = (children: React.ReactNode) => {
  return <div data-testid="trpc-provider">{children}</div>;
};

// Test data factories
export const createMockUser = (overrides = {}) => ({
  id: "1",
  email: "test@example.com",
  name: "Test User",
  role: "user",
  ...overrides,
});

export const createMockPost = (overrides = {}) => ({
  id: "1",
  title: "Test Post",
  content: "This is a test post",
  published: true,
  createdAt: new Date().toISOString(),
  ...overrides,
});

// Custom matchers (these are now handled by @testing-library/jest-dom)
// export const expectToBeInTheDocument = (element: HTMLElement | null) => {
//   expect(element).toBeInTheDocument();
// };

// export const expectToHaveClass = (element: HTMLElement, className: string) => {
//   expect(element).toHaveClass(className);
// };

// Re-export everything
export * from "@testing-library/react";
export { customRender as render };
