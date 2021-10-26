import React from "react";

import SearchIcon from "../../assets/icons/SearchIcon";
import { ISearch } from "../../interfaces";

const Search: React.FC<ISearch> = ({ handleGetCityWeather, searchValue, handleChangeSearchInput }): JSX.Element => {
    return (
        <form onSubmit={handleGetCityWeather}>
            <input type="text" placeholder="Enter a city..." value={searchValue} onChange={handleChangeSearchInput} />
            <button type="submit">
                <SearchIcon />
            </button>
        </form>
    );
};

export default Search;
