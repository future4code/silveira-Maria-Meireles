import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASE_url } from '../../constants/urls';
import { vaiParaDetalhesAdmin } from '../../routes/coordinator';

const PaginaAdmin = () => {

    const [listaViagens, setListaViagens] = useState([]);
    const navigate = useNavigate();

    const resgataListaDeviagens = () => {
        const url = `${BASE_url}/trips`
        axios.get(url)
        .then((res) => {
            console.log(res.data.trips);
            setListaViagens(res.data.trips);
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
                {listaViagens.map((viagem) => {
                    return(
                        <div>
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
        </div>
    )
};

export default PaginaAdmin;

