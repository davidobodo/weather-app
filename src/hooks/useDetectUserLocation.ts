import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useDetectUserLocation = () => {
    const history = useHistory();

    async function handelUserAccept(position: any) {
        const { latitude, longitude } = position.coords;

        try {
            let res: any = await fetch(
                `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${process.env.REACT_APP_OPENCAGE_API_KEY}`
            );
            res = await res.json();

            const usersCity = res.results[0].components.state;
            history.push(`/place?value=${usersCity}`);
        } catch (err) {
            console.log(err);
        } finally {
        }
    }

    const handleUserDecline = (error: any) => {
        console.log(error);
        alert("Permission not granted");
    };

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handelUserAccept, handleUserDecline);
        }
    }, []);

    return {};
};

export default useDetectUserLocation;
