import styled from "styled-components";

export const StyledWeatherInfo = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
    color: #fff;
    height: 100%;
    padding-top: 3rem;
    padding-bottom: 3rem;
    // padding: 5rem;
    // height: 80vh;
    // background-size: cover;
    // background-repeat: no-repeat;
    // background-position: bottom;
    // background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    //     url("https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");

    .temp {
        font-size: 10.6rem;
        font-weight: 400;
    }

    h1,
    h2,
    h4,
    h3 {
        font-weight: 400;
    }

    .top-section {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        &__place {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            h2 {
                font-size: 46px;
                margin-bottom: 1rem;
            }
        }
    }

    .bottom-section {
        .col {
            width: 30rem;
            display: flex;
            justify-content: space-between;
            margin-bottom: 2rem;

            &:last-child {
                margin-bottom: 0px;
            }
        }
    }

    .country {
        margin-bottom: 1.2rem;
    }

    .time {
        font-size: 1.4rem;
    }
`;
