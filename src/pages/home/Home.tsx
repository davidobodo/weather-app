import React, { useState, useEffect } from "react";

import Banner from "../../components/banner/Banner";
import CustomList from "../../components/customList/CustomList";

import { IHome } from "./IHome";
import { StyledHome } from "./Home.styles";

import { ILocalStorage } from "../../interfaces";

import { getLocalStorage } from "../../utils";
import { LOCAL_STORAGE_KEY, MOST_POPULOUS_CITIES } from "../../constants";
import { getPlaceWeather } from "../../apis";

const Home: React.FC<IHome> = ({
    handleGetCityWeather,
    searchValue,
    handleChangeSearchInput,
    onEditFavourites
}): JSX.Element => {
    const storage: ILocalStorage = getLocalStorage(LOCAL_STORAGE_KEY) as ILocalStorage;

    const [myFavourites, setMyfavourites] = useState<string[]>(storage?.favourites || []);
    const handleOnEditFavourites = (place: string) => {
        const newList = myFavourites.filter((item: string) => item !== place);
        setMyfavourites(newList);
        onEditFavourites(place);
    };

    const [top15, setTopI5] = useState(MOST_POPULOUS_CITIES.sort());
    const handleOnEditTop15 = (place: string) => {
        const newList = top15.filter((item: string) => item !== place);
        setTopI5(newList);
        // onEditFavourites(place);
    };
    const getWeatherInCities = async (cities: string[]) => {
        //arrange data in alphabetical order
        // const result = top15.map((city: string) => {
        //     return new Promise(async (resolve, reject) => {
        //         try {
        //             const res = await getPlaceWeather(city);
        //             resolve(res);
        //         } catch (err) {
        //             reject(err);
        //         }
        //     });
        // });
        // console.log(result);
        // const allResults = await Promise.all(result);
        // console.log(allResults, "THE FINAL RESULTS");
        // setTopI5(allResults)
    };
    useEffect(() => {
        getWeatherInCities(top15);
        getWeatherInCities(myFavourites);
    }, []);

    return (
        <StyledHome>
            <Banner
                handleGetCityWeather={handleGetCityWeather}
                searchValue={searchValue}
                handleChangeSearchInput={handleChangeSearchInput}
            />

            <section className="favourites">
                <h1>Favourties</h1>
                <CustomList list={myFavourites} onRemoveItem={handleOnEditFavourites} />
            </section>
            <section className="favourites">
                <h1>{top15.length} Most Populous Cities</h1>
                <CustomList list={top15} onRemoveItem={handleOnEditTop15} />
            </section>
        </StyledHome>
    );
};

export default Home;
