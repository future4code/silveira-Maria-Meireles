import { useNavigate } from "react-router";
import { useEffect } from "react";
import { goToFeed } from "../routes/coordinator";
import { token } from "../constants/tokens";

const useUnprottectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(token) {
            goToFeed(navigate)
        };

    }, [navigate])
}
export default useUnprottectedPage;