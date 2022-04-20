import React, {useState, useEffect} from 'react';
import PaginaPerfis from './Pages/PaginaPerfis/PaginaPerfis'
import PaginaMatches from './Pages/PaginaMatches/PaginaMatches'
import BotaoLimpar from './Components/BotaoLimpar';
import { EstiloGlobal } from './contants/GlobalTemplate';



function App() {
  const [telaInicial, setTelaInicial] = useState("perfis")

  const trocaDeTela = () => {
    switch(telaInicial) {
      case 'perfis':
        return <PaginaPerfis vaiParaMatches={vaiParaMatches}/>
      case 'matches': 
        return <PaginaMatches voltaParaPerfis={voltaParaPerfis}/>
      default: 
        return alert("Ops! Ocorreu um erro!")
    };
  };

  const vaiParaMatches = () => {
    setTelaInicial('matches');
  };

  const voltaParaPerfis = () => {
    setTelaInicial('perfis');
  };

  return (
    <div>
      <EstiloGlobal/>
      {trocaDeTela()}
      <BotaoLimpar/>
    </div>
  );
}

export default App;
