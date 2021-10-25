import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body{
        background-color: #fff;
        font-family: 'Ubuntu', sans-serif;
    }

    * {
        margin: 0px;
        padding: 0px;
        box-sizing: border-box !important;
    }

`;
