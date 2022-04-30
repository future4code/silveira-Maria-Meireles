import styled, {createGlobalStyle}  from 'styled-components'
import {laranjaClaro, laranjaEscuro} from "./cores"
import React, {useState} from 'react';
 
 export const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}
`

export const ContainerSite = styled.div`
background-color: ${laranjaEscuro};
border: 1px solid black;
border-radius: 10px;
display: flex;
flex-direction: column;
margin: auto;
width: 40%;
`