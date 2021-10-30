import styled from "styled-components";

export const StyledSearch = styled.form`
    background-color: #fff;
    display: flex;
    align-items: center;
    height: 4.8rem;
    border-radius: 3rem;
    border: 1px solid ${({ theme }) => theme.colors.ash};
    box-shadow: 0px 2px 4px rgb(0 0 0 / 18%);

    &:focus-within {
        box-shadow: 0px 0px 4px 2px ${({ theme }) => theme.colors.red};
    }

    input {
        border: 0px;
        height: 100%;
        flex: 1;
        width: 25.3rem;
        margin-left: 2rem;
        padding: 0px 1.5rem;
        outline: none;
    }

    button {
        background-color: ${({ theme }) => theme.colors.red};
        border: 0px;
        border-radius: 50%;
        padding: 0.8rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-right: 0.8rem;
        margin-left: 0.8rem;

        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
    }

    i {
        background-color: ${({ theme }) => theme.colors.red};
        border: 0px;
        border-radius: 50%;
        padding: 0.8rem;
        display: flex;
        align-items: center;
        cursor: pointer;
        margin-right: 0.8rem;
        margin-left: 0.8rem;

        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;
