import React from "react";
import { Link } from "react-router-dom";
import { StyledListItem } from "./ListItem.styles";

import { IListItem } from "./IListItem";

const ListItem: React.FC<IListItem> = ({ name, onEditFavourites }) => {
    return (
        <StyledListItem>
            <Link to={`/place?value=${name}`}>{name}</Link>
            <button type="button" onClick={() => onEditFavourites(name)}>
                Remove
            </button>
        </StyledListItem>
    );
};

export default ListItem;
