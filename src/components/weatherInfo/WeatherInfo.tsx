import React from "react";

import { StyledWeatherInfo } from "./WeatherInfo.styles";
import { IWeatherInfo } from "./IWeatherInfo";

import { IWeatherData } from "../../interfaces";

const WeatherInfo: React.FC<IWeatherInfo> = ({ weatherData }): JSX.Element => {
    const { current, location: _location } = weatherData as IWeatherData;
    const { name, region, country, timezone_id: timezone } = _location;
    const { observation_time: time, temperature, weather_icons, pressure, wind_degree, wind_dir, wind_speed } = current;
    return (
        <StyledWeatherInfo>
            <h1 className="temp">{temperature}&deg; C</h1>
            <h2 className="city">{name}</h2>
            {/* <p>{name}</p> */}
            {/* <p>{region}</p> */}
            <h4 className="country">{country}</h4>
            <p className="time">
                {time} {timezone}
            </p>

            <img src={weather_icons[0]} alt="" />
            <p>Pressure : {pressure}</p>
            <p>Wind Degree : {wind_degree}</p>
            <p>Wind Direction: {wind_dir}</p>
            <p>Wind Speed: {wind_speed} km/hr</p>
        </StyledWeatherInfo>
    );
};

export default WeatherInfo;
