import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../tests/CustomRender";
import Spinner from "./Spinner";

test("When no prop is passed in, default props should take effect", () => {
    render(<Spinner />);

    const ringWrapper = screen.getByTestId("spinner-ring-wrapper");
    const rings = screen.getAllByTestId("spinner-ring");

    expect(ringWrapper).toHaveStyle("width: 30px;height: 30px;");
    rings.forEach((ring) => {
        expect(ring).toHaveStyle(
            "width: 30px; height: 30px; border: 2px solid #000; border-color: #000 transparent transparent transparent"
        );
    });
});

test("Passed in color prop, size prop and thickness prop should take effect", () => {
    const color = "red";
    const size = 100;
    const thickness = 2;
    render(<Spinner color={color} size={size} thickness={thickness} />);

    const ringWrapper = screen.getByTestId("spinner-ring-wrapper");
    const rings = screen.getAllByTestId("spinner-ring");

    expect(ringWrapper).toHaveStyle(`width: ${size}px;height: ${size}px;`);
    rings.forEach((ring) => {
        expect(ring).toHaveStyle(
            `width: ${size}px; height: ${size}px; border: ${thickness}px solid ${color}; border-color: ${color} transparent transparent transparent`
        );
    });
});
