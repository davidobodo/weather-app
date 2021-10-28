import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import SearchBar from "../search/Search";

import { StyledBanner } from "./Banner.styles";
import { IBanner } from "./IBanner";

import { WEATHER_IMAGES } from "../../constants";

const Banner: React.FC<IBanner> = ({ handleGetCityWeather, searchValue, handleChangeSearchInput }): JSX.Element => {
    return (
        <StyledBanner className="banner">
            <Carousel
                showArrows={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                showThumbs={false}
                useKeyboardArrows={false}
                autoPlay={true}
                stopOnHover={false}
                swipeable={false}
                dynamicHeight={false}
                emulateTouch={false}
                autoFocus={false}
                animationHandler="fade"
            >
                {WEATHER_IMAGES.map((item, i) => {
                    return (
                        <div key={i} className="banner__image">
                            <img src={item} />
                        </div>
                    );
                })}
            </Carousel>
            <div className="banner__content">
                <h1>Know the weather</h1>
                <SearchBar
                    handleGetCityWeather={handleGetCityWeather}
                    searchValue={searchValue}
                    handleChangeSearchInput={handleChangeSearchInput}
                />
            </div>
        </StyledBanner>
    );
};

export default Banner;
