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

export interface ILocalStorage {
    notes?: any;
    favourites?: any;
    mostPopulousCities?: any;
    usersLocation?: string;
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
    weather: {
        description: string;
        icon: string;
        id: number;
        main: string;
    }[];
    wind: {
        speed: number;
        deg: number;
        gust: number;
    };
}

export interface IHomePageTableRow {
    name: string;
    temperature: number;
}
