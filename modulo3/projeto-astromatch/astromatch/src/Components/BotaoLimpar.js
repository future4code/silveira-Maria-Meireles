import axios from 'axios';
import React, {setState, useEffect}from 'react';
import { BASE_url } from '../contants/urls'

const BotaoLimpar = () => {
    
    const limpaDadosSalvos = () => {
        axios.put(`${BASE_url}/clear`)
        .then((res) => {
            alert("Histórico deletado com sucesso!");
        })
        .catch((err) => {
            alert(err.message);
        });
    };

    return (
        <button onClick={limpaDadosSalvos}> Limpar histórico e matches </button>
    )
};

export default BotaoLimpar;