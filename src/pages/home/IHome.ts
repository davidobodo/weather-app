export interface IHome {
    handleGetCityWeather: (e: React.FormEvent<HTMLFormElement>) => void;
    searchValue: string;
    handleChangeSearchInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
