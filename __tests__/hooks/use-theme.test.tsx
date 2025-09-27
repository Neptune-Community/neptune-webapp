import { renderHook } from "@testing-library/react";
import { useTheme } from "@/hooks/use-theme";

// Mock next-themes
jest.mock("next-themes", () => ({
  useTheme: () => ({
    theme: "light",
    setTheme: jest.fn(),
    systemTheme: "light",
    resolvedTheme: "light",
    themes: ["light", "dark", "system"],
    mounted: true,
  }),
}));

describe("useTheme Hook", () => {
  it("returns theme information", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe("light");
    expect(result.current.systemTheme).toBe("light");
    expect(result.current.resolvedTheme).toBe("light");
    expect(result.current.mounted).toBe(true);
  });

  it("provides theme toggle functionality", () => {
    const { result } = renderHook(() => useTheme());

    expect(typeof result.current.toggleTheme).toBe("function");
    expect(typeof result.current.setTheme).toBe("function");
  });

  it("provides theme state helpers", () => {
    const { result } = renderHook(() => useTheme());

    expect(typeof result.current.isDark).toBe("boolean");
    expect(typeof result.current.isLight).toBe("boolean");
    expect(typeof result.current.isSystem).toBe("boolean");
  });
});
