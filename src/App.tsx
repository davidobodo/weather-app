import React from "react";
import { Route, Switch } from "react-router-dom";
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

import useSearchValue from "./hooks/useSearchValue";
import useAppStorage from "./hooks/useAppStorage";
import useDetectUserLocation from "./hooks/useDetectUserLocation";

const App = (): JSX.Element => {
    const { searchValue, handleChangeSearchInput, handleGetCityWeather } = useSearchValue();
    const { onSubmitNote, onEditFavourites } = useAppStorage();
    // useDetectUserLocation();

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            {/* <Navbar
                handleGetCityWeather={handleGetCityWeather}
                searchValue={searchValue}
                handleChangeSearchInput={handleChangeSearchInput}
            /> */}
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
                                    onEditFavourites={onEditFavourites}
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
