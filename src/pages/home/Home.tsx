import React, { useState, useEffect } from "react";

import Banner from "../../components/banner/Banner";
import CustomTable from "../../components/customTable/CustomTable";

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

            {myFavourites.length > 0 && (
                <section className="content">
                    <h3>My Favourites</h3>
                    <CustomTable list={myFavourites} onRemoveItem={handleOnEditFavourites} />
                </section>
            )}

            <section className="content">
                <h3> Top {top15.length} Most Populous Cities</h3>
                <CustomTable list={top15} onRemoveItem={handleOnEditTop15} />
            </section>
        </StyledHome>
    );
};

export default Home;
