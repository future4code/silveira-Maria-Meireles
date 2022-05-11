import {useEffect, useState} from 'react';
import axios from 'axios';

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData);
    const token = localStorage.getItem('token');

    useEffect(() => {
        axios.get(url, {headers: {
            Authorization: token
        }})
        .then((res) => {
            setData(res.data);
            console.log(res.data)
        }).catch((err) => {
            console.log(err.response);
            alert("Occoreu um erro. Por favor, tente novamente.")
        });
        }, [url]);

    return (data);
};

export default useRequestData;