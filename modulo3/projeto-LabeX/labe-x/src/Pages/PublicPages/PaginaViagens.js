import React from 'react';
import { useNavigate } from 'react-router-dom';
import { vaiParaCadastrarViajante } from '../../routes/coordinator';

const PaginaViagens = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h1> Bora rolezar </h1>
            <button onClick={() => vaiParaCadastrarViajante(navigate)}> Candidatar-se </button>
        </div>
    )
};

export default PaginaViagens;

