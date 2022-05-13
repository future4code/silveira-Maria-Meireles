import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { token } from '../constants/tokens'

export const like = (id) => {
    const url = `${BASE_URL}/comments/${id}/votes`
    const body = {
        direction: 1
    }

    axios.post(url, body, {headers: {
        Authorization: token
    }})
    .then((res) => {
        console.log(res.message)
    }).catch((err) => {
        console.log(err.response)
        console.log(err.message)
    })
};

