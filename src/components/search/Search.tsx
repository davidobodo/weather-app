import React from "react";

import SearchIcon from "../../assets/icons/SearchIcon";
import { ISearch } from "./ISearch";

const Search: React.FC<ISearch> = ({ onSubmit }): JSX.Element => {
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Enter a city..." />
            <button type="submit">
                <SearchIcon />
            </button>
        </form>
    );
};

export default Search;
