import React from "react";
import { Link } from "react-router-dom";
import WeatherInfo from "../../components/weatherInfo/WeatherInfo";
import Button from "../../components/button/Button";
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
            {currentDisplayedWeather && (
                <>
                    <div className="single-city__left-column">
                        <header className="single-city__left-column__header">
                            <Link to="/">
                                <img src={AppLogo} alt="" />
                            </Link>

                            <SearchBar
                                handleGetCityWeather={handleGetCityWeather}
                                searchValue={searchValue}
                                handleChangeSearchInput={handleChangeSearchInput}
                                isInteractive={true}
                            />
                        </header>
                        <WeatherInfo weatherData={currentDisplayedWeather} />
                    </div>
                    <div className="single-city__right-column">
                        <div className="single-city__right-column__content">
                            <div className="btn-favourite">
                                <Button
                                    type="button"
                                    text={
                                        isAmongFavourites
                                            ? `Remove ${place} from Favourites`
                                            : `Add ${place} to favourites`
                                    }
                                    onClick={handleUpdateFavourites}
                                />
                            </div>

                            <form onSubmit={handleSubmitNote}>
                                <div className="form-field">
                                    <label htmlFor="notes">{place} Notes</label>
                                    <textarea
                                        name="notes"
                                        id="notes"
                                        cols={30}
                                        rows={10}
                                        value={note}
                                        onChange={handleUpdateNote}
                                    ></textarea>
                                </div>
                                <div className="single-city__right-column__cta">
                                    <Button
                                        type="reset"
                                        text="Clear"
                                        variant="outlined"
                                        onClick={handleClearNote}
                                        fluid={false}
                                    />
                                    <Button type="submit" text="Save" fluid={false} />
                                </div>
                            </form>
                        </div>
                    </div>
                </>
            )}

            {noWeatherData && <h1>Sorry no data for that location</h1>}
        </StyledSinglePlace>
    );
};

export default SingleCity;
