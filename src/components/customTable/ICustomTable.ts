import { IHomePageTableRow } from "../../interfaces";

export interface ICustomTable {
    list: IHomePageTableRow[];
    onRemoveItem: (place: string) => void;
}
