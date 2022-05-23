import React from 'react'
import { token } from '../constants/tokens'
import { BASE_URL } from '../constants/urls'
import axios from 'axios'

export const sendNewPost = (form) => {
    const url = `${BASE_URL}/posts`

    axios.post(url, form, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
    }).catch((err) => {
        console.log(err.response)
    })
}

export const createPostVote = (id) => {
    const url = `${BASE_URL}/posts/${id}/votes`
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

export const votePostDown = (id) => {
    const url = `${BASE_URL}/posts/${id}/votes`
    const body = {direction: -1}

    axios.post(url, body, {
        headers: {
            Authorization: token
        }
    })
    .then((res) => {
    }).catch((err) => {
    })
}
