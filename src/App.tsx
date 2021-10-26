import React, { useState, useCallback, useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//Styles
import { defaultTheme } from "./styles/Themes";
import { GlobalStyles } from "./styles/GlobalStyles";

//Pages
import Home from "./pages/home/Home";
import SinglePlace from "./pages/singlePlace/SinglePlace";

//Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

//Utils
import { setLocalStorage, getLocalStorage } from "./utils";

import { ILocalStorage } from "./interfaces";
import { LOCAL_STORAGE_KEY } from "./constants";

const notes = {
    berlin: "afdldskfjaldfjalsjdflasjdlfajsdfa",
    tokyo: "akfalsdfjlasjdflajsdlfjalsdkjflasdjfa",
    nigeria: "askfjlasdkfajsdlfajsdljfal"
};
const favourties = [];
const top15 = [];

// const dcs_weather_app

const App = (): JSX.Element => {
    const history = useHistory();

    //-------------------------------------------------------
    //Search query
    //-------------------------------------------------------
    const [searchValue, setSearchValue] = useState("");
    const handleChangeSearchInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    }, []);

    const handleGetCityWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push(`/place?value=${searchValue}`);
    };

    //-------------------------------------------------------
    //Notes
    //-------------------------------------------------------
    const [allNotes, setAllNotes] = useState({});
    const onSubmitNote = (place: string, note: string) => {
        setAllNotes((prevState) => {
            return {
                ...prevState,
                [place]: note
            };
        });

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
    //Initialize storage
    //-------------------------------------------------------
    useEffect(() => {
        //When apps loads check if storage has been created, if not then create one;
        let storage: ILocalStorage = getLocalStorage(LOCAL_STORAGE_KEY) as ILocalStorage;

        if (!storage) {
            storage = {
                notes: {},
                favourites: [],
                top15: []
            };

            setLocalStorage(LOCAL_STORAGE_KEY, storage);
        }
    }, []);

    //-------------------------------------------------------
    //Favourites
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

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <Navbar
                handleGetCityWeather={handleGetCityWeather}
                searchValue={searchValue}
                handleChangeSearchInput={handleChangeSearchInput}
            />
            <div>
                <Switch>
                    <Route
                        exact
                        path="/"
                        render={() => {
                            return (
                                <Home
                                    handleGetCityWeather={handleGetCityWeather}
                                    searchValue={searchValue}
                                    handleChangeSearchInput={handleChangeSearchInput}
                                />
                            );
                        }}
                    />
                    <Route
                        exact
                        path="/place"
                        render={({ location, history }) => {
                            return (
                                <SinglePlace
                                    location={location}
                                    history={history}
                                    onSubmitNote={onSubmitNote}
                                    onEditFavourites={onEditFavourites}
                                />
                            );
                        }}
                    />
                </Switch>
            </div>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
