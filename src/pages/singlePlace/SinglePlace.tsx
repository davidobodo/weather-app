import React, { useState, useEffect } from "react";

import WeatherInfo from "../../components/weatherInfo/WeatherInfo";

import { StyledSingleCity } from "./SinglePlace.styles";
import { ISinglePlace } from "./ISinglePlace";

import { getPlaceWeather } from "../../apis";

import { IWeatherData } from "../../interfaces";

const SingleCity: React.FC<ISinglePlace> = ({ location, history }): JSX.Element => {
    const place = location.search || "";

    //Current displayed weather
    const [currentDisplayedWeather, setCurrentDisplayedWeather] = useState<IWeatherData>();
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
            requestPlaceWeather(place);
        } else {
            //If user visits this url without any place query
            history.push("/");
        }
    }, [place, history]);

    if (gettingWeatherReport) {
        return <h1>Loading...</h1>;
    }

    const { current, location: _location } = currentDisplayedWeather as IWeatherData;
    const { name, region, country, timezone_id } = _location;
    const { observation_time, temperature, weather_icons, pressure, wind_degree, wind_dir, wind_speed } = current;

    return (
        <StyledSingleCity>
            <div className="single-city__left-column">
                <WeatherInfo
                    name={name}
                    region={region}
                    country={country}
                    timezone={timezone_id}
                    time={observation_time}
                    temperature={temperature}
                    icon={weather_icons[0] || ""}
                    pressure={pressure}
                    wind_degree={wind_degree}
                    wind_dir={wind_dir}
                    wind_speed={wind_speed}
                />
            </div>
            <div className="single-city__right-column">
                <button>Add to favourites</button>
                <form action="">
                    <div className="form-field">
                        <label htmlFor="notes">Notes</label>
                        <textarea name="notes" id="notes" cols={30} rows={10}></textarea>
                    </div>
                    <div>
                        <button>Clear</button>
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </StyledSingleCity>
    );
};

export default SingleCity;
