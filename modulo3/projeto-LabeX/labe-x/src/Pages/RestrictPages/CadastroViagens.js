import React from 'react';

const CadastroViagens = () => {

    return (
        <div> 
            <h1> Cadastre-se para uma viagem! </h1>

            <div>
                <input
                type='text'
                placeholder='Nome'
                value={''}
                />

                <input 
                type='number'
                placeholder='Idade'
                value={''}
                />
                
            </div>
        </div>
    )
};

export default CadastroViagens;