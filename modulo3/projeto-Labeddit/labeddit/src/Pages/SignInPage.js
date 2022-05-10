import React from 'react'

const SignInPage = () => {

    return (
        <div>
            <h1> Olá, boas vindas ao LabEddit! ;) </h1> 

            <form onSubmit={''}>
                <input
                type='text'
                placeholder='Nome de usuário'
                name={''}
                value={''}
                onChange={''}
                />

                <input
                type='email'
                placeholder='E-mail'
                name={''}
                value={''}
                onChange={''}
                />

                <input
                type='password'
                placeholder='Senha'
                name={''}
                value={''}
                onChange={''}
                />
            </form>

            <div>
                <p> Ao continuar, você concorda com o nosso contrato de usuário e nossa política de privacidade </p>
                <input type='checkbox' id="opcao"/>
                <label for='opcao'>
                    Eu concordo em receber E-mails sobre coisas legais no LabEddit.
                </label>
            </div>

            <button> Cadastrar </button> 
        </div>
    )
}

export default SignInPage;