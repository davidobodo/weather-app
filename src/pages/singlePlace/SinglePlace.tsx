import React from "react";
import { Link } from "react-router-dom";
import WeatherInfo from "../../components/weatherInfo/WeatherInfo";
import WeatherInfoCtas from "../../components/weatherInfoCtas/WeatherInfoCtas";
import OverlayLoader from "../../components/overlayLoader/OverlayLoader";
import SearchBar from "../../components/search/Search";
//Styles
import { StyledSinglePlace } from "./SinglePlace.styles";

//Interfaces
import { ISinglePlace } from "./ISinglePlace";
import { IWeatherData } from "../../interfaces";
import { ILocalStorage } from "../../interfaces";

import { getLocalStorage, getWeatherImg } from "../../utils";
import { LOCAL_STORAGE_KEY } from "../../constants";

import useSinglePlaceNote from "../../hooks/useSinglePlaceNote";
import useSinglePlaceFavourite from "../../hooks/useSinglePlaceFavourite";
import useSinglePlaceWeatherData from "../../hooks/useSinglePlaceWeatherData";

import AppLogo from "../../assets/icons/AppLogo.svg";

const SingleCity: React.FC<ISinglePlace> = ({
    location,
    history,
    onSubmitNote,
    onEditFavourites,
    handleChangeSearchInput,
    handleGetCityWeather,
    searchValue
}): JSX.Element => {
    const storage: ILocalStorage = getLocalStorage(LOCAL_STORAGE_KEY) as ILocalStorage;
    const place = new URLSearchParams(location.search).get("value") || "";

    const { note, handleSubmitNote, handleClearNote, handleUpdateNote, setNote } = useSinglePlaceNote(
        onSubmitNote,
        place
    );
    const { isAmongFavourites, handleUpdateFavourites, setIsAmongFavourites } = useSinglePlaceFavourite(
        onEditFavourites,
        place
    );

    const { gettingWeatherReport, currentDisplayedWeather, noWeatherData } = useSinglePlaceWeatherData(
        place,
        storage,
        setNote,
        setIsAmongFavourites
    );

    return (
        <StyledSinglePlace
            bgImg={getWeatherImg(currentDisplayedWeather ? currentDisplayedWeather.weather[0].description : "")}
        >
            {gettingWeatherReport && <OverlayLoader />}
            <div className="single-place__left-column">
                <header className="single-place__left-column__header">
                    <Link to="/">
                        {/* <img src={AppLogo} alt="" /> */}
                        Home
                    </Link>
                    <SearchBar
                        handleGetCityWeather={handleGetCityWeather}
                        searchValue={searchValue}
                        handleChangeSearchInput={handleChangeSearchInput}
                        isInteractive={true}
                    />
                </header>
                {currentDisplayedWeather && <WeatherInfo weatherData={currentDisplayedWeather} />}
                {!currentDisplayedWeather && !gettingWeatherReport && (
                    <h1 className="empty-note">Oops no data for "{place}"</h1>
                )}
            </div>
            <div className="single-place__right-column">
                {currentDisplayedWeather && (
                    <WeatherInfoCtas
                        place={place}
                        note={note}
                        isAmongFavourites={isAmongFavourites}
                        handleClearNote={handleClearNote}
                        handleUpdateFavourites={handleUpdateFavourites}
                        handleSubmitNote={handleSubmitNote}
                        handleUpdateNote={handleUpdateNote}
                    />
                )}
            </div>
        </StyledSinglePlace>
    );
};

export default SingleCity;
