import { useEffect } from "react";
import { getLocalStorage, setLocalStorage, showSuccessToast } from "../utils";
import { ILocalStorage } from "../interfaces";
import { LOCAL_STORAGE_KEY, MOST_POPULOUS_CITIES } from "../constants";

const useAppStorage = () => {
    //-------------------------------------------------------
    //NOTES - STORAGE
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
        showSuccessToast("Note Updated");
    };

    //-------------------------------------------------------
    //FAVOURITES - STORAGE
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
        showSuccessToast("Favourites Updated");
    };

    //-------------------------------------------------------
    //MOST POPULOUS CITIES - STORAGE
    //-------------------------------------------------------
    //Remove a city
    const onRemovePopularCity = (place: string) => {
        let storage: ILocalStorage = getLocalStorage(LOCAL_STORAGE_KEY) as ILocalStorage;
        const filteredList = storage.mostPopulousCities.filter((item: string) => {
            return item !== place;
        });
        storage = {
            ...storage,
            mostPopulousCities: filteredList
        };
        setLocalStorage(LOCAL_STORAGE_KEY, storage);
    };

    //-------------------------------------------------------
    //INITIALIZE STORAGE
    //-------------------------------------------------------
    useEffect(() => {
        //When apps loads check if storage has been created, if not then create one;
        let storage: ILocalStorage = getLocalStorage(LOCAL_STORAGE_KEY) as ILocalStorage;
        if (!storage) {
            storage = {
                notes: {},
                favourites: [],
                mostPopulousCities: MOST_POPULOUS_CITIES.sort(),
                usersLocation: ""
            };
            setLocalStorage(LOCAL_STORAGE_KEY, storage);
        }
    }, []);
    return {
        onSubmitNote,
        onEditFavourites,
        onRemovePopularCity
    };
};

export default useAppStorage;
