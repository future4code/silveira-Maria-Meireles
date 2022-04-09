import React from "react";
import PaginaHome from './pages/PaginaHome'
import PaginaPlaylists from './pages/PaginaPlaylists'
import PaginaDetalhe from './pages/PaginaDetalhe'
import styled, { createGlobalStyle } from "styled-components";

const FundoTelas = createGlobalStyle`
* {
  background-color: black;
  margin: 0;
  padding: 0
}
`

export default class App extends React.Component {

  state = { 
    telaAtual: 'home'
  };

  trocaDeTela = () => {
    switch(this.state.telaAtual) {
      case 'home': 
        return <PaginaHome irParaPlaylists={this.irParaPlaylists}/>
      case 'playlists':
        return <PaginaPlaylists/>
      case 'detalhe':
        return <PaginaDetalhe/>
      default: 
        return alert("Ocorreu um erro. Página não encontrada.");
    };
  };

  irParaPlaylists = () => {
    this.setState({telaAtual: 'playlists'});
  };

  irParaDetalhes = () => {
    this.setState({telaAtual: 'detalhe'});
  };

  voltarParaHome = () => {
    this.setState({telaAtual: 'home'});
  };

  render () {
  return (
    <>
      <FundoTelas/>
      <div> {this.trocaDeTela()} </div>
    </>
  );
  };
};
