import React from "react";
import { Link } from "react-router-dom";
import { StyledListItem } from "./ListItem.styles";

const ListItem = () => {
    return (
        <StyledListItem>
            <Link to="/city">City name</Link>
            <button>Remove</button>
        </StyledListItem>
    );
};

export default ListItem;
