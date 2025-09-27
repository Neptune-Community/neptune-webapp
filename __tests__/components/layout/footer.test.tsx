import { render, screen } from "@testing-library/react";
import Footer from "@/components/layout/footer";

describe("Footer Component", () => {
    it("renders without crashing", () => {
        render(<Footer />);

        const footer = screen.getByRole("contentinfo");
        expect(footer).toBeInTheDocument();
    });

    it("has correct structure", () => {
        render(<Footer />);

        const footer = screen.getByRole("contentinfo");
        const container = footer.querySelector(".container");

        expect(container).toHaveClass("container", "mx-auto");
    });

    it("is accessible", () => {
        render(<Footer />);

        const footer = screen.getByRole("contentinfo");
        expect(footer).toBeInTheDocument();
    });
});
