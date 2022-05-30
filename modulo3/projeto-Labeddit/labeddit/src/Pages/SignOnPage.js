import React from 'react'
import Header from '../Components/Header/Header';
import RegisterForm from '../Components/Register/RegisterForm'

const SignOnPage = () => {

    return (
        <div>
            <Header />
            <h1> Olá! Boas vindas ao Labeddit! :) </h1>
           <RegisterForm />
           <p> Ao continuar, você concorda com nosso contrato de usuário e política de privacidade </p> 
           <input type='checkbox' id='confirm'/>
           <label for='confirm'>
               Eu concordo em receber E-mails sobre coisas legais no Labeddit
           </label>
        </div>
    )
}

export default SignOnPage;