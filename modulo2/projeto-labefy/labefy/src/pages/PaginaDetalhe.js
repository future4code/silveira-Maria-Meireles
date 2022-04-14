import axios from "axios";
import React from "react";
import CapaPlaylist from '../assets/playlist-cover1.png'
import CardAdicionarMus from "../components/CardAdicionarMus";
import { URL_base } from "../constants/urls";

export default class PaginaDetalhe extends React.Component {
    state = {
        adicionaMusica: false,
        musicas: []
    };

    aoClicarEmAdicionar = () => {
        this.setState({adicionaMusica: !this.state.adicionaMusica});
    };

    componentDidMount() {
        this.pegaMusicasNaPlaylist()
    };

    pegaMusicasNaPlaylist = () => {
        const url = `${URL_base}/playlists/${this.props.playlistClicada.id}/tracks`
        
        axios.get(url, {headers: {
            Authorization: "maria-meireles-silveira" 
        }}).then((res) => {
            this.setState({musicas: res.data.result.tracks});
        }).catch((err) => {
            alert(err.message)
        });
    };


    render () {
        console.log(this.state.musicas)

        const mostraCardAddMusica = () => {
            if(this.state.adicionaMusica) {
               return <CardAdicionarMus playlistId={this.props.playlistClicada.id}/>
            };
        };

        const musicasMapeadas = this.state.musicas.map((musica) => {
           return <li key={musica.id}>
                <p> {musica.name} </p>
                <p> {musica.artist} </p>
            </li>
        })

        return (
            <>
                <header> 
                    <button onClick={this.props.voltarParaPlaylists}> Voltar </button>
                </header>

                <div> 
                    <h3> {this.props.playlistClicada.name} </h3>
                    <img src={CapaPlaylist} alt={"Capa playlist"}/> 
                    <button onClick={this.aoClicarEmAdicionar}> Adicionar faixas à playlist </button> 
                    <div> 
                        {mostraCardAddMusica()}
                    </div>

                    <div>
                        <ul>
                        {musicasMapeadas}
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}