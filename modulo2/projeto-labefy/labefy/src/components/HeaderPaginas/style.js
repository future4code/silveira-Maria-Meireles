import styled from 'styled-components';

export const Cabecalho = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
padding: 5px;
margin: 0 20px 0 20px;

img {
    width: 170px;
}
`

export const BotaoCabecalho = styled.button`
border: none;
border-radius: 3px;
background-color: rgb(254, 126, 2);
cursor: pointer;
font-size: 14px;
padding: 10px;

:hover{
    box-shadow: 2px 2px 20px rgba(255, 255, 255, 0.4);
    transform: scale(1.1)
}

:active{
    transform: scale(1.0);
}
`