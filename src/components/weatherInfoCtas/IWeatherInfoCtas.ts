export interface IWeatherInfoCtas {
    place: string;
    note: string;
    isAmongFavourites: boolean;
    handleClearNote: () => void;
    handleUpdateFavourites: () => void;
    handleSubmitNote: (e: React.FormEvent<HTMLFormElement>) => void;
    handleUpdateNote: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
