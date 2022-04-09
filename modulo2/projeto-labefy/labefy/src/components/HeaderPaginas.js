import React from 'react'
import logoLabefy from '../assets/Labefy-logo.png'

export default class HeaderPaginas extends React.Component{

    render () {
        return (
            <header>
                <img src={logoLabefy}/>

                <p onClick={this.props.irParaPlaylists}> Minhas Playlists </p>
            </header>
        )
    }
}