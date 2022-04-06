import React from 'react';
import AbaCadastro from './Components/abaCadastro';
import ListaUsuarios from './Components/listaUsuarios';


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
    <div>
     {this.escolheTela()}
     </div>
    );
  };
}

