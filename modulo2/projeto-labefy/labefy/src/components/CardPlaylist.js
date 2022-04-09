import React from 'react';
import CapaPlaylist from '../assets/playlist-cover1.png' 

export default class CardPlaylists extends React.Component {

    render () {

        return (
            <div>
                <figure>
                    <img src={CapaPlaylist}/>
                    <h2> Tìtulo genérico </h2> 
                </figure>
        
            </div>
        )
    }
}