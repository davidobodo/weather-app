import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { MemoryRouter } from "react-router-dom";

import { defaultTheme } from "../styles/Themes";

const AllTheProviders: React.FC = ({ children }) => {
    return (
        <MemoryRouter>
            <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
        </MemoryRouter>
    );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) => {
    return render(ui, { wrapper: AllTheProviders, ...options });
};
export * from "@testing-library/react";
export { customRender as render };
