import React from "react";

import { IButton } from "./IButton";
import { StyledButton } from "./Button.styles";

const Button: React.FC<IButton> = ({ type, text, onClick, fluid = true, variant }): JSX.Element => {
    return (
        <StyledButton type={type} onClick={onClick} fluid={fluid} className={variant}>
            {text}
        </StyledButton>
    );
};

export default Button;
