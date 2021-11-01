import { useEffect } from "react";
import { getLocalStorageItem, setLocalStorageItem, showSuccessToast } from "../utils";
import { ILocalStorage } from "../interfaces";
import { LOCAL_STORAGE_KEY, MOST_POPULOUS_CITIES } from "../constants";

const useAppStorage = () => {
    //-------------------------------------------------------
    //NOTES - STORAGE
    //-------------------------------------------------------
    const onSubmitNote = (place: string, note: string) => {
        let storage = getLocalStorageItem<ILocalStorage>(LOCAL_STORAGE_KEY);

        if (!storage) {
            return;
        }

        storage = {
            ...storage,
            notes: {
                ...storage.notes,
                [place]: note
            }
        };
        setLocalStorageItem(LOCAL_STORAGE_KEY, storage);
        showSuccessToast("Note Updated");
    };

    //-------------------------------------------------------
    //FAVOURITES - STORAGE
    //-------------------------------------------------------
    const onEditFavourites = (place: string) => {
        let storage = getLocalStorageItem<ILocalStorage>(LOCAL_STORAGE_KEY);

        if (!storage) {
            return;
        }
        //Check if its currently among favourites
        const isPresent = storage?.favourites.find((item: string) => item === place);
        if (isPresent) {
            const filteredFavourites = storage.favourites.filter((item: string) => item !== place);
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
        setLocalStorageItem(LOCAL_STORAGE_KEY, storage);
        showSuccessToast("Favourites Updated");
    };

    //-------------------------------------------------------
    //MOST POPULOUS CITIES - STORAGE
    //-------------------------------------------------------
    //Remove a city
    const onRemovePopularCity = (place: string) => {
        let storage = getLocalStorageItem<ILocalStorage>(LOCAL_STORAGE_KEY);

        if (!storage) {
            return;
        }
        const filteredList = storage.mostPopulousCities.filter((item: string) => {
            return item !== place;
        });
        storage = {
            ...storage,
            mostPopulousCities: filteredList
        };
        setLocalStorageItem(LOCAL_STORAGE_KEY, storage);
    };

    //-------------------------------------------------------
    //INITIALIZE STORAGE
    //-------------------------------------------------------
    useEffect(() => {
        //When apps loads check if storage has been created, if not then create one;
        let storage = getLocalStorageItem<ILocalStorage>(LOCAL_STORAGE_KEY);
        if (!storage) {
            storage = {
                notes: {},
                favourites: [],
                mostPopulousCities: MOST_POPULOUS_CITIES.sort(),
                usersLocation: ""
            };
            setLocalStorageItem(LOCAL_STORAGE_KEY, storage);
        }
    }, []);
    return {
        onSubmitNote,
        onEditFavourites,
        onRemovePopularCity
    };
};

export default useAppStorage;
