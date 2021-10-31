import React from "react";
import { screen } from "@testing-library/react";
import { render } from "./CustomRender";
import Banner from "../components/banner/Banner";

const handleGetCityWeather = jest.fn();
const handleChangeSearchInput = jest.fn();
const searchValue = "";

const component = (location: string, temp: string) => (
    <Banner
        handleChangeSearchInput={handleChangeSearchInput}
        handleGetCityWeather={handleGetCityWeather}
        searchValue={searchValue}
        usersLocation={location}
        usersLocationTemp={temp}
    />
);

test("Banner does not display user location and user location-temperature when they dont exist", () => {
    render(component("", ""));
    expect(screen.queryByTestId("user-location")).toBeNull();
});

test("Banner displays user location and user location-temperature when they exist", () => {
    render(component("Lagos", "25.6"));
    expect(screen.getByText(/Lagos/i)).toBeInTheDocument();
    expect(screen.getByText(/25.6/)).toBeInTheDocument();
});
