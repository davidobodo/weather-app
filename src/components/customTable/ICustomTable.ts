import { IWeatherData } from "../../interfaces";

export interface ICustomTable {
    list: IWeatherData[];
    onRemoveItem: (place: string) => void;
}
