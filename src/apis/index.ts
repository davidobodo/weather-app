const BASE_URL = "http://api.weatherstack.com";
/**
 *
 * @param searchQuery Search string indicating the city to search
 */
export const getPlaceWeather = async (searchQuery: string) => {
    try {
        let res: any = await fetch(
            `${BASE_URL}/current?access_key=${process.env.REACT_APP_WEATHERSTACK_API}&query=${searchQuery}`
        );

        res = await res.json();

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
