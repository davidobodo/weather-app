import { useState } from "react";
import { showInfoToast } from "../utils";

/**
 * Hanldes all Notes Logic for a single place
 * @param onSubmitNote Hanlder function to create and edit note in local storage
 * @param place Place that is in focus(user is searching for)
 */
const useSinglePlaceNote = (onSubmitNote: (place: string, note: string) => void, place: string) => {
    //-------------------------------------------------------
    //Place Notes
    //-------------------------------------------------------
    const [note, setNote] = useState("");
    const handleUpdateNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNote(e.target.value);
    };

    const handleSubmitNote = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!note.trim().length) {
            showInfoToast("Please enter some notes.");
            return;
        }
        onSubmitNote(place, note);
    };

    const handleClearNote = () => {
        setNote("");
        onSubmitNote(place, "");
    };

    return {
        note,
        handleSubmitNote,
        handleClearNote,
        handleUpdateNote,
        setNote
    };
};

export default useSinglePlaceNote;
