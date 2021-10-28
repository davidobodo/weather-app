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
        // font-family: 'Ubuntu', sans-serif;

        // font-family: 'Inter', sans-serif;

        font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif
    }


    h1 {
        font-size: 2.4rem;
        
    }

    h2 {
        font-size: 2rem;
        
    }

    h3 {
        font-size: 1.8rem;
        
    }

    h4 {
        font-size: 1.6rem;
        
    }

    h5 {
        font-size: 1.4rem;
        
    }

    h6 {
        font-size: 1.2rem;
        
    }

    p {
        font-size: 1.6rem;
    }

    input, textarea, a{
        font-family: 'Ubuntu', sans-serif;
        font-size: 1.4rem;
    }

    a{
        text-decoration: none;
        color: #000;
    }

`;
