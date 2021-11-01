import { toast } from "react-toastify";
import { IWeatherData, IHomePageTableRow } from "../interfaces";

/**
 *
 * @param identifier Variable to store data in local storage as
 * @param payload Value to be stored
 */
export const setLocalStorageItem = (identifier: string, payload: unknown): void => {
    localStorage.setItem(identifier, JSON.stringify(payload));
};

/**
 *
 * @param identifier Variable to clear from local storage
 */
export const clearLocalStorageItem = (identifier: string): void => {
    localStorage.removeItem(identifier);
};

/**
 *
 * @param identifier Variable to access data  from local storage
 */
export const getLocalStorageItem = <T = unknown>(identifier: string): T | null => {
    const info = localStorage.getItem(identifier);
    if (!!info) {
        return JSON.parse(info) as T;
    } else {
        return null;
    }
};

/**
 *
 * @param message Message to display
 */
export const showSuccessToast = (message: string) => {
    return toast.success(`${message}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
    });
};

/**
 *
 * @param message Message to display
 */
export const showErrorToast = (message: string) => {
    return toast.error(`${message}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
    });
};
/**
 *
 * @param message Message to display
 */
export const showInfoToast = (message: string) => {
    return toast.info(`${message}`, {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined
    });
};

/**
 * Function is used to dynamically display images based on the weather description
 * @param description Weather description
 */
export const getWeatherImg = (description: string) => {
    if (description.includes("rain")) {
        return "https://res.cloudinary.com/phitgeek/image/upload/v1635724777/rain_jlwjbr.jpg";
    } else if (description.includes("mist")) {
        return "https://res.cloudinary.com/phitgeek/image/upload/v1635724776/mist_fnsmh4.jpg";
    } else if (description.includes("cloud")) {
        return "https://res.cloudinary.com/phitgeek/image/upload/v1635724777/clouds_qfvdox.jpg";
    } else if (description.includes("thunder")) {
        return "https://res.cloudinary.com/phitgeek/image/upload/v1635724777/thunderstorm_su9vr3.jpg";
    } else if (description.includes("snow")) {
        return "https://res.cloudinary.com/phitgeek/image/upload/v1635724777/snow_uzeytt.jpg";
    } else {
        return "https://res.cloudinary.com/phitgeek/image/upload/v1635724777/clearsky_aopcw5.jpg";
    }
};

/**
 *
 * @param citiesData List of city data returned from endpoint
 * @param citiesName List of city names
 * @returns List of city data containing only the name and temperature
 */
export const extractNameAndTemperature = (citiesData: IWeatherData[], citiesName: string[]): IHomePageTableRow[] => {
    return citiesData.map((city, i) => {
        return {
            name: citiesName[i],
            temperature: city.main.temp
        };
    });
};
