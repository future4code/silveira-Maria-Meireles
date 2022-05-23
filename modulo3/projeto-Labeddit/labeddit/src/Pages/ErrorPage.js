import React from "react";
import ErrorImage from '../assets/ErrorImage.jpg'
import styled from 'styled-components'
 
const ImageContainer = styled.div`
height: 90vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const ErrorAlert = styled.img`
max-width: 65%;

`
const ErrorPage = () => {

    return (
        <ImageContainer>
            <ErrorAlert src={ErrorImage} alt={'Erro 404, Página não encontrada!'} />
        </ImageContainer>
    )
}

export default ErrorPage;