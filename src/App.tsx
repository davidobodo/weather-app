import React from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/Themes";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyles />
            <header className="App-header">
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                    Learn React
                </a>
            </header>
        </ThemeProvider>
    );
}

export default App;
