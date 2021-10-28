import styled from "styled-components";

export const StyledNavbar = styled.nav`
    height: 8rem;
    padding: 0px 6rem;
    background-color: #fff;
    border-bottom: 1px solid ${({ theme }) => theme.colors.ash};
    box-shadow: 0 8px 9px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
`;
