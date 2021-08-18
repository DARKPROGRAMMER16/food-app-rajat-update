import "@testing-library/jest-dom";
import * as React from "react";
import { render, screen } from "@testing-library/react";
// import "match-media";
import Routes from "../Routes";
import { Provider } from "react-redux";
import initStore from "../../store";

test("Routes Render Test with Home Page", () => {
    render(
        <React.StrictMode>
            <Provider store={initStore()}>
                <Routes />
            </Provider>
        </React.StrictMode>
    );
    expect(screen.getByText(/About Food/i)).toBeInTheDocument();
});
