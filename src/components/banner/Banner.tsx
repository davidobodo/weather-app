import React from "react";

import SearchBar from "../search/Search";

import { StyledBanner } from "./Banner.styles";
import { IBanner } from "./IBanner";

const Banner: React.FC<IBanner> = ({ handleGetCityWeather }): JSX.Element => {
    return (
        <StyledBanner>
            <h1>Know the weather</h1>
            <SearchBar onSubmit={handleGetCityWeather} />
        </StyledBanner>
    );
};

export default Banner;
