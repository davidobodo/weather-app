import styled from "styled-components";

import { ISinglePlaceStyles } from "./ISinglePlace";

export const StyledSinglePlace = styled.main<ISinglePlaceStyles>`
    min-height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    background-image: ${({ bgImg }) =>
        `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${bgImg});`};

    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: flex;
    }

    .single-place__left-column {
        flex: 1;
        padding: 3rem;

        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            padding: 6rem;
        }

        &__header {
            display: flex;
            justify-content: space-between;
            align-items: center;

            a {
                color: #fff;
                font-weight: 600;
            }

            img {
                width: 16rem;
            }

            input {
                width: 17.3rem;
            }
        }

        .empty-note {
            color: #fff;
            text-align: center;
            margin-top: 10rem;
        }
    }

    .single-place__right-column {
    }
`;
