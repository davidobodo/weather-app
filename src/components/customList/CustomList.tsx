import React from "react";

import ListItem from "../listItem/ListItem";

import { ICustomList } from "./ICustomList";

const CustomList: React.FC<ICustomList> = ({ list, onRemoveItem }): JSX.Element => {
    return (
        <ul>
            {list.map((item: string, i: number) => {
                return <ListItem key={i} name={item} onRemoveItem={onRemoveItem} />;
            })}
        </ul>
    );
};

export default CustomList;
