import styled from "styled-components";

export const StyledHome = styled.div`
    .content {
        padding: 6rem;
        // border: 1px solid red;
        max-width: 1024px;
        margin: auto;

        nav {
            border-bottom: 1px solid ${({ theme }) => theme.colors.ash};
            margin-bottom: 2rem;

            a {
                padding-bottom: 1.5rem;
                padding-left: 1rem;
                padding-right: 1rem;
                margin-right: 2rem;
                display: inline-block;
                font-size: 1.8rem;
                color: #000;

                &.active {
                    font-weight: 600;
                    border-bottom: 5px solid ${({ theme }) => theme.colors.red};
                }
            }
        }
    }
`;
