import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";

import { defaultTheme } from "../styles/Themes";

const AllTheProviders: React.FC = ({ children }) => {
    return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
    return render(ui, { wrapper: AllTheProviders, ...options });
};
export * from "@testing-library/react";
export { customRender as render };
