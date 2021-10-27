import styled from "styled-components";

export const StyledWeatherInfo = styled.section`
    background-color: #000;
    color: #fff;
    padding: 5rem;
    height: 80vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");

    .temp {
        font-size: 4.6rem;
        margin-bottom: 2.4rem;
    }

    .country {
        margin-bottom: 1.2rem;
    }

    .time {
        font-size: 1.4rem;
    }
`;
