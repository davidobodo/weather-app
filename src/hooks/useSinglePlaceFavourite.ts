import { useState } from "react";

/**
 * Handles "Favourites" logic for a single place
 * @param onEditFavourites Handler function to toggle place from favourites list in local storage
 * @param place Place that is in focus(user is searching for)
 */
const useSinglePlaceFavourite = (onEditFavourites: (place: string) => void, place: string) => {
    const [isAmongFavourites, setIsAmongFavourites] = useState(false);
    const handleUpdateFavourites = () => {
        setIsAmongFavourites(!isAmongFavourites);
        onEditFavourites(place);
    };
    return {
        isAmongFavourites,
        handleUpdateFavourites,
        setIsAmongFavourites
    };
};

export default useSinglePlaceFavourite;
