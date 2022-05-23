
export const goToLogin = (navigate) => {
    navigate('/')
};

export const goToFeed = (navigate) => {
    navigate('/Feed')
};

export const goToPostComments = (navigate, id) => {
    navigate(`/ComentariosPost/${id}`)
};

export const goToRegister = (navigate) => {
    navigate('/Cadastro')
};

export const goBack = (navigate) => {
    navigate(-1)
};