import { IHomePageTableRow } from "../../interfaces";

export interface ICustomTable {
    list: IHomePageTableRow[];
    onRemoveItem: (place: string) => void;
}

export interface ICustomTableRow {
    name: string;
    onDelete: (place: string) => void;
    temperature: string;
    serialNumber: number;
}
