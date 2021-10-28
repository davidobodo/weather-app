import imgThunderstorm from "../assets/images/thunderstorm.jpg";
import imgSnow from "../assets/images/snow.jpg";
import imgRain from "../assets/images/rain.jpg";
import imgMist from "../assets/images/mist.jpg";
import imgClouds from "../assets/images/clouds.jpg";
import imgClearsky from "../assets/images/clearsky.jpg";
import { toast } from "react-toastify";

/**
 *
 * @param identifier Variable to store data in local storage as
 * @param payload Value to be stored
 */
export const setLocalStorage = (identifier: string, payload: unknown): void => {
    localStorage.setItem(identifier, JSON.stringify(payload));
};

/**
 *
 * @param identifier Variable to clear from local storage
 */
export const clearLocalStorage = (identifier: string): void => {
    localStorage.removeItem(identifier);
};

/**
 *
 * @param identifier Variable to access data  from local storage
 */
export const getLocalStorage = (identifier: string): unknown | null => {
    const info = localStorage.getItem(identifier);
    if (!!info) {
        return JSON.parse(info);
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
        return imgRain;
    } else if (description.includes("mist")) {
        return imgMist;
    } else if (description.includes("cloud")) {
        return imgClouds;
    } else if (description.includes("thunder")) {
        return imgThunderstorm;
    } else if (description.includes("snow")) {
        return imgSnow;
    } else {
        return imgClearsky;
    }
};
