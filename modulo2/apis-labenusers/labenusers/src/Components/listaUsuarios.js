import axios from 'axios';
import React from 'react'

export default class ListaUsuarios extends React.Component{
    state = {
        usuarios: []
    };

    componentDidMount() {
        this.resgataListaDeUsuarios();
    }

    resgataListaDeUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        axios.get(url, {headers: {
            Authorization: "maria-meireles-silveira"
        }}).then((res)=> {
            this.setState({usuarios: res.data})
            console.log(res.data)
        }).catch((err)=>{alert(err.message)})
    };

    deletaUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {headers: {
            Authorization: "maria-meireles-silveira"
        }}).then((res) => {
            alert(`Usuário deletado com sucesso!`);
            this.resgataListaDeUsuarios();
        }).catch((err) => {
            alert(err.message)
        });
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
                <ul>
                    {usuariosMapeados}
                </ul>
            <button onClick={this.props.voltarParaCadastro}> Voltar </button>
            </div>
        )
    }
}