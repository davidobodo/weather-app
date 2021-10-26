import React from "react";
import { Link, useLocation } from "react-router-dom";

import Search from "../search/Search";
import { StyledNavbar } from "./Navbar.styles";
import { INavbar } from "./INavbar";

const Navbar: React.FC<INavbar> = ({ handleGetCityWeather, searchValue, handleChangeSearchInput }): JSX.Element => {
    const location = useLocation();
    return (
        <StyledNavbar>
            <Link to="/">app logo</Link>

            {location.pathname.includes("place") && (
                <Search
                    handleGetCityWeather={handleGetCityWeather}
                    searchValue={searchValue}
                    handleChangeSearchInput={handleChangeSearchInput}
                />
            )}

            <span></span>
        </StyledNavbar>
    );
};

export default Navbar;
