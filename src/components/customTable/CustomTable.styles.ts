import styled from "styled-components";

export const StyledCustomTable = styled.table`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.ash};
    border-collapse: collapse;

    tr {
        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
            height: 5rem;
        }
    }

    thead {
        border-bottom: 1px solid ${({ theme }) => theme.colors.ash};

        tr {
            background-color: ${({ theme }) => theme.colors.red};
            color: #fff;

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

            &:nth-child(even) {
                background-color: #f7f7f8;
            }

            &:last-child {
                border-bottom: 0px;
            }

            td {
                font-size: 1.4rem;

                &:first-child {
                    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
                        padding-left: 2rem;
                    }
                }

                &:nth-child(2) {
                    a {
                        text-transform: capitalize;
                        text-decoration: underline;

                        &:focus,
                        &:hover {
                            outline: none;
                            color: ${({ theme }) => theme.colors.red};
                            text-decoration: underline;
                        }

                        @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
                            text-decoration: none;
                        }
                    }
                }

                &:nth-child(3) {
                    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
                        text-align: center;
                    }
                }

                button {
                    border: 0px;
                    background-color: transparent;
                    cursor: pointer;

                    &:focus,
                    &:hover {
                        outline: none;
                        color: ${({ theme }) => theme.colors.red};
                        text-decoration: underline;

                        svg {
                            stroke: red;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        display: block;

        // Force table to not be like tables anymore
        thead,
        tbody,
        th,
        td,
        tr {
            display: block;
        }

        tr {
            height: auto;
        }

        // Hide table headers (but not display: none;, for accessibility)
        thead tr {
            position: absolute;
            top: -9999px;
            left: -9999px;
        }

        td {
            border: none;
            border-bottom: 1px solid #eee;
            position: relative;
            padding-left: 50%;
            width: auto;
            height: 4rem;
            display: flex;
            align-items: center;
        }

        td:before {
            // Now like a table header
            position: absolute;
            // Top/left values mimic padding
            top: 1.2rem;
            left: 1.2rem;
            width: 45%;
            padding-right: 10px;
            white-space: nowrap;
        }

        td:nth-of-type(1):before {
            content: "S/N";
        }
        td:nth-of-type(2):before {
            content: "City";
        }
        td:nth-of-type(3):before {
            content: "Temperature";
        }
        td:nth-of-type(4):before {
            content: "Remove";
        }
    }
`;
