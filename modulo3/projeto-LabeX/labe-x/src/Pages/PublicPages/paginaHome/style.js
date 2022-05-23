import styled from 'styled-components';

export const ContainerPagina = styled.div`
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
width: 80%;
`

export const LogoAstronauta = styled.img`
margin-top: 30px;
width: 40%;
`

export const ContainerBotoes = styled.div`
display: flex;
justify-content: space-between;
margin-top: 45px;
width: 35%;
`

export const BotoesHome = styled.button`
padding: 20px;
background-color: rgb(50, 59, 63);
color: rgb(254, 126, 2);
border: 5px solid rgb(254, 126, 2);
border-radius: 15px 15px 23px 23px;
font-size: 14px;
font-weight: 800;
width: 160px;

:hover{
    cursor: pointer;
}
`