import React from "react";
import { Link } from "react-router-dom";

import Search from "../search/Search";
import { StyledNavbar } from "./Navbar.styles";
import { INavbar } from "./INavbar";

const Navbar: React.FC<INavbar> = ({ handleGetCityWeather, searchValue, handleChangeSearchInput }): JSX.Element => {
    return (
        <StyledNavbar>
            <Link to="/">app logo</Link>
            <Search
                handleGetCityWeather={handleGetCityWeather}
                searchValue={searchValue}
                handleChangeSearchInput={handleChangeSearchInput}
            />
            <span></span>
        </StyledNavbar>
    );
};

export default Navbar;
