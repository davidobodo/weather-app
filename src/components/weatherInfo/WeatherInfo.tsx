import React from "react";

import { StyledWeatherInfo } from "./WeatherInfo.styles";
import { IWeatherInfo } from "./IWeatherInfo";

import { IWeatherData } from "../../interfaces";

const WeatherInfo: React.FC<IWeatherInfo> = ({ weatherData }): JSX.Element => {
    // const { current, location: _location } = weatherData as IWeatherData;
    // const { name, region, country, timezone_id: timezone } = _location;
    // const {
    //     observation_time: time,
    //     temperature,
    //     weather_icons,
    //     weather_descriptions,
    //     pressure,
    //     wind_degree,
    //     wind_dir,
    //     wind_speed
    // } = current;

    const { weather, main, wind, name } = weatherData as IWeatherData;

    const { temp: temperature, pressure, humidity } = main;
    const { description } = weather[0];

    const { speed: wind_speed, deg: wind_degree } = wind;

    return (
        <StyledWeatherInfo>
            <div className="top-section">
                <div>
                    <h1 className="temp">{temperature}&deg; C</h1>
                    <h1>{description}</h1>
                </div>

                <div className="top-section__place">
                    <h2 className="city">{name}</h2>
                    {/* <h3 className="country">{country}</h3> */}

                    {/* <p className="time">
                        {time} {timezone}
                    </p> */}
                </div>
            </div>

            {/* <div className="bottom-section">
                <p>Pressure ------------------------------ {pressure}</p>
                <p>Wind Degree --------------------------- {wind_degree}</p>
                <p>Wind Direction ------------------------ {wind_dir}</p>
                <p>Wind Speed ---------------------------- {wind_speed} km/hr</p>
            </div> */}
            <div className="bottom-section">
                <div className="col">
                    <h3>Pressure</h3>
                    <h3>{pressure}</h3>
                </div>
                <div className="col">
                    <h3>Wind Degree</h3>
                    <h3>{wind_degree}</h3>
                </div>
                {/* <div className="col">
                    <h3>Wind Direction</h3>
                    <h3>{wind_dir}</h3>
                </div> */}
                <div className="col">
                    <h3>Wind Speed</h3>
                    <h3>{wind_speed}</h3>
                </div>
                {/* <p>Pressure ------------------------------ {pressure}</p>
                <p>Wind Degree --------------------------- {wind_degree}</p>
                <p>Wind Direction ------------------------ {wind_dir}</p>
                <p>Wind Speed ---------------------------- {wind_speed} km/hr</p> */}
            </div>
            {/* <p>{name}</p> */}
            {/* <p>{region}</p> */}

            {/* <img src={weather_icons[0]} alt="" /> */}
        </StyledWeatherInfo>
    );
};

export default WeatherInfo;
