import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getUserslocation, getPlaceWeather } from "../apis";
import { showErrorToast, setLocalStorage } from "../utils";
import { ILocalStorage } from "../interfaces";
import { LOCAL_STORAGE_KEY } from "../constants";

const useDetectUserLocation = (storage: ILocalStorage) => {
    const history = useHistory();
    const [isDetectingLocation, setIsDetectingLocation] = useState(false);
    const [usersLocation, setUsersLocation] = useState("");
    const [usersLocationTemp, setUsersLocationTemp] = useState("");

    const getUsersLocationWeather = async (place: string) => {
        setUsersLocation(place);

        try {
            const weatherDetails = await getPlaceWeather(place);
            setUsersLocationTemp((weatherDetails.main.temp - 273).toFixed(1));
        } catch (err) {
            showErrorToast(`Oops, sorry couldn't find the weather of your location`);
        }
    };

    const handelUserAccept = async (position: any) => {
        const { latitude, longitude } = position.coords;
        setIsDetectingLocation(true);
        try {
            const res = await getUserslocation(latitude, longitude);
            const usersCity = res.results[0].components.state;

            const updatedStorage = {
                ...storage,
                usersLocation: usersCity
            };
            setLocalStorage(LOCAL_STORAGE_KEY, updatedStorage);
            getUsersLocationWeather(usersCity);
            history.push(`/place?value=${usersCity}`);
        } catch (err) {
            console.log(err);
            showErrorToast(`Oops, sorry couldn't detect your location`);
        } finally {
            setIsDetectingLocation(false);
        }
    };

    const handleUserDecline = (error: any) => {};

    useEffect(() => {
        //If we have already asked the user for their location before, and they accepted, dont ask again. Just update the weather info
        if (storage?.usersLocation) {
            getUsersLocationWeather(storage?.usersLocation);
        } else if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handelUserAccept, handleUserDecline);
        }
    }, [storage?.usersLocation]);

    return {
        isDetectingLocation,
        usersLocation,
        usersLocationTemp
    };
};

export default useDetectUserLocation;
