import { IWeatherData } from "../interfaces";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

/**
 *
 * @param searchQuery Search string indicating the city to search
 */
export const getPlaceWeather = async (searchQuery: string): Promise<IWeatherData> => {
    try {
        let res = await fetch(`${BASE_URL}?q=${searchQuery}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);

        return res.json();
    } catch (err) {
        throw err;
    }
};

/**
 *
 * @param cities List of cities
 * @returns Array of cities weather details
 */
export const getWeatherInCities = (cities: string[]) => Promise.all(cities.map(getPlaceWeather));

/**
 *
 * @param latitude latitude of location
 * @param longitude longitude of location
 */
export const getUserslocation = async (latitude: number, longitude: number) => {
    try {
        let res = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`
        );
        return res.json();
    } catch (err) {
        throw err;
    }
};
