import React from "react";

import Banner from "../../components/banner/Banner";
import { IHome } from "./IHome";

const Home: React.FC<IHome> = ({ handleGetCityWeather }): JSX.Element => {
    return (
        <div>
            <Banner handleGetCityWeather={handleGetCityWeather} />
        </div>
    );
};

export default Home;
