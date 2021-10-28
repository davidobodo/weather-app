import styled from "styled-components";

import { ISearchStyles } from "../../interfaces";

export const StyledSearch = styled.form<ISearchStyles>`
    background-color: #fff;
    display: flex;
    align-items: center;
    height: 4.8rem;
    border-radius: 3rem;
    border: 1px solid ${({ theme }) => theme.colors.ash};
    box-shadow: 0px 2px 4px rgb(0 0 0 / 18%);
    // width: 30rem;
    // padding: 0px 0.8rem 0px 2rem;

    input {
        border: 0px;
        height: 100%;
        flex: 1;
        width: 25.3rem;
        margin-left: 2rem;
        padding: 0px 1.5rem;
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

    ${({ isInteractive }) =>
        isInteractive &&
        `
        
        input{
            width: 0px;
            margin-left: 0px;
            padding: 0px;
            transition: width 200ms ease-in-out;


            &:focus{
                width: 25.3rem;
                margin-left: 2rem;
                padding: 0px 1.5rem;
            }
        }

        &:hover, &:focus{

            input{
                width: 25.3rem;
                margin-left: 2rem;
                padding: 0px 1.5rem;
            }
        }
    
    `}
`;
