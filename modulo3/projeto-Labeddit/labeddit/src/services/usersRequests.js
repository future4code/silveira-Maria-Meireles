import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { goToFeed } from '../routes/coordinator'

export const login = (body, navigate) => {
    const url = `${BASE_URL}/users/login`

    axios.post(url, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToFeed(navigate);

    }).catch((err) => {
        console.log(err.response)
    })
};

export const register = (body, navigate) => {
    const url = `${BASE_URL}/users/signup`

    axios.post(url, body)
    .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToFeed(navigate);
    }).catch((err) => {
        console.log(err.reponse);
    })
};