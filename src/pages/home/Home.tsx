import React, { useState, useEffect } from "react";

import Banner from "../../components/banner/Banner";
import CustomTable from "../../components/customTable/CustomTable";
import Navbar from "../../components/navbar/Navbar";

import { IHome } from "./IHome";
import { StyledHome } from "./Home.styles";

import { ILocalStorage } from "../../interfaces";

import { getLocalStorage } from "../../utils";
import { LOCAL_STORAGE_KEY, MOST_POPULOUS_CITIES } from "../../constants";
import { getPlaceWeather } from "../../apis";
import useStickyNav from "../../hooks/useStickyNav";
import useHomeLists from "../../hooks/useHomeLists";

const Home: React.FC<IHome> = ({
    handleGetCityWeather,
    searchValue,
    handleChangeSearchInput,
    onEditFavourites
}): JSX.Element => {
    const { isNavSticky } = useStickyNav();
    const storage: ILocalStorage = getLocalStorage(LOCAL_STORAGE_KEY) as ILocalStorage;

    const {
        handleOnEditTop15,
        top15,
        myFavourites,
        handleOnEditFavourites,
        top15Weather,
        myFavouritesWeather
    } = useHomeLists(storage);

    return (
        <StyledHome>
            <div className={isNavSticky ? "nav-wrapper is-sticky" : "nav-wrapper"}>
                <Navbar
                    handleGetCityWeather={handleGetCityWeather}
                    searchValue={searchValue}
                    handleChangeSearchInput={handleChangeSearchInput}
                />
            </div>

            <Banner
                handleGetCityWeather={handleGetCityWeather}
                searchValue={searchValue}
                handleChangeSearchInput={handleChangeSearchInput}
            />

            <div className="content">
                {myFavouritesWeather.length > 0 && (
                    <section className="content__section">
                        <h3>My Favourites</h3>
                        <CustomTable list={myFavouritesWeather} onRemoveItem={handleOnEditFavourites} />
                    </section>
                )}

                {top15Weather.length > 0 && (
                    <section className="content__section">
                        <h3> Top {top15Weather.length} Most Populous Cities</h3>
                        <CustomTable list={top15Weather} onRemoveItem={handleOnEditTop15} />
                    </section>
                )}
            </div>
        </StyledHome>
    );
};

export default Home;
