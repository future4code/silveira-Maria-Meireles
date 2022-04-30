import styled from "styled-components";
import { laranjaClaro, laranjaEscuro } from "../../contants/cores";


export const ListaMatch = styled.ul`
display: flex;
flex-direction: column;
`

export const ItemLista = styled.li`
display: flex;
align-items: center;
border-bottom: 1px solid rgba(0,0,0, 0.4);
padding: 15px;

span{
    margin-left: 20px;
}
`
export const PerfilMatch = styled.img`
width: 55px;
height: 55px;
border-radius: 50%;
`

export const BotoesContainer = styled.div`
display: flex;
justify-content: space-between;
`

export const BotaoVoltar = styled.button`
color: white;
background-color: ${laranjaEscuro};
padding: 10px;
border: 1px solid ${laranjaClaro};
margin: 20px;
border-radius: 10px;
`

export const Mensagem = styled.p`
margin: 40px 0 40px 0;
text-align: center;
`