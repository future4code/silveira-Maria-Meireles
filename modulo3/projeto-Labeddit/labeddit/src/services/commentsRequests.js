import axios from 'axios'
import {BASE_URL} from '../constants/urls'
import { token } from '../constants/tokens'

export const supComment = (id, setCommentState) => {
    const url = `${BASE_URL}/comments/${id}/votes`
    const body = { direction: 1}

    axios.post(url, body, {headers: {
        Authorization: token
    }})
    .then((res) => {
        setCommentState(true)
    }).catch((err) => {
    })
} 

export const downComment = (id, setCommentState) => {
    const url = `${BASE_URL}/comments/${id}/votes`
    const body = { direction: -1}

    axios.put(url, body, {headers: {
        Authorization: token
    }})
    .then((res) => {
        setCommentState(true)
    }).catch((err) => {
    })
}

export const deleteCommentVote = (id, setCommentState) => {
    const url = `${BASE_URL}/comments/${id}/votes`

    axios.delete(url, {headers: {
        Authorization: token
    }})
    .then((res) => {
        setCommentState(false)
    }).catch((err) => {
    })
}