import React from 'react';
import styled from 'styled-components'

function ImagemButton(props) {
    const BotaoLink = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    width: 200px;
    padding: 15px 30px;
    margin: 10px auto;
    `
    const ImagemBotao = styled.img`
    width: 30px;
    margin-right: 10px;
    `

    return (
        <a href={props.link}>
            <BotaoLink className="image-button-container">
                <ImagemBotao src={ props.imagem } alt=" "/>
                <p>{ props.texto }</p>
            </BotaoLink>
        </a>

    )
}

export default ImagemButton;