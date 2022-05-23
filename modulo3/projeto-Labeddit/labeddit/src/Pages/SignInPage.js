import React from 'react'
import { useNavigate } from 'react-router-dom';
import LoginForm from '../Components/Login/LoginForm';
import { goToRegister } from '../routes/coordinator';
import labelogo from '../assets/labelogol.jpg'

const SignInPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <img src={labelogo} alt={"Logo do site"}/>
            <h2> Labeddit </h2>
            <p> O projeto de rede social da Labenu </p> 
            <LoginForm />
            <button onClick={() => goToRegister(navigate)}> Não possui conta? Cadastre-se </button> 
        </div>
    )
}

export default SignInPage;