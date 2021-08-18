import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Reviews from "../Reviews";

describe("<Reviews />", () => {
    const children = "Reviews";

    it("should render a children", () => {
        render(<Reviews>{children}</Reviews>);

        expect(screen.getByText(children)).toBeDefined();
    });
});
