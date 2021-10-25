import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

//Styles
import { defaultTheme } from "./styles/Themes";
import { GlobalStyles } from "./styles/GlobalStyles";

//Pages
import Home from "./pages/home/Home";
import SingleCity from "./pages/singleCity/SingleCity";

//Components
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const App = (): JSX.Element => {
    const handleGetCityWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(e, "Get here");
    };
    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles />
                <Navbar handleGetCityWeather={handleGetCityWeather} />
                <div>
                    <Switch>
                        <Route
                            exact
                            path="/"
                            render={() => {
                                return <Home handleGetCityWeather={handleGetCityWeather} />;
                            }}
                        />
                        <Route exact path="/city" component={SingleCity} />
                    </Switch>
                </div>
                <Footer />
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
