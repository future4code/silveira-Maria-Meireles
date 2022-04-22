import React from "react";
import axios from "axios";
import {ContainerPrincipal, ContainerBotoes, RodapePagina } from "./style";
import { URL_base } from "../../constants/urls";
import ChamadaUm from "../../assets/chamada_novoUser.png";
import ChamadaDois from "../../assets/chamada_UserCadastrado.png";
import HeaderPaginas from "../../components/HeaderPaginas/HeaderPaginas";

export default class PaginaHome extends React.Component {
  state = {
    nomePlaylist: "",
    playlists: 0,
  };

  aoDigitarPlaylist = (event) => {
    this.setState({ nomePlaylist: event.target.value });
    console.log(this.state.nomePlaylist);
  };

  criarPlaylist = () => {
    const url = `${URL_base}/playlists`;
    console.log(url);
    const body = {
      name: this.state.nomePlaylist,
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: "maria-meireles-silveira",
        },
      })
      .then((res) => {
        console.log("Playlist criada com sucesso!");
        this.setState({ nomePlaylist: "" });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  render() {
    return (
      <div>
        <HeaderPaginas irParaPlaylists={this.props.irParaPlaylists}/>
        <ContainerPrincipal>
          <img
            src={this.state.playlists > 0 ? `${ChamadaDois}` : `${ChamadaUm}`}
            alt={"Chamada página home"}
          />

          <ContainerBotoes>
            <input
              type={"text"}
              placeholder={"Nome da Playlist"}
              onChange={this.aoDigitarPlaylist}
              value={this.state.nomePlaylist}
            ></input>

            <button onClick={this.criarPlaylist}>Criar Playlist</button>
          </ContainerBotoes>
        </ContainerPrincipal>

        <RodapePagina>
          <span> Desenvolvido por @EduardaPacheco </span>
        </RodapePagina>
      </div>
    );
  }
}
