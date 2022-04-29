import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useResgataViagens from '../../Hooks/useResgataViagens';
import { vaiParaCadastrarViajante } from '../../routes/coordinator';

const PaginaViagens = () => {

    const navigate = useNavigate();
    const viagens = useResgataViagens();

    return (
        <div>
            <div>
                {viagens.map((viagem) => {
                    return(
                        <div key={viagem.id}>
                            <h2> {viagem.name} </h2>
                            <p> {viagem.description} </p>
                            <p> Data de partida: {viagem.date} </p>
                            <p> Duração: {viagem.durationInDays} dias. </p>
                            <p> Planeta Destino: {viagem.planet} </p>
                        </div>
                    )
                })}
            </div>
            <button onClick={() => vaiParaCadastrarViajante(navigate)}> Candidatar-se </button>
        </div>
    )
};

export default PaginaViagens;

