import React from "react";
import PaginaHome from './pages/PaginaHome'
import PaginaPlaylists from './pages/PaginaPlaylists'
import PaginaDetalhe from './pages/PaginaDetalhe'
import styled, { createGlobalStyle } from "styled-components";

const FundoTelas = createGlobalStyle`
* {
  background-color: black;
  margin: 0;
  padding: 0;
  color: white;
}
`

export default class App extends React.Component {

  state = { 
    telaAtual: 'home',
    playlistClicada: ''
  };

  trocaDeTela = () => {
    switch(this.state.telaAtual) {
      case 'home': 
        return <PaginaHome irParaPlaylists={this.irParaPlaylists}/>
      case 'playlists':
        return <PaginaPlaylists irParaDetalhes={this.irParaDetalhes} voltarParaHome={this.voltarParaHome}/>
      case 'detalhe':
        return <PaginaDetalhe voltarParaPlaylists={this.voltarParaPlaylists} playlistClicada={this.state.playlistClicada}/>
      default: 
        return alert("Ocorreu um erro. Página não encontrada.");
    };
  };

  irParaPlaylists = () => {
    this.setState({telaAtual: 'playlists'});
  };

  voltarParaHome = () => {
    this.setState({telaAtual: 'home'});
  };

  irParaDetalhes = (id) => {
    this.setState({telaAtual: 'detalhe', playlistClicada: {id} });
  }; 
  
  voltarParaPlaylists = () => {
    this.setState({telaAtual: 'playlists', playlistClicada: ''})
  }


  render () {
  return (
    <>
      <FundoTelas/>
      <div> {this.trocaDeTela()} </div>
    </>
  );
  };
};
