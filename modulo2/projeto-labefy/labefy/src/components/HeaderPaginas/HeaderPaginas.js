import React from 'react'
import { BotaoCabecalho, Cabecalho } from './style'
import logoLabefy from '../../assets/Labefy-logo.png'

export default class HeaderPaginas extends React.Component{

    render () {

        return (
            <Cabecalho>
                <img src={logoLabefy} alt={"logo labefy"}/>

                <BotaoCabecalho onClick={this.props.irParaPlaylists}> Minhas Playlists </BotaoCabecalho>
            </Cabecalho>
        )
    }
}