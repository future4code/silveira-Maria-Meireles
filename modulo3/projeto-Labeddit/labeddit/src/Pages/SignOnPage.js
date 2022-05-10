import React from 'react'

const SignOnPage = () => {

    return (
        <div>
            <img src={''} alt={"Aqui vai vir o logo"}/>

            <form onSubmit={''}>
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

            <button> Entrar </button>
            <hr/>
            <button> Crie uma conta! </button>
        </div>
    )
}

export default SignOnPage;