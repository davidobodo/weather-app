/**
 * File contains only global interfaces, specific interfaces can be found in the folder associated to that interface
 */

import { Location, History } from "history";

export interface ILocation extends Location {}
export interface IHistory extends History {}

export interface ISearch {
    handleGetCityWeather: (e: React.FormEvent<HTMLFormElement>) => void;
    searchValue: string;
    handleChangeSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// export interface IWeatherData {
//     current: {
//         cloudcover: number;
//         feelslike: number;
//         humidity: number;
//         is_day: string;
//         observation_time: string;
//         precip: number;
//         pressure: number;
//         temperature: number;
//         uv_index: number;
//         visibility: number;
//         weather_code: number;
//         weather_descriptions: string[];
//         weather_icons: string[];
//         wind_degree: number;
//         wind_dir: string;
//         wind_speed: number;
//     };
//     location: {
//         country: string;
//         lat: string;
//         localtime: string;
//         localtime_epoch: number;
//         lon: string;
//         name: string;
//         region: string;
//         timezone_id: string;
//         utc_offset: string;
//     };
//     request: {
//         language: string;
//         query: string;
//         type: string;
//         unit: string;
//     };
// }

export interface ILocalStorage {
    notes?: any;
    favourites?: any;
    top15?: any;
}

interface IWeather {
    description: string;
    icon: string;
    id: number;
    main: string;
}

export interface IWeatherData {
    base: string;
    clouds: {
        all: number;
    };
    coord: {
        lon: number;
        lat: number;
    };
    cod: number;
    dt: number;
    id: number;
    main: {
        feels_like: number;
        grnd_level: number;
        humidity: number;
        pressure: number;
        sea_level: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    };
    name: string;
    rain: {
        "1h": number;
    };
    sys: {
        country: string;
        id: number;
        sunrise: number;
        sunset: number;
        type: number;
    };
    timezone: number;
    visibility: number;
    weather: IWeather[];
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
}
