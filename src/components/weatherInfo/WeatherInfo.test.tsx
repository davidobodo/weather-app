import React from "react";
import { screen } from "@testing-library/react";
import { render } from "../../tests/CustomRender";
import WeatherInfo from "./WeatherInfo";
import { TEST_WEATHER_DATA } from "../../constants";

test("Component renders props as passed in", () => {
    render(<WeatherInfo weatherData={TEST_WEATHER_DATA} />);

    expect(screen.getByText(/light rain/i)).toBeInTheDocument();
    expect(screen.getByText(/Lagos/i)).toBeInTheDocument();
});
