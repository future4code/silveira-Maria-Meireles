import React from "react";
import axios from "axios";
import styled, {createGlobalStyle} from "styled-components";
import Fundo from '../assets/fundoLabenusers.jpg'

const FundoPagina = createGlobalStyle`
body {
    background-image: url(${Fundo});
    background-size: cover;
}
`
const TituloCadastro = styled.h1`
color: rgb(69, 82, 91);
width: 80%;
font-family: arial;
font-size: 45px;
font-weight: 600;
text-align: center;
margin: 40px 0 40px 0;

span {
    color: rgb(250, 156, 64);
}

`
const ContainerCadastro = styled.div`
  background-color: rgba(227, 232, 235, 0.9);
  border-radius: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15px 0 0 8%;
  height: 95vh;
  width: 50%;
`
const ContainerInputs = styled.div`
    display:flex;
    align-items: center;
    flex-direction: column;
    width: 80%;

  input{
    border: none;
    border-radius: 8px;
    padding: 22px;
    width: 60%;
  }

  label {
    color: rgb(69, 82, 91);
    font-family: arial;
    font-size: 18px;
    margin: 10px 0 10px 0;
  }

  button {
    background-color: rgb(254, 126, 2);
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    font-size: 15px;
    margin-top: 30px;
    padding: 20px;
    width: 68%;
  }

  button:hover {
    background-color: rgba(254, 126, 2, 0.8);
  }
`
const Botoes = styled.button`
background-color: rgb(254, 126, 2);
color: white;
`


export default class AbaCadastro extends React.Component {
    state = {
        nome: "",
        email: ""
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
        await axios.post(url, body, {headers: {
            Authorization: "maria-meireles-silveira"
            }
        });
        this.setState({nome: " ", email: " "});
        console.log("Usuário cadastrado com sucesso!")
    } catch(err) {
        alert(err.message);
    };
};


    render() {

        return (
            <>
            <FundoPagina/>
            <ContainerCadastro>
                <TituloCadastro> Cadastre-se na <span> Labenu </span>_ </TituloCadastro>

                <ContainerInputs>
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

                    <Botoes onClick={this.criaUsuario}> CADASTRAR </Botoes>
                    <Botoes onClick={this.props.trocarParaUsuarios}> VIZUALIZAR USUÁRIOS </Botoes>
                </ContainerInputs>
            </ContainerCadastro>
            </>

        )
    }
}