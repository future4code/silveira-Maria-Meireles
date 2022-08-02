import axios from 'axios'
import { useState, useEffect } from 'react'

const UseRequestData = (initialState, url) => {

    const token = localStorage.getItem("token")
    const [data, setData] = useState(initialState)

    const getData = async() => {
        await axios.get(url, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            setData(res.data)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }

    useEffect(() => {
        getData()
    }, [])

    return [data]
}

export default UseRequestData;