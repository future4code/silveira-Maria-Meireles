import axios from 'axios'
import { BASE_URL } from '../constants/urls'

export const getPosts = () => {
    const url = `${BASE_URL}/posts`
    const token = localStorage.getItem("token")

    axios.get(url, {headers: {
        Authorization: token
    }})
    .then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err.response)
    })
}