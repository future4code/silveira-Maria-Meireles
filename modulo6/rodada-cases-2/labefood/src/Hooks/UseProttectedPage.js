import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { goToLogin } from '../Router/coordinator'

const UseProttectedPage = () => {
    const navigate = useNavigate()

    const token = localStorage.getItem('token')
    useEffect(() => {

        if(!token) {
            goToLogin(navigate)
        }
    }, [])
}

export default UseProttectedPage;