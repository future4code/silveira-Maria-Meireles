import React from 'react';
import CapaPlaylist from '../assets/playlist-cover1.png' 

export default class CardPlaylists extends React.Component {

    render () {
        const playlistsFiltradas = this.props.listaPlaylists.map((playlist) => {
            return <div key={playlist.id}
                    onClick={() => this.props.irParaDetalhes(playlist.id)}
                  >
                   <img src={CapaPlaylist}/>
                   <p> {playlist.name} </p>
            </div>
        });

        return (
          <>
            {playlistsFiltradas}
          </>
        )
    }
}