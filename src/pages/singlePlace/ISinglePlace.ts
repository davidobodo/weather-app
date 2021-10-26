import { ILocation, IHistory } from "../../interfaces";

export interface ISinglePlace {
    location: ILocation;
    history: IHistory;
    onSubmitNote: (place: string, note: string) => void;
    onEditFavourites: (place: string) => void;
}
