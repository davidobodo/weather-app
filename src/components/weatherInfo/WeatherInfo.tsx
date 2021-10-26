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
            <p>{name}</p>
            <p>{region}</p>
            <p>{country}</p>
            <p>{timezone}</p>
            <p>{time}</p>
            <p>{temperature}</p>
            <p>{weather_icons[0]}</p>
            <p>{pressure}</p>
            <p>{wind_degree}</p>
            <p>{wind_dir}</p>
            <p>{wind_speed}</p>
        </StyledWeatherInfo>
    );
};

export default WeatherInfo;
