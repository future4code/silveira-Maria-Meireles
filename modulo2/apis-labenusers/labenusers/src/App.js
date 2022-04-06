import React from 'react';
import AbaCadastro from './Components/abaCadastro';
import ListaUsuarios from './Components/listaUsuarios';
import styled, {createGlobalStyle} from 'styled-components';
import Fundo from './assets/fundoLabenusers.jpg'


const Pagina = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}

body {
  background-image: url(${Fundo});
  background-repeat: no-repeat;
  background-size: cover;
}
`

const ContainerCadastro = styled.div`
  background-color: blue;
  height: 95vh;
  width: 65%;
`

export default class App extends React.Component {
  
  state = {
    telaAtual: "cadastro"
  };

  escolheTela = () => {
  switch(this.state.telaAtual) {

    case "cadastro": 
      return <AbaCadastro trocarParaUsuarios={this.trocarParaUsuarios}/>
    case "listaUsuarios":
      return <ListaUsuarios voltarParaCadastro={this.voltarParaCadastro}/>
    default: 
      return <div> `Erro! Página não encontrada.` </div>;
  };
};

  trocarParaUsuarios = () => {
    this.setState({telaAtual: "listaUsuarios"})
  };

  voltarParaCadastro = () => {
    this.setState({telaAtual: "cadastro"})
  };


  render() {
 
  return (
    <>
      <Pagina/>
        <div>
          {this.escolheTela()}
        </div>
    </> 
    );
  };
}

