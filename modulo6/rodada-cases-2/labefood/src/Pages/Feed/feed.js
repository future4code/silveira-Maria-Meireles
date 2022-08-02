import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL } from '../../constants/baseUrl'

const FeedPage = () => {
    const [restaurants, setRestaurants] = useState([])
    const token = localStorage.getItem('token')
    
    const getRestaurants = () => {
        axios.get(`${BASE_URL}/restaurants`,{ 
            headers: {
                auth: token
            }
        })

        .then((res) => {
            console.log(res.data)
            setRestaurants(res.data.restaurants)

        })
        .catch((error) => {
            console.log(error)
        })

        useEffect(() => {
            getRestaurants()

        }, [])
    }

    return (
    <div>
        <h1> Feed </h1>
    </div>
    )
}

export default FeedPage;