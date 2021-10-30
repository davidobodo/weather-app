import React from "react";

import { StyledTableLoadingShimmer } from "./TableLoadingShimmer.styles";

import { ITableLoadingShimmer } from "./ITableLoadingShimmer";

const TableLoadingShimmer: React.FC<ITableLoadingShimmer> = ({ amount = 5 }): JSX.Element => {
    return (
        <StyledTableLoadingShimmer>
            {Array.from({ length: amount }).map((_item, i) => {
                return <div key={i} className="row"></div>;
            })}
        </StyledTableLoadingShimmer>
    );
};

export default TableLoadingShimmer;
