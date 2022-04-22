import styled from 'styled-components';

const LaranjaPadrao = `rgb(254, 126, 2)`;

export const ContainerPrincipal = styled.main`
display: flex;
flex-direction: column;
align-items: center;

img {
    margin: 8% 0 5% 0;
    width: 85%;
}
`

export const ContainerBotoes = styled.div`
display: flex;
justify-content: center;
width: 100%;


input {
    border: none;
    border-radius: 3px;
    background-color: white;
    color: black;
    cursor: pointer;
    padding: 1em;
    width: 50%;

:hover {
box-shadow: 2px 2px 20px rgba(255, 255, 255, 0.4);
color: ${LaranjaPadrao};
}
}

button {
border: none;
border-radius: 3px;
background-color: ${LaranjaPadrao};
cursor: pointer;
font-size: 12px;
margin-left: 8px;
padding: 1em;

:hover{
    box-shadow: 2px 2px 20px rgba(255, 255, 255, 0.4);
    transform: scale(1.1)
}

:active{
    transform: scale(1.0);
}
}
`

export const RodapePagina = styled.footer`
margin: 2em 2em 0.5em 2em;
padding-top: 1em;
border-top: 1px solid ${LaranjaPadrao};
text-align: center;

span {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1em;
    color: ${LaranjaPadrao};
}
`