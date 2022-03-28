import fundo from './assets/fundoWpp2.jpg'
import CampoMensagens from './components/CampoMensagem';
import styled, {createGlobalStyle} from 'styled-components'

const  EstiloGlobal = createGlobalStyle`
* {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
`
const ContainerBatePapo = styled.div`
  background-image: url(${fundo});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  max-width: 60%;
  height: 100vh;
`
const Titulo = styled.h1`
color: white;
text-align: center;
margin: 20px 0px 20px 0px;
`

function App() {
  return (
    <ContainerBatePapo>
      <EstiloGlobal/>

      <Titulo> WhatsLab </Titulo>
      <CampoMensagens/>

    </ContainerBatePapo>
  );
}

export default App;
