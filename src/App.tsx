import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Styles
import { defaultTheme } from "./styles/Themes";
import { GlobalStyles } from "./styles/GlobalStyles";

//Components
import Footer from "./components/footer/Footer";

import useSearchValue from "./hooks/useSearchValue";
import useAppStorage from "./hooks/useAppStorage";
import useScrollToTop from "./hooks/useScrollToTop";
import OverlayLoader from "./components/overlayLoader/OverlayLoader";

//Pages
const Home = lazy(() => import("./pages/home/Home"));
const SinglePlace = lazy(() => import("./pages/singlePlace/SinglePlace"));

const App = (): JSX.Element => {
    const { searchValue, handleChangeSearchInput, handleGetCityWeather } = useSearchValue();
    const { onSubmitNote, onEditFavourites, onRemovePopularCity } = useAppStorage();
    useScrollToTop();

    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <Suspense fallback={<OverlayLoader />}>
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
                                    onRemovePopularCity={onRemovePopularCity}
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
                                    handleGetCityWeather={handleGetCityWeather}
                                    searchValue={searchValue}
                                    handleChangeSearchInput={handleChangeSearchInput}
                                />
                            );
                        }}
                    />
                </Switch>
                <Footer />
            </Suspense>
            <ToastContainer />
        </ThemeProvider>
    );
};

export default App;
