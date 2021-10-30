import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getUserslocation } from "../apis";

const useDetectUserLocation = () => {
    const history = useHistory();

    async function handelUserAccept(position: any) {
        const { latitude, longitude } = position.coords;

        try {
            const res = await getUserslocation(latitude, longitude);

            const usersCity = res.results[0].components.state;
            history.push(`/place?value=${usersCity}`);
        } catch (err) {
            console.log(err);
        } finally {
        }
    }

    const handleUserDecline = (error: any) => {};

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handelUserAccept, handleUserDecline);
        }
    }, []);
};

export default useDetectUserLocation;
