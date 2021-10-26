import { useEffect } from "react";

import { getLocalStorage, setLocalStorage } from "../utils";

import { ILocalStorage } from "../interfaces";
import { LOCAL_STORAGE_KEY, MOST_POPULOUS_CITIES } from "../constants";

const useAppStorage = () => {
    //-------------------------------------------------------
    //Notes - Storage
    //-------------------------------------------------------
    const onSubmitNote = (place: string, note: string) => {
        let storage: ILocalStorage = getLocalStorage(LOCAL_STORAGE_KEY) as ILocalStorage;

        storage = {
            ...storage,
            notes: {
                ...storage.notes,
                [place]: note
            }
        };
        setLocalStorage(LOCAL_STORAGE_KEY, storage);
    };

    //-------------------------------------------------------
    //Favourites - Storage
    //-------------------------------------------------------
    const onEditFavourites = (place: string) => {
        let storage: ILocalStorage = getLocalStorage(LOCAL_STORAGE_KEY) as ILocalStorage;

        //Check if its currently among favourites
        const isPresent = storage.favourites.find((item: string) => item === place);
        if (isPresent) {
            const filteredFavourites = storage.favourites.filter((item: string) => {
                return item !== place;
            });
            storage = {
                ...storage,
                favourites: filteredFavourites
            };
        } else {
            storage = {
                ...storage,
                favourites: [...storage.favourites, place]
            };
        }
        setLocalStorage(LOCAL_STORAGE_KEY, storage);
    };

    //-------------------------------------------------------
    //Initialize storage
    //-------------------------------------------------------
    useEffect(() => {
        //When apps loads check if storage has been created, if not then create one;
        let storage: ILocalStorage = getLocalStorage(LOCAL_STORAGE_KEY) as ILocalStorage;
        if (!storage) {
            storage = {
                notes: {},
                favourites: [],
                top15: MOST_POPULOUS_CITIES.sort()
            };
            setLocalStorage(LOCAL_STORAGE_KEY, storage);
        }
    }, []);
    return {
        onSubmitNote,
        onEditFavourites
    };
};

export default useAppStorage;
