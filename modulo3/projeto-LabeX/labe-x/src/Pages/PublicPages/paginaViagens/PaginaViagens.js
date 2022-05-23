import axios from 'axios';
import React from 'react';
import { imagensPlanetas } from '../../../lists/imagensPlanetas';
import logo from '../../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import useResgataViagens from '../../../Hooks/useResgataViagens';
import { vaiParaCadastrarViajante } from '../../../routes/coordinator';
import { ContainerPagina, ContainerViagem } from './style';

const PaginaViagens = () => {

    const navigate = useNavigate();
    const viagens = useResgataViagens();


    return (
      <ContainerPagina>
        <img src={logo} alt={"Astronauta"} />
        <h1> Conheça nossas viagens </h1>
        <div>
          {viagens.map((viagem) => {
            return (
              <ContainerViagem key={viagem.id}>
                <h2> {viagem.name} </h2>
                <p> {viagem.description} </p>
                <p> Data de partida: {viagem.date} </p>
                <p> Duração: {viagem.durationInDays} dias. </p>
                <p> Planeta Destino: {viagem.planet} </p>
              </ContainerViagem>
            );
          })}
        </div>
        <button onClick={() => vaiParaCadastrarViajante(navigate)}>
          {" "}
          Candidatar-se{" "}
        </button>
      </ContainerPagina>
    );
};

export default PaginaViagens;

