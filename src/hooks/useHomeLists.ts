import { useState, useEffect } from "react";

import { MOST_POPULOUS_CITIES } from "../constants";
import { getWeatherInCities } from "../apis";
import { ILocalStorage, IWeatherData } from "../interfaces";
import { showErrorToast } from "../utils";

const useHomeLists = (storage: ILocalStorage) => {
    const [top15, setTopI5] = useState<string[]>(MOST_POPULOUS_CITIES.sort());
    const [top15Weather, setTop15Weather] = useState<IWeatherData[]>([]);
    const handleOnEditTop15 = (place: string) => {
        const newList = top15.filter((item: string) => item !== place);
        setTopI5(newList);
        // onEditFavourites(place);
    };

    const [myFavourites, setMyFavourites] = useState<string[]>(storage?.favourites || []);
    const [myFavouritesWeather, setMyFavouritesWeather] = useState<IWeatherData[]>([]);
    const handleOnEditFavourites = (place: string) => {
        const newList = myFavourites.filter((item: string) => item !== place);
        setMyFavourites(newList);
        // onEditFavourites(place);
    };

    useEffect(() => {
        const fetchTop15Data = async () => {
            try {
                const res = await getWeatherInCities(top15);
                setTop15Weather(res);
            } catch (err) {
                console.log(err);
                showErrorToast("Oops couldnt fetch temperature for cities");
            }
        };

        const fetchMyFavouritesData = async () => {
            try {
                const res = await getWeatherInCities(myFavourites);
                setMyFavouritesWeather(res);
            } catch (err) {
                console.log(err);
                showErrorToast("Oops couldnt fetch temperature for cities");
            }
        };

        if (myFavourites.length > 0) {
            fetchMyFavouritesData();
        }

        if (top15.length > 0) {
            fetchTop15Data();
        }
    }, []);

    return {
        handleOnEditTop15,
        top15,
        myFavourites,
        handleOnEditFavourites,
        top15Weather,
        myFavouritesWeather
    };
};

export default useHomeLists;
