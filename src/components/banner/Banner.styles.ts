import styled from "styled-components";

export const StyledBanner = styled.header`
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    position: relative;
    height: 40rem;

    .carousel-root {
        position: absolute;
        top: 0px;
        left: 0px;

        .banner__image {
            height: 40rem;
            width: 100vw;

            img {
                object-fit: cover;
                object-position: bottom;
                width: 100vw;
                height: 100%;
            }
        }
    }

    .banner__content {
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        position: relative;
        z-index: 2;

        h1 {
            margin-bottom: 2rem;
            font-size: 3.6rem;
            font-weight: 400;
        }

        .search-form {
            width: 100%;

            @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
                max-width: 50rem;
            }
        }
    }
`;
