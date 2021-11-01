import React from "react";

import Backdrop from "../backdrop/Backdrop";
import Spinner from "../spinner/Spinner";

import { StyledOverlayLoader } from "./OverlayLoader.styles";
import { IOverlayLoader } from "./IOverlayLoader";

const OverlayLoader: React.FC<IOverlayLoader> = ({ text = "Loading..." }): JSX.Element => {
    return (
        <StyledOverlayLoader>
            <Backdrop />
            <p>{text}</p>
            <Spinner />
        </StyledOverlayLoader>
    );
};

export default OverlayLoader;
