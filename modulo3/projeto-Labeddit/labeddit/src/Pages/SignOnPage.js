import React from 'react'
import LoginForm from '../Components/Login/LoginForm';
import Logo from '../assets/Logotipo.png'
import { useNavigate } from 'react-router-dom';
import { goToRegister } from '../routes/coordinator';
import useUnprottectedPage from '../Hooks/useUnpprotectedPage';
import styled from 'styled-components'
import { FormButtons } from '../Components/Login/styled';

const LoginContainer = styled.div`
@media screen and (max-width: 680px){
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 85%;
    height: 100vh;

    p {
        border-top: 1px solid black;
    }
}
`
const RobotLogo = styled.img`
@media screen and (max-width: 680px){
   max-width: 60%;
   margin: 30px 0 40px 0;
}
`
const ContainerInputs = styled.div`
display: flex;
flex-direction: column;
max-width: 100%;
`

const SignOnPage = () => {
    useUnprottectedPage()
    const navigate = useNavigate();

    return (
        <LoginContainer>
            <RobotLogo src={Logo} alt={"logo robô"}/>
            <ContainerInputs>
            <LoginForm/>
                <p></p>
                <FormButtons onClick={() => goToRegister(navigate)}> Crie uma conta! </FormButtons>
            </ContainerInputs>
        </LoginContainer>
    )
}

export default SignOnPage;