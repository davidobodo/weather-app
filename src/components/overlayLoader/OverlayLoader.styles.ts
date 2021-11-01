import styled from "styled-components";

export const StyledOverlayLoader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: fixed;
    width: 100%;
    height: 100vh;
    left: 0px;
    top: 0px;
    z-index: 20;

    p {
        position: relative;
        margin-bottom: 2.4rem;
    }
`;
