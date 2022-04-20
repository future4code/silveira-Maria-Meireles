import styled, {createGlobalStyle}  from 'styled-components'
import {laranjaClaro, laranjaEscuro} from "./cores"

 export const EstiloGlobal = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
}

body {
    background-color: ${laranjaClaro};
}
`

export const ContainerSite = styled.div`
background-color: ${laranjaEscuro};
`