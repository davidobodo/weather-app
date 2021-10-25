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

const App = (): JSX.Element => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={defaultTheme}>
                <GlobalStyles />
                <Navbar />
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/city" component={SingleCity} />
                    </Switch>
                </div>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
