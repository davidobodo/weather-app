import styled from "styled-components";

export const StyledNavbar = styled.nav`
    height: 8rem;
    padding: 0px 6rem;
    background-color: #fff;
    border-bottom: 1px solid ${({ theme }) => theme.colors.ash};
    box-shadow: 0 8px 9px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    z-index: 3;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
        url("https://media.istockphoto.com/photos/transparent-umbrella-under-rain-against-water-drops-splash-background-picture-id1257951336?b=1&k=20&m=1257951336&s=170667a&w=0&h=N_dkdVEznSiN43vNpVzjnnk8xUi4lg1IFK19JXxo5Zg=");
`;
