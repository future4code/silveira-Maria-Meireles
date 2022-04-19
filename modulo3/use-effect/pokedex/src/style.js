import styled, {createGlobalStyle} from 'styled-components';

export const FundoVerm = createGlobalStyle`
body {
    background-color: rgb(206, 17, 49);
}
`

export const ContainerCard = styled.div`
background-color: rgb(222, 222, 222);
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
max-width: 40%;
`

export const SelectPokemon = styled.select`
width: 80%;
border: none;
border-radius: 10px;
padding: 10px;
margin-top: 20px;
`