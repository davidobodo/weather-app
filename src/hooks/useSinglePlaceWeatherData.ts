import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getPlaceWeather } from "../apis";

import { IWeatherData, ILocalStorage } from "../interfaces";

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
    const [currentDisplayedWeather, setCurrentDisplayedWeather] = useState<IWeatherData | null>(null);
    const [gettingWeatherReport, setGettingWeatherReport] = useState(true);
    const [noWeatherData, setNoWeatherData] = useState(false);

    const requestPlaceWeather = async (place: string) => {
        try {
            const res: any = await getPlaceWeather(place);

            if (res.success === false) {
                setNoWeatherData(true);
                setCurrentDisplayedWeather(null);
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
