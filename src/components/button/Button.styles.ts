import styled from "styled-components";
import { IButtonStyles } from "./IButton";

export const StyledButton = styled.button<IButtonStyles>`
    height: 4.6rem;
    padding: 0px 3rem;
    border-radius: 3rem;
    border: 0px;
    cursor: pointer;
    width: ${({ fluid }) => (fluid ? "100%" : "auto")};
    font-weight: 500;
    color: #fff;
    text-transform: capitalize;
    background-color: ${({ theme }) => theme.colors.red};

    &.outlined {
        border: 1px solid ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.red};
        background-color: #fff;
    }

    &:focus {
        outline: none;
        box-shadow: 0px 0px 4px 2px #fff;
    }
`;
