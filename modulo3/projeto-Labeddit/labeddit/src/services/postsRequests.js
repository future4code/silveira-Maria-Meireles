import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { token } from '../constants/tokens'


 export const createPositiveVote = (vote, id) => {
    const url = `${BASE_URL}/comments/${id}/votes`
    const body = {"direction": vote}

    axios.post(url, body, {headers: {
        Authorization: token
    }})
    .then((res) => {
        console.log(res.data)
    }).catch((err) => {
        console.log(err.message)
    })
}