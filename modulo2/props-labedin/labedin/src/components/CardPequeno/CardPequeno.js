import React from 'react';

const CardPequeno = (props) => {
    return (
        <div className = "smallcard-Container">
            <h5> {props.titulo} </h5>
            <span> {props.texto} </span>
        </div>
    )
}

export default CardPequeno;