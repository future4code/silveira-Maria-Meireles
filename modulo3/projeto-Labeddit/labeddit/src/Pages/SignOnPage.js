import React from 'react'
import LoginForm from '../Components/Login/LoginForm';
import Logo from '../assets/Logotipo.png'
import { useNavigate } from 'react-router-dom';
import { goToRegister } from '../routes/coordinator';

const SignOnPage = () => {
    const navigate = useNavigate();

    return (
        <div>
            <img src={Logo} alt={"Aqui vai vir o logo"}/>
            <LoginForm/>
            <hr/>
            <button onClick={() => goToRegister(navigate)}> Crie uma conta! </button>
        </div>
    )
}

export default SignOnPage;