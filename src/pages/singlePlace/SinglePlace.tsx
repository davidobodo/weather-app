import React, { useState, useEffect } from "react";
import WeatherInfo from "../../components/weatherInfo/WeatherInfo";
import Button from "../../components/button/Button";
import OverlayLoader from "../../components/overlayLoader/OverlayLoader";

//Styles
import { StyledSingleCity } from "./SinglePlace.styles";

//Apis
import { getPlaceWeather } from "../../apis";

//Interfaces
import { ISinglePlace } from "./ISinglePlace";
import { IWeatherData } from "../../interfaces";
import { ILocalStorage } from "../../interfaces";

import { getLocalStorage } from "../../utils";
import { LOCAL_STORAGE_KEY } from "../../constants";

const SingleCity: React.FC<ISinglePlace> = ({ location, history, onSubmitNote, onEditFavourites }): JSX.Element => {
    const storage: ILocalStorage = getLocalStorage(LOCAL_STORAGE_KEY) as ILocalStorage;
    const place = new URLSearchParams(location.search).get("value") || "";

    //-------------------------------------------------------
    //Place Notes
    //-------------------------------------------------------
    const [note, setNote] = useState("");
    const handleUpdateNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote(e.target.value);
    };

    const handleSubmitNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmitNote(place, note);
    };

    const handleClearNote = () => {
        setNote("");
        onSubmitNote(place, "");
    };

    //-------------------------------------------------------
    //Favourites
    //-------------------------------------------------------
    const [isAmongFavourites, setIsAmongFavourites] = useState(false);
    const handleUpdateFavourites = () => {
        setIsAmongFavourites(!isAmongFavourites);
        onEditFavourites(place);
    };

    //-------------------------------------------------------
    //Current displayed weather
    //-------------------------------------------------------
    const [currentDisplayedWeather, setCurrentDisplayedWeather] = useState<IWeatherData | null>(null);
    const [gettingWeatherReport, setGettingWeatherReport] = useState(true);

    const requestPlaceWeather = async (place: string) => {
        try {
            const res: IWeatherData = await getPlaceWeather(place);

            setCurrentDisplayedWeather(res);
            //TODO: Clear search input
        } catch (err) {
            console.log(err, "THE ERROR");
        } finally {
            setGettingWeatherReport(false);
        }
    };

    useEffect(() => {
        if (place.length > 0) {
            //Check for notes
            if (storage?.notes && storage.notes[place]) {
                setNote(storage.notes[place]);
            } else {
                setNote("");
            }

            //Check for Favourites
            if (storage?.favourites) {
                const isPresent = storage?.favourites.find(
                    (item: string) => item.toLowerCase() === place.toLowerCase()
                );

                if (isPresent) {
                    setIsAmongFavourites(true);
                } else {
                    setIsAmongFavourites(false);
                }
            }

            setCurrentDisplayedWeather(null);
            requestPlaceWeather(place);
        } else {
            //If user visits this url without any place query
            history.push("/");
        }
    }, [place, history]);
    //-------------------------------------------------------
    //-------------------------------------------------------
    //-------------------------------------------------------

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
                        <div className="btn-favourite">
                            <Button
                                type="button"
                                text={isAmongFavourites ? "Remove from Favourites" : "Add to favourites"}
                                onClick={handleUpdateFavourites}
                            />
                        </div>

                        <form onSubmit={handleSubmitNote}>
                            <div className="form-field">
                                <label htmlFor="notes">Notes</label>
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
                </>
            )}
        </StyledSingleCity>
    );
};

export default SingleCity;
