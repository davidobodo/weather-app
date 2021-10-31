import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./CustomRender";
import Backdrop from "../components/backdrop/Backdrop";

test("Backdrop renders by default with color: rgba(255,255,255,0.9)", () => {
    render(<Backdrop />);
    expect(screen.getByTestId("backdrop")).toHaveStyle("background-color:rgba(255,255,255,0.9) ");
});

test("Backdrop renders with passed in prop color", () => {
    render(<Backdrop color="#fff" />);
    expect(screen.getByTestId("backdrop")).toHaveStyle("background-color:#fff");
});
