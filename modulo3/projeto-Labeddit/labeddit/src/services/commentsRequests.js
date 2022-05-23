import React from 'react'
import axios from 'axios'
import { BASE_URL } from '../constants/urls'
import { token } from '../constants/tokens'


export const sendNewComment = (id, form) => {
    const url = `${BASE_URL}/posts/${id}/comments`

    axios.post(url, form, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
    }).catch((err) => {
    })
}

export const createCommentVote = (id) => {
    const url = `${BASE_URL}/comments/${id}/votes`
    const body = {direction: 1}

    axios.post(url, body, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
    }).catch((err) => {
    })
}

export const voteCommentDown = (id) => {
    const url = `${BASE_URL}/comments/${id}/votes`
    const body = {direction: -1}

    axios.put(url, body, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
    }).catch((err) => {
    })
}