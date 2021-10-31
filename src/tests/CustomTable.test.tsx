import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CustomTableRow from "../components/customTable/CustomTableRow";
import CustomTable from "../components/customTable/CustomTable";

import { render } from "./CustomRender";
import { TESTING_TABLE_MOCK_DATA } from "../constants";

const onDelete = jest.fn();
const onRemoveItem = jest.fn();

const tableRowMock = (
    <table>
        <tbody>
            <CustomTableRow name="Lagos" temperature="895" serialNumber={7} onDelete={onDelete} />
        </tbody>
    </table>
);
test("Table row renders the name , temperature and serial number", () => {
    render(tableRowMock);
    expect(screen.getByText(/Lagos/)).toBeInTheDocument();
    expect(screen.getByText(/895/)).toBeInTheDocument();
    expect(screen.getByText(/7/)).toBeInTheDocument();
});

test("Clicking on table row delete icon should trigger onDelete function", () => {
    render(tableRowMock);
    userEvent.click(screen.getByLabelText("Remove row"));
    expect(onDelete).toHaveBeenCalled();
});

test("Table renders the right amount of rows depending on the list passed into it", () => {
    render(<CustomTable list={TESTING_TABLE_MOCK_DATA} onRemoveItem={onRemoveItem} />);
    expect(screen.getAllByTestId("table-row")).toHaveLength(4);
});
