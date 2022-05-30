import React from 'react'
import axios from 'axios'
import { goToFeed } from '../routes/coordinator'
import { BASE_URL } from '../constants/urls'

export const login = (form, navigate) => {
    const url = `${BASE_URL}/users/login`
   
    axios.post(url, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            goToFeed(navigate)
        }).catch((err) => {
        })
}

export const register = (form, navigate) => {
    const url = `${BASE_URL}/users/signup`

    axios.post(url, form)
    .then((res) => {
        localStorage.setItem("token", res.data.token)
        goToFeed(navigate)
    }).catch((err) => {
    })
}