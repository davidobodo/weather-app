import React from "react";
import userEvent from "@testing-library/user-event";
import { render } from "../../tests/CustomRender";
import { screen } from "@testing-library/react";
import Search from "./Search";

const handleGetCityWeather = jest.fn();
const handleChangeSearchInput = jest.fn();

const component = (searchValue: string) => (
    <Search
        handleChangeSearchInput={handleChangeSearchInput}
        handleGetCityWeather={handleGetCityWeather}
        searchValue={searchValue}
    />
);

test("Typing in search input updates input value", () => {
    render(component(""));
    userEvent.type(screen.getByPlaceholderText("Enter a city..."), "Lagos");
    expect(handleChangeSearchInput).toHaveBeenCalledTimes(5);
});

test("Passed in search value should be the value of the input", () => {
    render(component("My Place"));
    expect(screen.getByPlaceholderText("Enter a city...")).toHaveValue("My Place");
});

test("Pressing enter should submit the form", () => {
    render(component(""));
    userEvent.type(screen.getByPlaceholderText("Enter a city..."), "Lagos{enter}");
    expect(handleGetCityWeather).toHaveBeenCalled();
});
