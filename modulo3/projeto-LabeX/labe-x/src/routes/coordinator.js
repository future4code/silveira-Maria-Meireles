import React from 'react'

export const vaiParaViagens = (navigate) => {
    navigate('/viagens/lista');
};

export const vaiParaCadastrarViajante = (navigate) => {
    navigate('/viagens/candidatar');
};

export const voltarParaAnterior = (navigate) => {
    navigate(-1);
};

