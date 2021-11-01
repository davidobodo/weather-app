import React from "react";
import Button from "../../components/button/Button";
import { IWeatherInfoCtas } from "./IWeatherInfoCtas";
import { StyledWeatherInfoCtas } from "./WeatherInfoCtas.styles";

const WeatherInfoCtas: React.FC<IWeatherInfoCtas> = ({
    place,
    isAmongFavourites,
    handleUpdateFavourites,
    handleSubmitNote,
    handleUpdateNote,
    handleClearNote,
    note
}): JSX.Element => {
    return (
        <StyledWeatherInfoCtas>
            <div className="btn-favourite">
                <Button
                    type="button"
                    text={isAmongFavourites ? `Remove ${place} from Favourites` : `Add ${place} to favourites`}
                    onClick={handleUpdateFavourites}
                    testId="btn-favourites"
                />
            </div>
            <form onSubmit={handleSubmitNote}>
                <div className="form-field">
                    <label htmlFor="notes" data-testid="notes-label">
                        {place} Notes
                    </label>
                    <textarea
                        name="notes"
                        id="notes"
                        cols={30}
                        rows={10}
                        value={note}
                        onChange={handleUpdateNote}
                        placeholder="Start typing..."
                        data-testid="notes"
                    ></textarea>
                </div>
                <div className="cta">
                    <Button
                        type="reset"
                        text="Clear"
                        variant="outlined"
                        testId="btn-clear"
                        onClick={handleClearNote}
                        fluid={false}
                    />
                    <Button type="submit" text="Save" testId="btn-save" fluid={false} />
                </div>
            </form>
        </StyledWeatherInfoCtas>
    );
};

export default WeatherInfoCtas;
