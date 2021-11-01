import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../tests/CustomRender";
import OverlayLoader from "./OverlayLoader";

test("By default component display loading as the text", () => {
    render(<OverlayLoader />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("Passed in text should be displayed in loader", () => {
    render(<OverlayLoader text="This is the custom loader" />);
    expect(screen.getByText("This is the custom loader")).toBeInTheDocument();
});
