import React, { useState, useEffect } from "react";
import { BASE_url } from "../constants/urls";
import axios from 'axios'

const useResgataViagens = () => {
    const [viagens, setViagens] = useState([]);
    
    const resgataListaDeviagens = () => {
        const url = `${BASE_url}/trips`
        axios.get(url)
        .then((res) => {
            console.log(res.data.trips);
            setViagens(res.data.trips);
        })
        .catch((err) => {
            console.log(err.response);
        });
    };

    useEffect(() => {
        resgataListaDeviagens();
    }, []);

    return viagens;
}; 
export default useResgataViagens;