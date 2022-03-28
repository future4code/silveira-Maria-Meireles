import React from 'react';
import styled from 'styled-components'

function CardGrande(props) {
    const CardSize = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;  
    `
    const Imagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
    ` 

    const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    `

    const Nome = styled.h4`
    margin-bottom: 15px;
    `

    return (
        <CardSize>
            <Imagem src={ props.imagem } alt="Eu"/>
            <ContainerTexto>
                <Nome>{ props.nome }</Nome>
                <p>{ props.descricao }</p>
            </ContainerTexto>
        </CardSize>
    )
}

export default CardGrande;