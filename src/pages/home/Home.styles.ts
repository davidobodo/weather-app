import styled from "styled-components";

export const StyledHome = styled.div`
    .nav-wrapper {
        display: none;

        &.is-sticky {
            position: fixed;
            top: 0px;
            width: 100%;
            z-index: 10;
            display: block;
            animation: slidein 300ms ease-in-out forwards;
        }
    }

    @keyframes slidein {
        from {
            opacity: 0;
            display: none;
            transform: translateY(-8rem);
        }
        to {
            opacity: 1;
            display: block;
            transform: translateY(0px);
        }
    }

    .banner {
        margin-bottom: 6rem;
    }

    .content {
        max-width: 1024px;
        margin: auto;
        min-height: calc(100vh - 50rem);

        &__section {
            margin-bottom: 5rem;
            padding: 0px 2rem;

            h3 {
                margin-bottom: 2rem;
                font-size: 1.8rem;
                color: #000;
            }
        }
    }
`;
