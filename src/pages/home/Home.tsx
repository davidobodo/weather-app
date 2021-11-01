import React, { FC } from "react";
import Banner from "../../components/banner/Banner";
import CustomTable from "../../components/customTable/CustomTable";
import Navbar from "../../components/navbar/Navbar";
import TableLoadingShimmer from "../../components/tableLoadingShimmer/TableLoadingShimmer";
import OverlayLoader from "../../components/overlayLoader/OverlayLoader";
import { IHome } from "./IHome";
import { ILocalStorage } from "../../interfaces";
import { StyledHome } from "./Home.styles";
import { getLocalStorageItem } from "../../utils";
import { LOCAL_STORAGE_KEY } from "../../constants";
import useStickyNav from "../../hooks/useStickyNav";
import useHomeLists from "../../hooks/useHomeLists";
import useDetectUserLocation from "../../hooks/useDetectUserLocation";

const Home: FC<IHome> = ({
    handleGetCityWeather,
    searchValue,
    handleChangeSearchInput,
    onEditFavourites,
    onRemovePopularCity
}) => {
    const { isNavSticky } = useStickyNav();
    const storage = getLocalStorageItem<ILocalStorage>(LOCAL_STORAGE_KEY);
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
                        <h2>Top {mostPopulousCitiesWeather.length} Most Populous Cities</h2>
                        <CustomTable list={mostPopulousCitiesWeather} onRemoveItem={handleOnEditMPC} />
                    </section>
                ) : null}
            </div>
        </StyledHome>
    );
};

export default Home;
