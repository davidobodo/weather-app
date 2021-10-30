import React, { useState, useEffect } from "react";

import Banner from "../../components/banner/Banner";
import CustomTable from "../../components/customTable/CustomTable";
import Navbar from "../../components/navbar/Navbar";
import TableLoadingShimmer from "../../components/tableLoadingShimmer/TableLoadingShimmer";

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
    onEditFavourites,
    onRemovePopularCity
}): JSX.Element => {
    const { isNavSticky } = useStickyNav();
    const storage: ILocalStorage = getLocalStorage(LOCAL_STORAGE_KEY) as ILocalStorage;

    const {
        handleOnEditMPC,
        handleOnEditFavourites,
        myFavouritesWeather,
        mostPopulousCitiesWeather,
        isLoadingFavouritesWeather,
        myFavourites,
        mostPopulousCities,
        isLoadingMPCWeather
    } = useHomeLists(storage, onEditFavourites, onRemovePopularCity);

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
                {isLoadingFavouritesWeather ? (
                    <TableLoadingShimmer amount={myFavourites.length} />
                ) : myFavouritesWeather.length > 0 ? (
                    <section className="content__section">
                        <h3>My Favourites</h3>
                        <CustomTable list={myFavouritesWeather} onRemoveItem={handleOnEditFavourites} />
                    </section>
                ) : null}

                {isLoadingMPCWeather ? (
                    <TableLoadingShimmer amount={mostPopulousCities.length} />
                ) : mostPopulousCitiesWeather.length > 0 ? (
                    <section className="content__section">
                        <h3> Top {mostPopulousCitiesWeather.length} Most Populous Cities</h3>
                        <CustomTable list={mostPopulousCitiesWeather} onRemoveItem={handleOnEditMPC} />
                    </section>
                ) : null}
            </div>
        </StyledHome>
    );
};

export default Home;
