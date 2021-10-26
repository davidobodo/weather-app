import styled from "styled-components";

export const StyledSearch = styled.form`
    background-color: #fff;
    display: flex;
    align-items: center;
    height: 4.8rem;
    border-radius: 3rem;
    border: 1px solid ${({ theme }) => theme.colors.ash};
    padding: 0px 0.8rem 0px 2rem;
    box-shadow: 0px 2px 4px rgb(0 0 0 / 18%);
    width: 30rem;

    input {
        border: 0px;
        height: 100%;
        flex: 1;
        padding: 0px 1rem;
    }

    button {
        background-color: ${({ theme }) => theme.colors.red};
        border: 0px;
        border-radius: 50%;
        padding: 0.8rem;
        display: flex;
        align-items: center;
        cursor: pointer;

        svg {
            width: 1.5rem;
            height: 1.5rem;
        }
    }
`;
