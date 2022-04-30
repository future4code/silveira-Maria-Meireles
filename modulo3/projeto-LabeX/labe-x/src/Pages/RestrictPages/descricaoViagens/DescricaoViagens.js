import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BASE_url } from '../../../constants/urls';
import { voltarParaAnterior } from '../../../routes/coordinator';

const DescricaoViagens = () => {
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const [detalheViagem, setDetalheViagem] = useState({})
    const [candidatos, setCandidatos] = useState([]);

    const resgataDetalhes = (id) => {
        const url = `${BASE_url}/trip/${id}`
        const token = localStorage.getItem('token')
        axios.get(url, {headers: {
            auth: token
        }})
        .then((res) => {
            console.log(res.data)
            setCandidatos(res.data.trip.candidates)
            setDetalheViagem(res.data.trip);
        })
        .catch((err) => {
            console.log(err.response);
        });
    };

    useEffect(() => {
        resgataDetalhes(id);
    }, []);

    return (
      <div>
        <div>
          <h2> {detalheViagem.name} </h2>
          <h3> {detalheViagem.description} </h3>
          <p> Data de partida: {detalheViagem.date} </p>
          <p> Duração: {detalheViagem.durationInDays} dias. </p>
          <p> Planeta destino: {detalheViagem.planet} </p>
        </div>

        <div>
            {candidatos.map((candidato) => {
                return (
                    <div key={candidato.id}>
                        <p> {candidato.name} </p>
                        <p> Idade: {candidato.age} </p>
                        <p> Profissão: {candidato.profession} </p> 
                        <p> País: {candidato.country} </p>
                        <p> {candidato.applicationText} </p>
                        <div>
                            <button> Aprovar </button>
                            <button> Reprovar </button>
                        </div>
                    </div>
                )
            })}
        </div>
            <button onClick={() => voltarParaAnterior(navigate)}> Voltar </button>
      </div>
    );
};

export default DescricaoViagens;