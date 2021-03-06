import React from 'react';
import axios from "axios";
import CardPlaylists from '../../components/CardPlaylist/CardPlaylist';
import { URL_base } from '../../constants/urls';

export default class PaginaPlaylists extends React.Component{
    state = {
        listaPlaylists: []
    };

    componentDidMount() {
        this.resgataPlaylists();
    };

    resgataPlaylists = () => {
        const url = `${URL_base}/playlists`
        axios.get(url, {headers: {
            Authorization: "maria-meireles-silveira"
        }}).then((res)=> {
            this.setState({listaPlaylists: res.data.result.list})
        }).catch((err)=> {
            return <h1> Erro ao carregar playlists. (Conexão fraca) </h1>
        })
    };

    render() {
        return (
            <>
                <div> 

                    <button onClick={this.props.voltarParaHome}>
                        Home
                    </button>
                    
                    <CardPlaylists 
                    listaPlaylists={this.state.listaPlaylists} 
                    irParaDetalhes={this.props.irParaDetalhes} 
                    playlistClicada={this.props.playlistClicada}
                    />
                </div>
            </>
        )
    }
}