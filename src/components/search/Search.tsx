import React from "react";
import SearchIcon from "../../assets/icons/SearchIcon";
import { ISearch } from "../../interfaces";
import { StyledSearch } from "./Search.styles";

const Search: React.FC<ISearch> = ({
    handleGetCityWeather,
    searchValue,
    handleChangeSearchInput,
    isInteractive = false
}): JSX.Element => {
    return (
        <StyledSearch onSubmit={handleGetCityWeather} className="search-form" isInteractive={isInteractive}>
            <input type="text" placeholder="Enter a city..." value={searchValue} onChange={handleChangeSearchInput} />
            <button type="submit">
                <SearchIcon />
            </button>
        </StyledSearch>
    );
};

export default Search;
