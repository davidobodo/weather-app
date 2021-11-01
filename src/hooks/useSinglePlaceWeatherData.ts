import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getPlaceWeather } from "../apis";

import { IWeatherData, ILocalStorage } from "../interfaces";
import { showErrorToast } from "../utils";

const useSinglePlaceWeatherData = (
    place: string,
    storage: ILocalStorage | null,
    setNote: React.Dispatch<React.SetStateAction<string>>,
    setIsAmongFavourites: React.Dispatch<React.SetStateAction<boolean>>
) => {
    const history = useHistory();

    //-------------------------------------------------------
    //Current displayed weather
    //-------------------------------------------------------
    const [currentDisplayedWeather, setCurrentDisplayedWeather] = useState<IWeatherData | null>(null);
    const [gettingWeatherReport, setGettingWeatherReport] = useState(true);
    const [noWeatherData, setNoWeatherData] = useState(false);

    const requestPlaceWeather = async (place: string) => {
        setGettingWeatherReport(true);
        try {
            const res = await getPlaceWeather(place);

            //When there is no data for that specific city
            if (res.cod === 404) {
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
        if (place.length) {
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
