import styled from "styled-components";

export const StyledTableLoadingShimmer = styled.div`
    .row {
        height: 5rem;
        animation: shimmer 2s infinite;
        background: linear-gradient(to right, transparent 0%, #b4b4c926 50%, transparent 100%);
        background-size: 1000px 100%;
        box-shadow: 0px 0px 3px 0 rgba(255, 255, 255, 0.09);
        margin-bottom: 1rem;
    }

    @keyframes shimmer {
        0% {
            background-position: -1000px 0;
        }
        100% {
            background-position: 1000px 0;
        }
    }
`;
