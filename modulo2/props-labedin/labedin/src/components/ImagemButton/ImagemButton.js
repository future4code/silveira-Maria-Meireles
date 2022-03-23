import React from 'react';
import './ImagemButton.css'

function ImagemButton(props) {
    return (
        <a href={props.link}>
            <div className="image-button-container">
                <img src={ props.imagem }/>
                <p>{ props.texto }</p>
            </div>
        </a>

    )
}

export default ImagemButton;