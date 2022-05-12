import {useEffect, useState} from 'react';
import axios from 'axios';
import { token } from '../constants/tokens';

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData);
    const acessToken = token;

    useEffect(() => {
        axios.get(url, {headers: {
            Authorization: acessToken
        }})
        .then((res) => {
            setData(res.data);
        }).catch((err) => {
            alert("Occoreu um erro. Por favor, tente novamente.")
        });
        }, [url]);

    return (data);
};

export default useRequestData;