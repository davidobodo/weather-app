import React from "react";

import ListItem from "../listItem/ListItem";

import { IFavouritesList } from "./IFavoritesList";

const FavoritesList: React.FC<IFavouritesList> = ({ list, onEditFavourites }): JSX.Element => {
    return (
        <ul>
            {list.map((item: string, i: number) => {
                return <ListItem key={i} name={item} onEditFavourites={onEditFavourites} />;
            })}
        </ul>
    );
};

export default FavoritesList;
