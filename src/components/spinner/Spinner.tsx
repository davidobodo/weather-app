import React from "react";

import { ISpinner } from "./ISpinner";
import { StyledSpinner } from "./Spinner.styles";

const Spinner: React.FC<ISpinner> = ({ color = "#000", size = 30, thickness = 2 }): JSX.Element => {
    return (
        <StyledSpinner color={color} size={size} thickness={thickness}>
            <div className="lds-ring" data-testid="spinner-ring-wrapper">
                <div data-testid="spinner-ring"></div>
                <div data-testid="spinner-ring"></div>
                <div data-testid="spinner-ring"></div>
                <div data-testid="spinner-ring"></div>
            </div>
        </StyledSpinner>
    );
};

export default Spinner;
