import React from 'react';
import { vaiParaLogin, vaiParaViagens } from '../../../routes/coordinator';
import logo from '../../../assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { BotoesHome, ContainerBotoes, ContainerPagina, LogoAstronauta } from './style';

const PaginaHome = () => {

    const navigate = useNavigate();

    return (
        <ContainerPagina>
            <LogoAstronauta src={logo} alt={"Astronauta"}/>

            <ContainerBotoes>
                <BotoesHome onClick = {() => vaiParaLogin(navigate)}> LOGIN </BotoesHome>
                <BotoesHome onClick={() => vaiParaViagens(navigate)}> VER VIAGENS </BotoesHome>
            </ContainerBotoes>
        </ContainerPagina>
    )
};

export default PaginaHome;