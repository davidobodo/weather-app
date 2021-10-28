// const BASE_URL = "http://api.weatherstack.com";

const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
/**
 *
 * @param searchQuery Search string indicating the city to search
 */
export const getPlaceWeather = async (searchQuery: string) => {
    try {
        // let res: any = await fetch(
        //     `${BASE_URL}/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API}&query=${searchQuery}`
        // );
        let res: any = await fetch(`${BASE_URL}?q=${searchQuery}&appid=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`);

        res = await res.json();

        console.log(res, "TEH FINAL RESPONSE");

        // if (res.success === false) {
        //     throw res;
        // } else {
        //     return res;
        // }

        return res;
    } catch (err) {
        throw err;
    }
};
