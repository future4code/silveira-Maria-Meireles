import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { token } from '../constants/tokens'

const useRequestData = (initialState, url) => {
    const [data, setData] = useState(initialState)

    useEffect(() => {
        getData()
    }, [url])

    const getData = () => {
        axios.get(url, {
            headers: {
                Authorization: token
            }
        })
        .then((res) => {
            setData(res.data)
        }).catch((err) => {
            console.log(err.response)
        })
    } 

    return [data]
}

export default useRequestData;