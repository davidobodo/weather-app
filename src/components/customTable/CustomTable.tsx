import React from "react";

import CustomTableRow from "./CustomTableRow";
import { ICustomTable } from "./ICustomTable";
import { StyledCustomTable } from "./CustomTable.styles";
import { IHomePageTableRow } from "../../interfaces";

const CustomTable: React.FC<ICustomTable> = ({ list, onRemoveItem }): JSX.Element => {
    return (
        <StyledCustomTable>
            <thead>
                <tr>
                    <td>S/N</td>
                    <td>City</td>
                    <td>Temperature (&deg;C)</td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                {list.map((item: IHomePageTableRow, i) => {
                    return (
                        <CustomTableRow
                            key={i}
                            name={item.name}
                            temperature={(item.temperature - 273).toFixed(1)}
                            onDelete={onRemoveItem}
                            serialNumber={i + 1}
                        />
                    );
                })}
            </tbody>
        </StyledCustomTable>
    );
};

export default CustomTable;
