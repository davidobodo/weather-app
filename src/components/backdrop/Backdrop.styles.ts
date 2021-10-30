import styled from "styled-components";

export const StyledBackdrop = styled.div`
    position: absolute;
    background-color: ${({ color }) => color};
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
`;
