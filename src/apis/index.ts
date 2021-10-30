const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

/**
 *
 * @param searchQuery Search string indicating the city to search
 */
export const getPlaceWeather = async (searchQuery: string): Promise<any> => {
    try {
        let res: any = await fetch(`${BASE_URL}?q=${searchQuery}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);

        res = await res.json();
        return res;
    } catch (err) {
        throw err;
    }
};

/**
 * Description of the function
 * @param cities List of cities
 * @returns Array of cities weather details
 */

export const getWeatherInCities = (cities: string[]) => Promise.all(cities.map(getPlaceWeather));

export const getUserslocation = async (latitude: number, longitude: number) => {
    try {
        let res: any = await fetch(
            `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`
        );
        res = await res.json();

        return res;
    } catch (err) {
        throw err;
    }
};
