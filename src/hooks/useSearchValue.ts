import { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

const useSearchValue = () => {
    const history = useHistory();
    const [searchValue, setSearchValue] = useState("");
    const handleChangeSearchInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }, []);

    const handleGetCityWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (searchValue.trim().length === 0) return;
        setSearchValue("");
        history.push(`/place?value=${searchValue}`);
    };

    return {
        searchValue,
        handleChangeSearchInput,
        handleGetCityWeather
    };
};

export default useSearchValue;
