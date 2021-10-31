import React from "react";
import { Link } from "react-router-dom";

import DeleteIcon from "../../assets/icons/DeleteIcon";

import { ICustomTableRow } from "./ICustomTable";

const CustomTableRow: React.FC<ICustomTableRow> = ({ name, onDelete, temperature, serialNumber }): JSX.Element => {
    return (
        <tr>
            <td>{serialNumber}</td>
            <td>
                <Link to={`/place?value=${name}`}>{name}</Link>
            </td>
            <td>{temperature}</td>
            <td>
                <button type="button" onClick={() => onDelete(name)} aria-label="Remove row">
                    <DeleteIcon />
                </button>
            </td>
        </tr>
    );
};

export default CustomTableRow;
