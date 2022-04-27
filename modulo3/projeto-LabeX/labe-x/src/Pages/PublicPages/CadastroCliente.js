import React from 'react';
import { useNavigate } from 'react-router-dom';
import { voltarParaAnterior } from '../../routes/coordinator';

const CadastroCliente = () => {
    
    const navigate = useNavigate();
    
    return (
        <div>
            <h1> Me leva na viageeeeeem! :( </h1>
            <button onClick={() => voltarParaAnterior(navigate)}> Voltar </button>
        </div>
    )
};

export default CadastroCliente;
