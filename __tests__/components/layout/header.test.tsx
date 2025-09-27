import { render, screen } from "@testing-library/react";
import Header from "@/components/layout/header";

describe("Header Component", () => {
    it("renders without crashing", () => {
        render(<Header />);

        const header = screen.getByRole("banner");
        expect(header).toBeInTheDocument();
    });

    it("has correct structure", () => {
        render(<Header />);

        const header = screen.getByRole("banner");
        const container = header.querySelector(".container");

        expect(container).toHaveClass("container", "mx-auto");
    });

    it("is accessible", () => {
        render(<Header />);

        const header = screen.getByRole("banner");
        expect(header).toBeInTheDocument();
    });
});
