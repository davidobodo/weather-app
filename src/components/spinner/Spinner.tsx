import React from "react";

import { ISpinner } from "./ISpinner";
import { StyledSpinner } from "./Spinner.styles";

const Spinner: React.FC<ISpinner> = ({ color = "#000", size = 50, thickness = 5 }): JSX.Element => {
    return (
        <StyledSpinner color={color} size={size} thickness={thickness}>
            <div className="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </StyledSpinner>
    );
};

export default Spinner;
