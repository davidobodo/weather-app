import React from "react";
import WeatherInfo from "../../components/weatherInfo/WeatherInfo";
import Button from "../../components/button/Button";
import OverlayLoader from "../../components/overlayLoader/OverlayLoader";

//Styles
import { StyledSingleCity } from "./SinglePlace.styles";

//Interfaces
import { ISinglePlace } from "./ISinglePlace";
import { IWeatherData } from "../../interfaces";
import { ILocalStorage } from "../../interfaces";

import { getLocalStorage } from "../../utils";
import { LOCAL_STORAGE_KEY } from "../../constants";

import useSinglePlaceNote from "../../hooks/useSinglePlaceNote";
import useSinglePlaceFavourite from "../../hooks/useSinglePlaceFavourite";
import useSinglePlaceWeatherData from "../../hooks/useSinglePlaceWeatherData";

const SingleCity: React.FC<ISinglePlace> = ({ location, history, onSubmitNote, onEditFavourites }): JSX.Element => {
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
        <StyledSingleCity>
            {gettingWeatherReport && <OverlayLoader />}
            {currentDisplayedWeather && (
                <>
                    <div className="single-city__left-column">
                        <WeatherInfo
                            // name={name}
                            // region={region}
                            // country={country}
                            // timezone={timezone_id}
                            // time={observation_time}
                            // temperature={temperature}
                            // icon={weather_icons[0] || ""}
                            // pressure={pressure}
                            // wind_degree={wind_degree}
                            // wind_dir={wind_dir}
                            // wind_speed={wind_speed}
                            weatherData={currentDisplayedWeather}
                        />
                    </div>
                    <div className="single-city__right-column">
                        <div className="blurred-bg"></div>
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
        </StyledSingleCity>
    );
};

export default SingleCity;
