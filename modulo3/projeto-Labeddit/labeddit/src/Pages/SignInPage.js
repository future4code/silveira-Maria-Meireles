import React from 'react'
import RegisterForm from '../Components/Register/RegisterForm';
import useUnprottectedPage from '../Hooks/useUnpprotectedPage';

const SignInPage = () => {
    useUnprottectedPage()
    return (
        <>
            <RegisterForm/>
        </>
    )
}

export default SignInPage;