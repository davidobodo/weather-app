import React from "react";

import Banner from "../../components/banner/Banner";
import CustomTable from "../../components/customTable/CustomTable";
import Navbar from "../../components/navbar/Navbar";
import TableLoadingShimmer from "../../components/tableLoadingShimmer/TableLoadingShimmer";

import { IHome } from "./IHome";
import { StyledHome } from "./Home.styles";

import { ILocalStorage } from "../../interfaces";

import { getLocalStorage } from "../../utils";
import { LOCAL_STORAGE_KEY } from "../../constants";
import useStickyNav from "../../hooks/useStickyNav";
import useHomeLists from "../../hooks/useHomeLists";
import useDetectUserLocation from "../../hooks/useDetectUserLocation";
import OverlayLoader from "../../components/overlayLoader/OverlayLoader";

const Home: React.FC<IHome> = ({
    handleGetCityWeather,
    searchValue,
    handleChangeSearchInput,
    onEditFavourites,
    onRemovePopularCity
}): JSX.Element => {
    const { isNavSticky } = useStickyNav();
    const storage: ILocalStorage = getLocalStorage(LOCAL_STORAGE_KEY) as ILocalStorage;
    const { isDetectingLocation, usersLocation, usersLocationTemp } = useDetectUserLocation(storage);
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
            {isDetectingLocation && <OverlayLoader text="Fetching your location's weather details..." />}
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
                usersLocation={usersLocation}
                usersLocationTemp={usersLocationTemp}
            />
            <div className="content">
                {isLoadingFavouritesWeather ? (
                    <TableLoadingShimmer amount={myFavourites.length} />
                ) : myFavouritesWeather.length > 0 ? (
                    <section className="content__section">
                        <h2>My Favourites</h2>
                        <CustomTable list={myFavouritesWeather} onRemoveItem={handleOnEditFavourites} />
                    </section>
                ) : null}

                {isLoadingMPCWeather ? (
                    <TableLoadingShimmer amount={mostPopulousCities.length} />
                ) : mostPopulousCitiesWeather.length > 0 ? (
                    <section className="content__section">
                        <h2> Top {mostPopulousCitiesWeather.length} Most Populous Cities</h2>
                        <CustomTable list={mostPopulousCitiesWeather} onRemoveItem={handleOnEditMPC} />
                    </section>
                ) : null}
            </div>
        </StyledHome>
    );
};

export default Home;
