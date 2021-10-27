import React from "react";

import Backdrop from "../backdrop/Backdrop";
import Spinner from "../spinner/Spinner";

import { StyledOverlayLoader } from "./OverlayLoader.styles";

const OverlayLoader = (): JSX.Element => {
    return (
        <StyledOverlayLoader>
            <Backdrop />
            <Spinner />
        </StyledOverlayLoader>
    );
};

export default OverlayLoader;
