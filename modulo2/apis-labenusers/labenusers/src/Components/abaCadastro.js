import React from "react";
import axios from "axios";

export default class AbaCadastro extends React.Component {
    state = {
        nome: " ",
        email: " "
    };

    digitandoNome = (event) => {
        this.setState({nome: event.target.value});
        console.log(this.state.nome)
    };

    digitandoEmail = (event) => {
        this.setState({email: event.target.value});
        console.log(this.state.email)
    }

    criaUsuario = async () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users';
    const body = {
        name: this.state.nome,
        email: this.state.email
    };
    try {
        const createUser = await axios.post(url, body, {headers: {
            Authorization: "maria-meireles-silveira"
            }
        });
        console.log(`Usuário cadastrado com sucesso!`)
        this.setState({nome: " ", email: " "});
    } catch(err) {
        alert(err.message);
    };
};


    render() {

        return (
            <div>
                <h1> Cadastre-se na Labenu </h1>

                <div>
                    <label for={"nome"}> Nome: </label>
                    <input onChange={this.digitandoNome}
                    placeholder={"Nome"}
                    value={this.state.nome}
                    id={"nome"} type={"text"}/>

                    <label for={"email"}> E-mail: </label>
                    <input onChange={this.digitandoEmail}
                    placeholder={"E-mail"}
                    value={this.state.email}
                    id={"email"} type={"email"}/>

                    <button onClick={this.criaUsuario}> Cadastrar </button>
                    <button onClick={this.props.trocarParaUsuarios}> Vizualizar usuários </button>
                </div>
            </div>

        )
    }
}