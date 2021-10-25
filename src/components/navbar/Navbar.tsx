import React from "react";
import { Link } from "react-router-dom";

import { StyledNavbar } from "./Navbar.styles";
const Navbar = (): JSX.Element => {
    return (
        <StyledNavbar>
            <Link to="/">app logo</Link>
        </StyledNavbar>
    );
};

export default Navbar;
