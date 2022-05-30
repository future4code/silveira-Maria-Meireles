import axios from "axios";
import React from "react";
import { URL_base } from '../../constants/urls';

export default class CardAdicionarMus extends React.Component {
    state = {
        nomeMusica: "",
        artista: "",
        link: "",
    };

    adicionaMusicaNaPlaylist = () => {
        const url = `${URL_base}/playlists/${this.props.playlistId}/tracks`
        const body = {
            name : this.state.nomeMusica,
            artist: this.state.artista,
            url: this.state.link
        };
        axios.post(url, body, {headers: {
            Authorization: "maria-meireles-silveira"
        }}).then((res) => {
            this.setState({
                nomeMusica: "",
                artista: "",
                link: ""
            });
            console.log("Música adicionada com sucesso!")
        }).catch((err) => {
            alert(err.message)
        });
    };

    aoAdicionarNomeMusica = (event) => {
        this.setState({nomeMusica: event.target.value});
        console.log(this.state.nomeMusica)
    };

    aoAdicionarArtista = (event) => {
        this.setState({artista: event.target.value});
        console.log(this.state.artista)
    };

    aoAdicionarLink = (event) => {
        this.setState({link: event.target.value});
        console.log(this.state.url)
    };

    render () {
        return (
            <div>
                <input onChange={this.aoAdicionarNomeMusica} 
                placeholder={"Nome da música"} 
                type={"text"} 
                value={this.state.nomeMusica}
                />

                <input onChange={this.aoAdicionarArtista} 
                placeholder={"Artista"} 
                type={"text"} 
                value={this.state.artista}
                />

                <input onChange={this.aoAdicionarLink} 
                placeholder={"Link"} 
                type={"text"} 
                value={this.state.link}
                />

                <button onClick={this.adicionaMusicaNaPlaylist}> 
                Adicionar 
                </button>

            </div>
        )
    }
}