import { useState, useEffect } from "react";
import { getWeatherInCities } from "../apis";
import { ILocalStorage, IHomePageTableRow } from "../interfaces";
import { showErrorToast, extractNameAndTemperature } from "../utils";
import { MOST_POPULOUS_CITIES } from "../constants";

const useHomeLists = (
    storage: ILocalStorage | null,
    onEditFavourites: (place: string) => void,
    onRemovePopularCity: (place: string) => void
) => {
    //-------------------------------------------------------
    //FAVOURITES TABLE LOGIC
    //-------------------------------------------------------
    const myFavourites = storage?.favourites?.sort() || [];
    const [isLoadingFavouritesWeather, setIsLoadingFavouritesWeather] = useState(myFavourites.length > 0);
    const [myFavouritesWeather, setMyFavouritesWeather] = useState<IHomePageTableRow[]>([]);
    const handleOnEditFavourites = (place: string) => {
        const newList = myFavouritesWeather.filter((item: IHomePageTableRow) => {
            return item.name !== place;
        });
        setMyFavouritesWeather(newList);
        onEditFavourites(place);
    };
    useEffect(() => {
        if (myFavourites.length > 0) {
            (async function () {
                try {
                    const res = await getWeatherInCities(myFavourites);
                    setMyFavouritesWeather(extractNameAndTemperature(res, myFavourites));
                } catch (err) {
                    showErrorToast("Oops! Couldn't fetch temperature for your favourites cities");
                } finally {
                    setIsLoadingFavouritesWeather(false);
                }
            })();
        }
    }, []);

    //-------------------------------------------------------
    //MOST POPULOUS TABLE LOGIC
    //-------------------------------------------------------
    const mostPopulousCities = storage?.mostPopulousCities?.sort() || MOST_POPULOUS_CITIES.sort();
    const [isLoadingMPCWeather, setIsLoadingMPCWeather] = useState(mostPopulousCities.length > 0);
    const [mostPopulousCitiesWeather, setMostPopulousCitiesWeather] = useState<IHomePageTableRow[]>([]);
    const handleOnEditMPC = (place: string) => {
        const newList = mostPopulousCitiesWeather.filter((item: IHomePageTableRow) => {
            return item.name !== place;
        });
        setMostPopulousCitiesWeather(newList);
        onRemovePopularCity(place);
    };

    useEffect(() => {
        if (mostPopulousCities.length > 0) {
            (async function () {
                try {
                    const res = await getWeatherInCities(mostPopulousCities);
                    setMostPopulousCitiesWeather(extractNameAndTemperature(res, mostPopulousCities));
                } catch (err) {
                    showErrorToast("Oops couldnt fetch temperature for cities");
                } finally {
                    setIsLoadingMPCWeather(false);
                }
            })();
        }
    }, []);

    return {
        handleOnEditMPC,
        handleOnEditFavourites,
        myFavourites,
        myFavouritesWeather,
        isLoadingFavouritesWeather,
        mostPopulousCitiesWeather,
        mostPopulousCities,
        isLoadingMPCWeather
    };
};

export default useHomeLists;
