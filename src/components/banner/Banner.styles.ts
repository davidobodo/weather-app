import styled from "styled-components";

export const StyledBanner = styled.header`
    height: 40rem;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("https://media.istockphoto.com/photos/transparent-umbrella-under-rain-against-water-drops-splash-background-picture-id1257951336?b=1&k=20&m=1257951336&s=170667a&w=0&h=N_dkdVEznSiN43vNpVzjnnk8xUi4lg1IFK19JXxo5Zg=");
    // background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    // url("https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d2VhdGhlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    // background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    // url("https://images.unsplash.com/photo-1562155618-e1a8bc2eb04f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    // background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    // url("https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");
    // background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    // url("https://images.unsplash.com/photo-1561485132-59468cd0b553?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHdlYXRoZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60");

    background-size: cover;
    background-repeat: no-repeat;
    background-position: bottom;
    color: #fff;

    h1 {
        margin-bottom: 2rem;
        font-size: 3.6rem;
        font-weight: 400;
    }

    .search-form {
        width: 50rem;
    }
`;
