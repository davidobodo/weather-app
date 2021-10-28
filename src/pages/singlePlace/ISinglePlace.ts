import { ILocation, IHistory, ISearch } from "../../interfaces";

export interface ISinglePlace extends ISearch {
    location: ILocation;
    history: IHistory;
    onSubmitNote: (place: string, note: string) => void;
    onEditFavourites: (place: string) => void;
}

export interface ISinglePlaceStyles {
    bgImg?: string;
}
