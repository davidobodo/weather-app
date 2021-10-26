import { IWeatherData } from "../../interfaces";
export interface IWeatherInfo {
    // name: string;
    // region: string;
    // country: string;
    // timezone: string;
    // time: string;
    // temperature: number;
    // icon: string;
    // pressure: number;
    // wind_degree: number;
    // wind_dir: string;
    // wind_speed: number;
    weatherData: IWeatherData | null;
}
