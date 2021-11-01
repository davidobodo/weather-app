import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { showErrorToast } from "../utils";

const useSearchValue = () => {
    const history = useHistory();
    const [searchValue, setSearchValue] = useState("");
    const handleChangeSearchInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }, []);

    const handleGetCityWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!window.navigator.onLine) {
            showErrorToast("Please go online to make new searches");
            return;
        }
        setSearchValue("");
        if (!searchValue.trim().length) return;
        history.push(`/place?value=${searchValue}`);
    };

    return {
        searchValue,
        handleChangeSearchInput,
        handleGetCityWeather
    };
};

export default useSearchValue;
