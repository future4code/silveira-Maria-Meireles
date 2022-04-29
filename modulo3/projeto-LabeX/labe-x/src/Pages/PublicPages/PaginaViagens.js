import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_url } from '../../constants/urls';
import { vaiParaCadastrarViajante } from '../../routes/coordinator';

const PaginaViagens = () => {

    const navigate = useNavigate();
    const [viagens, setViagens] = useState([]);
    
    const resgataListaDeviagens = () => {
        const url = `${BASE_url}/trips`
        axios.get(url)
        .then((res) => {
            console.log(res.data.trips);
            setViagens(res.data.trips);
        })
        .catch((err) => {
            console.log(err.response);
        });
    };

    useEffect(() => {
        resgataListaDeviagens();
    }, []);

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

