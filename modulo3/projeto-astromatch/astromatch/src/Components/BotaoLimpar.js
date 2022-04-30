import axios from 'axios';
import React from 'react';
import { BASE_url } from '../contants/urls'
import styled from 'styled-components'
import { laranjaClaro, laranjaEscuro } from '../contants/cores';

const BotaoLimpa = styled.button`
color: white;
background-color: ${laranjaEscuro};
padding: 10px;
border: 1px solid ${laranjaClaro};
margin: 20px;
border-radius: 10px;
`

const BotaoLimpar = (props) => {
    
    const limpaDadosSalvos = () => {
        axios.put(`${BASE_url}/clear`)
        .then((res) => {
            alert("Histórico deletado com sucesso!");
            props.resgataMatches();
            
        })
        .catch((err) => {
            console.log(err.message);
        });
    };

    return (
        <BotaoLimpa onClick={limpaDadosSalvos}> Limpar histórico e matches </BotaoLimpa>
    )
};

export default BotaoLimpar;