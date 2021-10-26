import React from "react";

import Banner from "../../components/banner/Banner";
import FavoritesList from "../../components/favoritesList/FavoritesList";

import { IHome } from "./IHome";
import { StyledHome } from "./Home.styles";

const Home: React.FC<IHome> = ({ handleGetCityWeather, searchValue, handleChangeSearchInput }): JSX.Element => {
    return (
        <StyledHome>
            <Banner
                handleGetCityWeather={handleGetCityWeather}
                searchValue={searchValue}
                handleChangeSearchInput={handleChangeSearchInput}
            />

            <section className="favourites">
                <h1>Favourties</h1>
                <FavoritesList />
            </section>
        </StyledHome>
    );
};

export default Home;
