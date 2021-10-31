import React from "react";
import { StyledBackdrop } from "./Backdrop.styles";

const Backdrop = ({ color = "rgba(255,255,255,1)" }): JSX.Element => {
    return <StyledBackdrop className="backdrop" color={color} data-testid="backdrop"></StyledBackdrop>;
};

export default Backdrop;
