import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getPlaceWeather } from "../apis";

import { IWeatherData, ILocalStorage } from "../interfaces";
import { showErrorToast } from "../utils";

const DUMMY_DATA = {
    request: {
        type: "City",
        query: "New York, United States of America",
        language: "en",
        unit: "m"
    },
    location: {
        name: "New York",
        country: "United States of America",
        region: "New York",
        lat: "40.714",
        lon: "-74.006",
        timezone_id: "America/New_York",
        localtime: "2019-09-07 08:14",
        localtime_epoch: 1567844040,
        utc_offset: "-4.0"
    },
    current: {
        observation_time: "12:14 PM",
        temperature: 13,
        weather_code: 113,
        weather_icons: ["https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0001_sunny.png"],
        weather_descriptions: ["Sunny"],
        wind_speed: 0,
        wind_degree: 349,
        wind_dir: "N",
        pressure: 1010,
        precip: 0,
        humidity: 90,
        cloudcover: 0,
        feelslike: 13,
        uv_index: 4,
        visibility: 16,
        is_day: ""
    }
};

const useSinglePlaceWeatherData = (
    place: string,
    storage: ILocalStorage,
    setNote: React.Dispatch<React.SetStateAction<string>>,
    setIsAmongFavourites: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const history = useHistory();

    //-------------------------------------------------------
    //Current displayed weather
    //-------------------------------------------------------
    const [currentDisplayedWeather, setCurrentDisplayedWeather] = useState<IWeatherData | null>();
    // const [currentDisplayedWeather, setCurrentDisplayedWeather] = useState(DUMMY_DATA);
    const [gettingWeatherReport, setGettingWeatherReport] = useState(true);
    const [noWeatherData, setNoWeatherData] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setGettingWeatherReport(false);
        }, 3000);
    }, []);

    const requestPlaceWeather = async (place: string) => {
        try {
            const res: any = await getPlaceWeather(place);

            if (res.cod === "404") {
                setNoWeatherData(true);
                setCurrentDisplayedWeather(null);
                showErrorToast(`Oops no data for ${place}`);
            } else {
                setCurrentDisplayedWeather(res);
            }

            //TODO: Clear search input
        } catch (err) {
            console.log(err, "THE ERROR");
        } finally {
            setGettingWeatherReport(false);
        }
    };

    useEffect(() => {
        if (place.length > 0) {
            //Check for notes
            if (storage?.notes && storage.notes[place]) {
                setNote(storage.notes[place]);
            } else {
                setNote("");
            }

            //Check for Favourites
            if (storage?.favourites) {
                const isPresent = storage?.favourites.find(
                    (item: string) => item.toLowerCase() === place.toLowerCase()
                );

                if (isPresent) {
                    setIsAmongFavourites(true);
                } else {
                    setIsAmongFavourites(false);
                }
            }

            setNoWeatherData(false);
            setCurrentDisplayedWeather(null);
            requestPlaceWeather(place);
        } else {
            //If user visits this url without any place query
            history.push("/");
        }
    }, [place, history]);

    return {
        gettingWeatherReport,
        currentDisplayedWeather,
        noWeatherData
    };
};

export default useSinglePlaceWeatherData;
