import styled from "styled-components";

export const StyledCustomTable = styled.table`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.ash};
    border-collapse: collapse;

    tr {
        height: 5rem;
    }

    thead {
        border-bottom: 1px solid ${({ theme }) => theme.colors.ash};
        tr {
            td {
                font-weight: 600;
                font-size: 1.4rem;

                &:first-child {
                    width: 5rem;
                    padding-left: 1.5rem;
                }

                &:nth-child(2) {
                    width: 40%;
                }

                &:nth-child(3) {
                    text-align: center;
                    width: 40%;
                }

                &:last-child {
                    width: 5rem;
                }
            }
        }
    }

    tbody {
        tr {
            border-bottom: 1px solid ${({ theme }) => theme.colors.ash};

            &:last-child {
                border-bottom: 0px;
            }

            td {
                font-size: 1.4rem;

                &:first-child {
                    padding-left: 2rem;
                }

                &:nth-child(2) {
                }

                &:nth-child(3) {
                    text-align: center;
                }

                button {
                    border: 0px;
                    background-color: transparent;
                }
            }
        }
    }
`;
