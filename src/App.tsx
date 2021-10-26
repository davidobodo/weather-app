import React, { useState } from "react";
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

const App = (): JSX.Element => {
    const history = useHistory();

    //Search query
    const [searchValue, setSearchValue] = useState("");
    const handleChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleGetCityWeather = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        history.push(`/place?${searchValue}`);
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
                            return <SinglePlace location={location} history={history} />;
                        }}
                    />
                </Switch>
            </div>
            <Footer />
        </ThemeProvider>
    );
};

export default App;
