import styled from "styled-components";

import { ISinglePlaceStyles } from "./ISinglePlace";

export const StyledSinglePlace = styled.main<ISinglePlaceStyles>`
    display: flex;
    min-height: 100vh;

    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;

    ${({ bgImg }) =>
        bgImg &&
        `
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url(${bgImg});
    `}

    .single-city__left-column {
        flex: 1;
        padding: 6rem;

        &__header {
            display: flex;
            justify-content: space-between;

            img {
                width: 16rem;
            }
        }
    }

    .single-city__right-column {
        width: 40rem;
        flex-shrink: 0;
        position: relative;
        backdrop-filter: blur(1.5rem) saturate(1.1);
        right: 0;
        min-height: 100 vh;

        &__content {
            position: relative;
            z-index: 2;
            padding: 6rem 3rem;
        }

        .btn-favourite {
            margin-bottom: 2.4rem;
        }

        &__cta {
            display: flex;
            justify-content: flex-end;

            button:nth-child(1) {
                margin-right: 1rem;
            }
        }
    }

    .form-field {
        display: flex;
        flex-direction: column;

        label {
            font-size: 1.6rem;
            margin-bottom: 1.2rem;
            color: #fff;
            text-transform: capitalize;
        }

        textarea {
            border: 1px solid ${({ theme }) => theme.colors.ash};
            border-radius: 1rem;
            margin-bottom: 2.4rem;
            resize: none;

            background-color: transparent;
            color: #fff;
            border-color: rgb(180 180 180 / 40%);
            padding: 2rem;
        }
    }
`;
