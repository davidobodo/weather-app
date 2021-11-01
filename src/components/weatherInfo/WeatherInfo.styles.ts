import styled from "styled-components";

export const StyledWeatherInfo = styled.section`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    color: #fff;
    padding-top: 7rem;
    padding-bottom: 3rem;
    min-height: calc(100vh - 16.4rem);

    @media (min-width: ${({ theme }) => theme.breakpoints.miniLaptop}) {
        height: 100%;
        padding-top: 11vh;
    }

    h1,
    h2,
    h4,
    h3 {
        font-weight: 400;
    }

    .top-section {
        text-align: center;
        margin-bottom: 4rem;

        &__temp-details {
            text-transform: capitalize;

            .temp {
                font-weight: 400;
                font-size: 4.4rem;

                @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
                    font-size: 7.6rem;
                }
            }
        }

        &__place {
            h2 {
                font-size: 4.6rem;
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
            margin-left: auto;
            margin-right: auto;

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
