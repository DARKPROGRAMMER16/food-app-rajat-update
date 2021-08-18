import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../index";
import FooterMenu from "../FooterMenu";
import { BrowserRouter } from "react-router-dom";

test("Footer Render Test", () => {
    render(<Footer />);
    expect(screen.getByText(/Copyright/i)).toBeInTheDocument();
});

test("Footer Menu Render Test", () => {
    render(
        <BrowserRouter>
            <FooterMenu />
        </BrowserRouter>
    );

    expect(screen.getByText(/ABOUT Food/i)).toBeInTheDocument();
    expect(screen.getByText(/FOR FOODIES/i)).toBeInTheDocument();
    expect(screen.getByText(/FOR RESTAURANTS/i)).toBeInTheDocument();
});
