import React from 'react';
import axios from "axios";
import CardPlaylists from '../components/CardPlaylist';
import { URL_base } from '../constants/urls';

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
            console.log(err.message)
        })
    };

    render() {
        return (
            <>
                <div> 
                    <CardPlaylists listaPlaylists={this.state.listaPlaylists} irParaDetalhes={this.props.irParaDetalhes} playlistClicada={this.props.playlistClicada}/>
                </div>
            </>
        )
    }
}