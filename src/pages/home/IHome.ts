import { ISearch } from "../../interfaces";

export interface IHome extends ISearch {
    onEditFavourites: (place: string) => void;
}
