import { render } from "@testing-library/react"
import React from "react"
import styled from 'styled-components'


const ContainerInput = styled.div`
position: absolute;
bottom: 0;
`

const ListaMensagens = styled.ul`
list-style-type: none;
display: flex;
`
const Mensagens = styled.li`
background-color: rgba(255,255,255, 0.8);
border-radius: 20px;
padding: 10px;
`

const CamposDeInput = styled.input`
border: none;
border-radius: 10px;
padding: 10px;
`

const Botao = styled.button`
border: none;
border-radius: 50%;
background-color: rgb(0, 142, 130);
color: white;
font-size: 20px;
padding: 10px;
`

export default class CampoMensagens extends React.Component {
   
    state = {
        listaDeMensagens: [],
        inputNome: " ",
        inputMensagem: " "
    };

    digitandoNome = (event) => {
        this.setState({inputNome: event.target.value})
    };

    digitandoMensagem = (event) => {
        this.setState({inputMensagem: event.target.value})
    };

    botaoEnviar = () => {
        const novaListaDeMensagens = [...this.state.listaDeMensagens];
        novaListaDeMensagens.push({nome: this.state.inputNome, mensagem: this.state.inputMensagem});

        
        this.setState({listaDeMensagens: novaListaDeMensagens,
            inputNome: " ",
            inputMensagem: " "
        });

    }
    render() {
      const mensagensComponentes = this.state.listaDeMensagens.map((item) => {
            return <Mensagens> {item.nome}: {item.mensagem} </Mensagens> 
        });

        return (
            <>
                <ListaMensagens> {mensagensComponentes} </ListaMensagens>
                <ContainerInput>
                    <CamposDeInput placeholder="Nome" onChange={this.digitandoNome} type="text" value={this.state.inputNome}/>
                    <CamposDeInput placeholder="Mensagem" onChange={this.digitandoMensagem} type="text" value={this.state.inputMensagem}/>
                    <Botao onClick={this.botaoEnviar}> => </Botao>
                </ContainerInput>
            </>
        )
    }
}