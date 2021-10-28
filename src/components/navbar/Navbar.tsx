import React from "react";

import Search from "../search/Search";
import { StyledNavbar } from "./Navbar.styles";
import { INavbar } from "./INavbar";

const Navbar: React.FC<INavbar> = ({ handleGetCityWeather, searchValue, handleChangeSearchInput }): JSX.Element => {
    return (
        <StyledNavbar>
            <Search
                handleGetCityWeather={handleGetCityWeather}
                searchValue={searchValue}
                handleChangeSearchInput={handleChangeSearchInput}
            />
        </StyledNavbar>
    );
};

export default Navbar;
