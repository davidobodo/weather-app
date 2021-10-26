import React from "react";

import { StyledWeatherInfo } from "./WeatherInfo.styles";
import { IWeatherInfo } from "./IWeatherInfo";

const WeatherInfo: React.FC<IWeatherInfo> = ({
    name,
    region,
    country,
    timezone,
    time,
    temperature,
    icon,
    pressure,
    wind_degree,
    wind_dir,
    wind_speed
}): JSX.Element => {
    return (
        <StyledWeatherInfo>
            <p>{name}</p>
            <p>{region}</p>
            <p>{country}</p>
            <p>{timezone}</p>
            <p>{time}</p>
            <p>{temperature}</p>
            <p>{icon}</p>
            <p>{pressure}</p>
            <p>{wind_degree}</p>
            <p>{wind_dir}</p>
            <p>{wind_speed}</p>
        </StyledWeatherInfo>
    );
};

export default WeatherInfo;
