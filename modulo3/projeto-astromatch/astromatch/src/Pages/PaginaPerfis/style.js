import styled from 'styled-components';
import { laranjaEscuro } from '../../contants/cores';

export const ContainerHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 8px;
`

export const Logo = styled.img`
width: 200px;
`
export const Chat = styled.img`
width: 55px;
`

export const FotoPerfil = styled.img`
width: 350px;
height: 450px;
padding: 20px;
`

export const ContainerPerfil = styled.div`
display: flex;
flex-direction: column;
margin: auto;
width: 80%;

img{
    align-self: center;
    position: relative;
    opacity: 0.9;
}
h2, span {
    position: relative;
    bottom: 100px;
    margin: auto;
    text-align: start;
    width: 80%;
}
`
export const ContainerBotoes = styled.div`
display: flex;
justify-content: space-evenly;
position: relative;
bottom: 60px;
`

export const BotaoUm = styled.button`
background-color: white;
border: 1px solid #ED6F6F;
border-radius: 50%;
padding: 10px;

img {
height: 50px;
width: 50px;
}
`

export const Botaodois = styled.button`
background-color: white;
border: 1px solid #60C874;
border-radius: 50%;
padding: 10px;

img {
height: 50px;
width: 50px;
}
`
