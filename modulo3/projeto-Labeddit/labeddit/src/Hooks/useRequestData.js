import {useEffect, useState} from 'react';
import axios from 'axios';
import { token } from '../constants/tokens';

const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData);

    useEffect(() => {
        axios.get(url, {headers: {
            Authorization: token
        }})
        .then((res) => {
            setData(res.data);
        }).catch((err) => {
            alert(err.message)
        });
        }, [url]);

    return (data);
};

export default useRequestData;