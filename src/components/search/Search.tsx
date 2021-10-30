import React from "react";
import SearchIcon from "../../assets/icons/SearchIcon";
import { ISearch } from "../../interfaces";
import { StyledSearch } from "./Search.styles";

const Search: React.FC<ISearch> = ({ handleGetCityWeather, searchValue, handleChangeSearchInput }): JSX.Element => {
    return (
        <StyledSearch onSubmit={handleGetCityWeather} className="search-form">
            <input type="text" placeholder="Enter a city..." value={searchValue} onChange={handleChangeSearchInput} />
            <i>
                <SearchIcon />
            </i>
        </StyledSearch>
    );
};

export default Search;
