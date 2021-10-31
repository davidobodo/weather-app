import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { render } from "./CustomRender";
import Button from "../components/button/Button";
import { defaultTheme } from "../styles/Themes";

test("Button should display passed in text", () => {
    render(<Button type="button" text="Please Submit..." />);
    expect(screen.getByText("Please Submit...")).toBeInTheDocument();
});

test("Button should have passed in 'button' attribute", () => {
    render(<Button type="button" text="Please Submit..." />);
    expect(screen.getByTestId("button")).toHaveAttribute("type", "button");
});

test("Button should have passed in 'reset' attribute", () => {
    render(<Button type="reset" text="Please Submit..." />);
    expect(screen.getByTestId("button")).toHaveAttribute("type", "reset");
});

test("Button should have normal color when no variant is passed into it ", () => {
    render(<Button type="button" text="Please Submit..." />);
    expect(screen.getByTestId("button")).toHaveStyle(`background-color: ${defaultTheme.colors.red}`);
});

test("Button should change color based on variant prop", () => {
    render(<Button type="button" text="Please Submit..." variant="outlined" />);
    expect(screen.getByTestId("button")).toHaveStyle("background-color: #fff");
});

test("Button click handler should be called when a user clicks on the button", () => {
    const onClick = jest.fn();
    render(<Button type="button" text="Please Submit..." variant="outlined" onClick={onClick} />);

    userEvent.click(screen.getByTestId("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
});
