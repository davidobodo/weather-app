import React, { useState } from "react";

import Banner from "../../components/banner/Banner";
import FavoritesList from "../../components/favoritesList/FavoritesList";

import { IHome } from "./IHome";
import { StyledHome } from "./Home.styles";

import { ILocalStorage } from "../../interfaces";

import { getLocalStorage } from "../../utils";
import { LOCAL_STORAGE_KEY } from "../../constants";

const Home: React.FC<IHome> = ({
    handleGetCityWeather,
    searchValue,
    handleChangeSearchInput,
    onEditFavourites
}): JSX.Element => {
    const storage: ILocalStorage = getLocalStorage(LOCAL_STORAGE_KEY) as ILocalStorage;

    const [myFavourites, setMyfavourites] = useState<string[]>(storage.favourites);

    const handleOnEditFavourites = (place: string) => {
        const newList = myFavourites.filter((item: string) => item !== place);
        setMyfavourites(newList);
        onEditFavourites(place);
    };

    return (
        <StyledHome>
            <Banner
                handleGetCityWeather={handleGetCityWeather}
                searchValue={searchValue}
                handleChangeSearchInput={handleChangeSearchInput}
            />

            <section className="favourites">
                <h1>Favourties</h1>
                <FavoritesList list={myFavourites} onEditFavourites={handleOnEditFavourites} />
            </section>
        </StyledHome>
    );
};

export default Home;
