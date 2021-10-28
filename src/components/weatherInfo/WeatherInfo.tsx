import React from "react";

import { StyledWeatherInfo } from "./WeatherInfo.styles";
import { IWeatherInfo } from "./IWeatherInfo";

import { IWeatherData } from "../../interfaces";

const WeatherInfo: React.FC<IWeatherInfo> = ({ weatherData }): JSX.Element => {
    const { weather, main, wind, name, sys } = weatherData as IWeatherData;

    const { temp: temperature, pressure, humidity } = main;
    const { description, icon } = weather[0];

    const { speed: wind_speed, deg: wind_degree } = wind;

    return (
        <StyledWeatherInfo>
            <div className="top-section">
                <div className="top-section__temp-details">
                    <h1 className="temp">{(temperature - 273).toFixed(1)}&deg; C</h1>
                    <h1>{description}</h1>

                    <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                </div>

                <div className="top-section__place">
                    <h2 className="city">{name}</h2>
                    {/* <h3 className="country">{sys.country}</h3> */}
                    {/* <p className="time">
                        {time} {timezone}
                    </p> */}
                </div>
            </div>

            <div className="bottom-section">
                <div className="col">
                    <h3>Pressure</h3>
                    <h3>{pressure} hPa</h3>
                </div>
                <div className="col">
                    <h3>Humidity</h3>
                    <h3>{humidity} %</h3>
                </div>
                <div className="col">
                    <h3>Wind Degree</h3>
                    <h3>{wind_degree} &deg;</h3>
                </div>

                <div className="col">
                    <h3>Wind Speed</h3>
                    <h3>{wind_speed} m/s</h3>
                </div>
            </div>
        </StyledWeatherInfo>
    );
};

export default WeatherInfo;
