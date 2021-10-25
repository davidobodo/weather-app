import React from "react";

import WeatherInfo from "../../components/weatherInfo/WeatherInfo";

import { StyledSingleCity } from "./SingleCity.styles";

const SingleCity = (): JSX.Element => {
    return (
        <StyledSingleCity>
            <div className="single-city__left-column">
                <WeatherInfo />
            </div>
            <div className="single-city__right-column">
                <button>Add to favourites</button>
                <form action="">
                    <div className="form-field">
                        <label htmlFor="notes">Notes</label>
                        <textarea name="notes" id="notes" cols={30} rows={10}></textarea>
                    </div>
                    <div>
                        <button>Clear</button>
                        <button>Save</button>
                    </div>
                </form>
            </div>
        </StyledSingleCity>
    );
};

export default SingleCity;
