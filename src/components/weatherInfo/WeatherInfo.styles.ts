import styled from "styled-components";

export const StyledWeatherInfo = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: transparent;
    color: #fff;
    padding-top: 3rem;
    padding-bottom: 3rem;
    min-height: calc(100vh - 16.4rem);

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        height: 100%;
    }

    h1,
    h2,
    h4,
    h3 {
        font-weight: 400;
    }

    .top-section {
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
        }

        &__temp-details {
            .temp {
                font-weight: 400;
                font-size: 4.4rem;

                @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
                    font-size: 10.6rem;
                }
            }
        }

        &__place {
            @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
            }

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
