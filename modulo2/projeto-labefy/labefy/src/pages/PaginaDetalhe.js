import React from "react";
import CapaPlaylist from '../assets/playlist-cover1.png'
import CardAdicionarMus from "../components/CardAdicionarMus";

export default class PaginaDetalhe extends React.Component {
    state = {
        adicionaMusica: false,
        musicas: []
    };

    aoClicarEmAdicionar = () => {
        this.setState({adicionaMusica: !this.state.adicionaMusica});
    };


    render () {

        const mostraCardAddMusica = () => {
            if(this.state.adicionaMusica) {
               return <CardAdicionarMus playlistId={this.props.playlistClicada.id}/>
            };
        };

        return (
            <>
                <header> 
                    <button onClick={this.props.voltarParaPlaylists}> Voltar </button>
                </header>

                <div> 
                    <h3> {this.props.playlistClicada.name} </h3>
                    <img src={CapaPlaylist}/> 
                    <button onClick={this.aoClicarEmAdicionar}> Adicionar faixas à playlist </button> 
                    <div> 
                        {mostraCardAddMusica()}
                    </div>
                </div>
            </>
        )
    }
}