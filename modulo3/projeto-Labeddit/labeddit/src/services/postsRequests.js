import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { token } from '../constants/tokens'

export const subVote = (id, setVote) => {
    const url = `${BASE_URL}/posts/${id}/votes`
    const body = { direction: 1 }

    axios.post(url, body, {headers: {
        Authorization: token
    }})
    .then((res) => {
        setVote(true);
    }).catch((err) => {})
};

export const downVote = (id, setVote) => {
    const url = `${BASE_URL}/posts/${id}/votes`
    const body = {direction: -1}

    axios.put(url, body, {headers: {
        Authorization: token
    }})
    .then((res) => {
        setVote(true)
    }).catch((err) => {
    })
}

export const deleteVote = (id, setVote) => {
    const url = `${BASE_URL}/posts/${id}/votes`

    axios.delete(url, {headers: {
        Authorization: token
    }})
    .then((res) => {
        setVote(false);
    }).catch((err) => {
        console.log(err.response)
    })
};
