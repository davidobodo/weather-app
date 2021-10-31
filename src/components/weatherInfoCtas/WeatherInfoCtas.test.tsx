import React from "react";
import { screen } from "@testing-library/react";
import WeatherInfoCtas from "./WeatherInfoCtas";
import { render } from "../../tests/CustomRender";
import userEvent from "@testing-library/user-event";

const handleUpdateFavourites = jest.fn();
const handleSubmitNote = jest.fn();
const handleUpdateNote = jest.fn();
const handleClearNote = jest.fn();

const component = (place: string, note: string, isAmongFavourites: boolean) => (
    <WeatherInfoCtas
        place={place}
        note={note}
        isAmongFavourites={isAmongFavourites}
        handleClearNote={handleClearNote}
        handleSubmitNote={handleSubmitNote}
        handleUpdateNote={handleUpdateNote}
        handleUpdateFavourites={handleUpdateFavourites}
    />
);
test("If isAmongFavourites then button text should be remove from favourites", () => {
    render(component("Lagos", "Notes", true));
    expect(screen.getByTestId("btn-favourites")).toHaveTextContent(/Remove Lagos from favourites/i);
});
test("If isNotAmongFavourites then button text should be add to favourites", () => {
    render(component("Lagos", "Notes", false));
    expect(screen.getByTestId("btn-favourites")).toHaveTextContent(/Add Lagos to favourites/i);
});
test("Click on isamong button should trigger update function", () => {
    render(component("Lagos", "Notes", true));

    userEvent.click(screen.getByTestId("btn-favourites"));
    expect(handleUpdateFavourites).toHaveBeenCalled();
});
test("Textarea should have passed in note as its value", () => {
    const noteValue = "This is the note i just typed in";
    render(component("Lagos", noteValue, false));
    expect(screen.getByTestId("notes")).toHaveValue(noteValue);
});
test("Typing in textarea should trigger update function", () => {
    render(component("Lagos", "", false));
    const noteValue = "This is the note i just typed in";
    userEvent.type(screen.getByTestId("notes"), noteValue);
    expect(handleUpdateNote).toHaveBeenCalledTimes(noteValue.length);
});
test("Clicking on clear button should trigger clear function", () => {
    render(component("Lagos", "Notes", true));

    userEvent.click(screen.getByTestId("btn-clear"));
    expect(handleClearNote).toHaveBeenCalled();
});
test("Click on submit button should trigger submit function", () => {
    render(component("Lagos", "Notes", true));

    handleSubmitNote.mockImplementation((event) => {
        event.preventDefault();
    });

    userEvent.click(screen.getByTestId("btn-save"));
    expect(handleSubmitNote).toHaveBeenCalled();
});
test("Notes label should be the place value passed into the component", () => {
    render(component("Texas", "Notes", true));
    expect(screen.getByTestId("notes-label")).toHaveTextContent("Texas Notes");
});
