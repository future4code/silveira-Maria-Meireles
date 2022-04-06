import axios from 'axios';
import React from 'react'

export default class ListaUsuarios extends React.Component{
    state = {
        usuarios: []
    };

    componentDidMount() {
        this.resgataListaDeUsuarios();
    }

    resgataListaDeUsuarios = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        try {
            const listaResgatada = await axios.get(url, {headers: {
                Authorization: "maria-meireles-silveira"
        }});
            this.setState({usuarios: listaResgatada.data})
            
        }catch(err) {alert(err.message)}
    };

    deletaUsuario = async(id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        try {
            const UsuarioDeletado = await axios.delete(url, {headers: {
            Authorization: "maria-meireles-silveira"
        }});
            alert(`Usuário deletado com sucesso!`);
            this.resgataListaDeUsuarios();
        }catch(err){
            alert(err.message)
        };
    };

    render() {
        const usuariosMapeados = this.state.usuarios.map((usuario) => {
            return <li key={usuario.id}>
                    {usuario.name} 
                    <button onClick={() => this.deletaUsuario(usuario.id)}> X </button>
                   </li>
        });

        return (
            <div>
                <h2> Usuários Cadastrados </h2>
                <div>
                    <ul>
                        {usuariosMapeados}
                    </ul>
                </div>
            <button onClick={this.props.voltarParaCadastro}> Voltar </button>
            </div>
        )
    }
}