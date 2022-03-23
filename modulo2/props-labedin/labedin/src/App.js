import React from 'react';
import './App.css';
import foto from './assets/20220313_132710.jpg'
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={foto}
          nome="Maria Eduarda Pacheco Meireles" 
          descricao="Oi, eu sou a Eduarda Pacheco. Sou uma aluna da Labenu. Estou adorando aprender React!"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/929/929750.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Por enquanto, não tenho experiência em TI. Estou apenas estudando na Labenu." 
      />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          link="https://www.facebook.com/"
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          link="https://twitter.com/"
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      <div className="container-email-endereço">
        <CardPequeno
        titulo="Email"
        texto="contatoeduardapmeireles@hotmail.com"
        />

        <CardPequeno
        titulo="Endereço"
        texto="Algum lugar em Juiz de Fora/MG"
        />
      </div>
    </div>
  );
}

export default App;
