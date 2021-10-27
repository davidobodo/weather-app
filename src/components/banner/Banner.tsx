import React from "react";

import SearchBar from "../search/Search";

import { StyledBanner } from "./Banner.styles";
import { IBanner } from "./IBanner";

const Banner: React.FC<IBanner> = ({ handleGetCityWeather, searchValue, handleChangeSearchInput }): JSX.Element => {
    return (
        <StyledBanner className="banner">
            <h1>Know the weather</h1>
            <SearchBar
                handleGetCityWeather={handleGetCityWeather}
                searchValue={searchValue}
                handleChangeSearchInput={handleChangeSearchInput}
            />
        </StyledBanner>
    );
};

export default Banner;
