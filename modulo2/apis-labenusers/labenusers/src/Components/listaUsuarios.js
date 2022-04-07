import axios from 'axios';
import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'
import Lixeira from '../assets/lixeira.png'

const FundoPagina = createGlobalStyle`
body {
    background-color: rgb(247, 244, 239);
}

button:hover {
    background-color: rgba(254, 126, 2, 0.8);
    cursor: pointer;
}
`

const ContainerPagina = styled.div`
background-color: rgb(229, 233, 235);
border-radius: 8%;
display: flex;
margin: auto;
flex-direction: column;
align-items: center;
width: 80%;
height: 90%;
padding: 30px;

p {
    font-family: Arial, Helvetica, sans-serif;
    color: rgb(69, 82, 91);
    font-size: 16px;
}
`
const TituloUsuarios = styled.h2`
font-family: Arial, Helvetica, sans-serif;
font-size: 40px;
font-weight: 600;
color: rgb(254, 126, 2);

span{
    color: rgb(69, 82, 91);
}

`
const ContainerLista = styled.div`
width: 70%;
`
const Lista = styled.ul`
margin-top: 50px;
`

const ItemLista = styled.li`
background-color: white;
box-shadow: 12px 15px rgb(254, 126, 2);
border: none;
display: flex;
align-items: center;
justify-content: space-between;
font-size: 20px;
font-family: Arial, Helvetica, sans-serif;
color: rgb(69, 82, 91);
margin: 30px;
padding: 10px;

button:hover{
    background-color: rgba(254, 126, 2, 0.8);
    cursor: pointer;
}
`
const IconeDeletar = styled.img`
width: 25px;
`

const BotaoDeletar = styled.button`
border-radius: 50%;
border: none;
background-color: rgb(254, 126, 2);
padding: 8px;
`

const BotaoVoltar = styled.button`
border: none;
background-color: rgb(254, 126, 2);
border-radius: 20%;
color: white;
font-size: 18px;
margin: 20px 0 20px 20px;
padding: 20px;
`

export default class ListaUsuarios extends React.Component{
    state = {
        usuarios: []
    };

    componentDidMount() {
        this.resgataListaDeUsuarios();
    }

    resgataListaDeUsuarios = async() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

        try {
            const listaResgatada = await axios.get(url, {headers: {
                Authorization: "maria-meireles-silveira"
        }});
            this.setState({usuarios: listaResgatada.data})
            
        }catch(err) {alert(err.message)}
    };

    deletaUsuario = async(id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        try {
            await axios.delete(url, {headers: {
            Authorization: "maria-meireles-silveira"
        }});
            alert(`Usuário deletado com sucesso!`);
            this.resgataListaDeUsuarios();
        }catch(err){
            alert(err.message)
        };
    };

    render() {
        const usuariosMapeados = this.state.usuarios.map((usuario) => {
            return <ItemLista key={usuario.id}>
                    {usuario.name} 
                    <BotaoDeletar onClick={() => this.deletaUsuario(usuario.id)}> <IconeDeletar src={Lixeira}/> </BotaoDeletar>
                   </ItemLista>
        });

        return (
            <>
            <FundoPagina/>

                <BotaoVoltar onClick={this.props.voltarParaCadastro}> Voltar </BotaoVoltar>
                <ContainerPagina>
                    <TituloUsuarios> Usuários Cadastrados<span>_</span> </TituloUsuarios>
                    <ContainerLista>
                        <Lista>
                            {usuariosMapeados}
                        </Lista>
                    </ContainerLista>
                    <footer><p>Desenvolvido por @EduardaPacheco </p> </footer> 
                </ContainerPagina>
            </>
        )
    }
}