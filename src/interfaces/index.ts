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

export interface IWeatherData {
    current: {
        cloudcover: number;
        feelslike: number;
        humidity: number;
        is_day: string;
        observation_time: string;
        precip: number;
        pressure: number;
        temperature: number;
        uv_index: number;
        visibility: number;
        weather_code: number;
        weather_description: string[];
        weather_icons: string[];
        wind_degree: number;
        wind_dir: string;
        wind_speed: number;
    };
    location: {
        country: string;
        lat: string;
        localtime: string;
        localtime_epoch: number;
        lon: string;
        name: string;
        region: string;
        timezone_id: string;
        utc_offset: string;
    };
    request: {
        language: string;
        query: string;
        type: string;
        unit: string;
    };
}

export interface ILocalStorage {
    notes?: any;
    favourites?: any;
    top15?: any;
}
