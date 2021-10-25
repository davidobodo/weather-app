import React from "react";

import ListItem from "../listItem/ListItem";

const FavoritesList = (): JSX.Element => {
    return (
        <ul>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, i) => {
                return <ListItem key={i} />;
            })}
        </ul>
    );
};

export default FavoritesList;
