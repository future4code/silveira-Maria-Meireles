import React from "react";
import axios from "axios";
import { AdicionarPlaylist, BotaoAddPlaylist } from "./EstiloHome";
import { URL_base } from "../constants/urls";
import ChamadaUm from "../assets/chamada_novoUser.png";
import ChamadaDois from "../assets/chamada_UserCadastrado.png";
import HeaderPaginas from "../components/HeaderPaginas";

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
      <>
        <HeaderPaginas irParaPlaylists={this.props.irParaPlaylists} />
        <main>
          <img
            src={this.state.playlists > 0 ? `${ChamadaDois}` : `${ChamadaUm}`}
            alt={"Chamada página home"}
          />

          <div>
            <AdicionarPlaylist
              type={"text"}
              placeholder={"Nome da Playlist"}
              onChange={this.aoDigitarPlaylist}
              value={this.state.nomePlaylist}
            ></AdicionarPlaylist>

            <BotaoAddPlaylist onClick={this.criarPlaylist}>Criar Playlist</BotaoAddPlaylist>
          </div>
        </main>

        <footer>
          <span> Desenvolvido por @EduardaPacheco </span>
        </footer>
      </>
    );
  }
}
