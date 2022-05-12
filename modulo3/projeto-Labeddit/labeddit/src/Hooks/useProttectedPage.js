import { useNavigate } from "react-router";
import { token } from "../constants/tokens";
import { goToLogin } from "../routes/coordinator";
import { useEffect } from "react";

const useProttectedPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!token) {
            goToLogin(navigate)
        }
    }, [navigate]);
};

export default useProttectedPage;