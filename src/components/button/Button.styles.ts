import styled from "styled-components";
import { IButton } from "./IButton";

export const StyledButton = styled.button<IButton>`
    height: 3.6rem;
    padding: 0px 3rem;
    border-radius: 3rem;
    border: 0px;
    cursor: pointer;
    width: ${({ fluid }) => (fluid ? "100%" : "auto")};
    font-weight: 500;
    background-color: ${({ theme }) => theme.colors.red};
    color: #fff;

    &.outlined {
        border: 1px solid ${({ theme }) => theme.colors.red};
        color: ${({ theme }) => theme.colors.red};
        background-color: #fff;
    }
`;
