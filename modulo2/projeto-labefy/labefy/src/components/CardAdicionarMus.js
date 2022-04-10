import axios from "axios";
import React from "react";
import { URL_base } from "../constants/urls";
import PaginaDetalhe from "../pages/PaginaDetalhe";

export default class CardAdicionarMus extends React.Component {
    state = {
        nomeMusica: "",
        artista: "",
        link: "",
    };

    aoAdicionarNomeMusica = (event) => {
        this.setState({nomeMusica: event.target.value})
    };

    aoAdicionarArtista = (event) => {
        this.setState({artista: event.target.value})
    };

    aoAdicionarLink = (event) => {
        this.setState({link: event.target.value})
    };

    render () {
        return (
            <div>
                <input onChange={this.aoAdicionarNomeMusica} placeholder={"Nome da música"} type={"text"} value={this.state.nomeMusica}/>
                <input onChange={this.aoAdicionarArtista} placeholder={"Artista"} type={"text"} value={this.state.artista}/>
                <input onChange={this.aoAdicionarLink} placeholder={"Link"} type={"text"} value={this.state.link}/>
                <button onClick={''}> Adicionar </button>
            </div>
        )
    }
}