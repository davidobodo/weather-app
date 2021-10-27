import styled from "styled-components";

export const StyledSingleCity = styled.main`
    padding: 5rem;
    display: flex;
    min-height: calc(100vh - 8rem);

    .single-city__left-column {
        flex: 1;
        margin-right: 2.4rem;
    }

    .single-city__right-column {
        width: 30rem;
        flex-shrink: 0;

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
        }

        textarea {
            border: 1px solid ${({ theme }) => theme.colors.ash};
            border-radius: 1rem;
            margin-bottom: 2.4rem;
            resize: none;
        }
    }
`;
