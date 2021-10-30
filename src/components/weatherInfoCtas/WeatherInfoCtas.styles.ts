import styled from "styled-components";

export const StyledWeatherInfoCtas = styled.div`
    position: relative;
    z-index: 2;
    padding: 6rem 3rem;
    flex-shrink: 0;

    @media (min-width: ${({ theme }) => theme.breakpoints.miniLaptop}) {
        backdrop-filter: blur(1.5rem) saturate(1.1);
        width: 40rem;
        min-height: 100vh;
    }

    .btn-favourite {
        position: fixed;
        bottom: 0px;
        left: 0px;
        right: 0px;
        padding: 2rem;
        backdrop-filter: blur(1.5rem) saturate(1.1);

        @media (min-width: ${({ theme }) => theme.breakpoints.miniLaptop}) {
            margin-bottom: 2.4rem;
            position: static;
            padding: 0px;
            backdrop-filter: none;
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
            border: 1px solid rgb(180 180 180 / 40%);
            border-radius: 1rem;
            margin-bottom: 2.4rem;
            resize: none;
            background-color: transparent;
            color: #fff;
            padding: 2rem;

            &:focus {
                outline: none;
                box-shadow: 0px 0px 4px 2px #fff;
            }
        }
    }

    .cta {
        display: flex;
        justify-content: flex-end;

        button:nth-child(1) {
            margin-right: 1rem;
        }
    }
`;
