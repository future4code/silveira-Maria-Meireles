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

export const vaiParaLogin = (navigate) => {
    navigate('/login');
};

export const vaiParaAdmin = (navigate) => {
    navigate(`/admin/viagens/lista`);
}

export const vaiParaDetalhesAdmin = (navigate, id) => {
    navigate(`/admin/viagens/${id}`);
};