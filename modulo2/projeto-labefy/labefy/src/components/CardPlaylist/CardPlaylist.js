import React from 'react';
import CapaPlaylist from '../../assets/playlist-cover1.png'
import { CardDePlaylist, ContainerPlaylists } from './style';

export default class CardPlaylists extends React.Component {
  state = {
    pesquisa: ''
  };

  aoDigitarPesquisa = (event) => {
    this.setState({pesquisa: event.target.value});
  };


    render () {
        // Lógica de pesquisa das linhas 16 até 19. //
        const playlistsFiltradas = this.props.listaPlaylists.filter((playlist) => {
          return (
            playlist.name.toLowerCase().includes(this.state.pesquisa.toLowerCase())
          )
        }).map((playlist) => {
            return <CardDePlaylist key={playlist.id}>
                   <img 
                   src={CapaPlaylist} 
                   alt={"Capa da playlist"}
                   onClick= {() => this.props.irParaDetalhes(playlist.id)}
                   />
                   <p onClick= {() => this.props.irParaDetalhes(playlist.id)}>
                    {playlist.name}
                  </p>
            </CardDePlaylist>
        });

        return (
          <>
          <header>
          <input
          type={'text'}
          placeholder={'Pesquisar playlist'}
          value={this.state.pesquisa}
          onChange={this.aoDigitarPesquisa}
          ></input>

          <select>
            <option> Ordenar </option>
            <option> A - Z </option>
            <option></option>
          </select>

        </header>
          <ContainerPlaylists>
            

            {playlistsFiltradas}
          </ContainerPlaylists>
          </>
        )
    }
}