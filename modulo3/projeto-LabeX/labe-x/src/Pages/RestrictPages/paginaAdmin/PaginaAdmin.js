import axios from 'axios';
import React, {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_url } from '../../../constants/urls';
import useResgataViagens from '../../../Hooks/useResgataViagens';
import { vaiParaDetalhesAdmin } from '../../../routes/coordinator';
import { voltarParaAnterior } from '../../../routes/coordinator';

const PaginaAdmin = () => {
    const navigate = useNavigate();
    const listaViagens = useResgataViagens();
    const params = useParams();

    return (
        <div>

            <div>
                {listaViagens.map((viagem) => {
                    return(
                        <div key={viagem.id}>
                            <h2> {viagem.name} </h2>
                            <p> {viagem.description} </p>
                            <p> Data de partida: {viagem.date} </p>
                            <p> Duração: {viagem.durationInDays} dias. </p>
                            <p> Planeta Destino: {viagem.planet} </p>
                            <button onClick={() => vaiParaDetalhesAdmin(navigate, viagem.id)}> Detalhes </button> 
                        </div>
                    )
                })}
            </div>
            <button onClick={() => voltarParaAnterior(navigate)}> Voltar </button>
        </div>
    )
};

export default PaginaAdmin ;