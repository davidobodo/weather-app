import React from "react";
import { Link } from "react-router-dom";

import WeatherInfo from "../../components/weatherInfo/WeatherInfo";
import WeatherInfoCtas from "../../components/weatherInfoCtas/WeatherInfoCtas";
import OverlayLoader from "../../components/overlayLoader/OverlayLoader";
import SearchBar from "../../components/search/Search";
import { StyledSinglePlace } from "./SinglePlace.styles";
import { ISinglePlace } from "./ISinglePlace";
import { ILocalStorage } from "../../interfaces";
import { getLocalStorageItem, getWeatherImg } from "../../utils";
import { LOCAL_STORAGE_KEY } from "../../constants";
import useSinglePlaceNote from "../../hooks/useSinglePlaceNote";
import useSinglePlaceFavourite from "../../hooks/useSinglePlaceFavourite";
import useSinglePlaceWeatherData from "../../hooks/useSinglePlaceWeatherData";

const SingleCity: React.FC<ISinglePlace> = ({
    location,
    onSubmitNote,
    onEditFavourites,
    handleChangeSearchInput,
    handleGetCityWeather,
    searchValue
}): JSX.Element => {
    const storage = getLocalStorageItem<ILocalStorage>(LOCAL_STORAGE_KEY);
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

    const bgImg =
        currentDisplayedWeather?.weather && currentDisplayedWeather?.weather[0]
            ? currentDisplayedWeather.weather[0].description
            : "";

    return (
        <StyledSinglePlace bgImg={getWeatherImg(bgImg)}>
            {gettingWeatherReport && <OverlayLoader text="Fetching Weather details..." />}

            <div className="single-place__left-column">
                <header className="single-place__left-column__header">
                    <Link to="/">Home</Link>
                    <SearchBar
                        handleGetCityWeather={handleGetCityWeather}
                        searchValue={searchValue}
                        handleChangeSearchInput={handleChangeSearchInput}
                    />
                </header>
                {currentDisplayedWeather && <WeatherInfo weatherData={currentDisplayedWeather} />}
                {noWeatherData && <h1 className="empty-note">Oops. No data for "{place}"</h1>}
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
