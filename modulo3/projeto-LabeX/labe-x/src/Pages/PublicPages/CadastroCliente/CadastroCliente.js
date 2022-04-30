import React from 'react';
import { useNavigate } from 'react-router-dom';
import useResgataViagens from '../../../Hooks/useResgataViagens'
import { voltarParaAnterior } from '../../../routes/coordinator';
import { selectPaises } from '../../../lists/paises';
const CadastroCliente = () => {
    
    const navigate = useNavigate();
    const listaViagens = useResgataViagens();

    const aoEnviarForm = (event) => {
        event.preventDefault();
        
    }
    
    return (
        <div>
            <h1> Inscrição </h1>

            <form onSubmit={aoEnviarForm}>
                <select>
                    <option> Selecionar </option>
                    {listaViagens.map((viagem) => {
                        return (
                            <option value={viagem.id}> {viagem.name} </option>
                        )
                    })}; 
                </select>

                <input
                type="text"
                placeholder='Nome'
                name={'name'}
                value={''}
                onChange={''}
                required
                />

                <input 
                type='number'
                placeholder='Idade'
                name={'age'}
                value={''}
                onChange={''}
                required
                />

                <textarea
                placeholder='Texto de inscrição'
                name={'applicationText'}
                value={''}
                onChange={''}
                required
                />

                <input
                type='text'
                placeholder='Profissão'
                name={'profession'}
                value={''}
                onChange={''}
                required
                />

                {selectPaises()}

                <button> Enviar </button>
            </form>
            <button onClick={() => voltarParaAnterior(navigate)}> Voltar </button>
        </div>
    )
};

export default CadastroCliente;
