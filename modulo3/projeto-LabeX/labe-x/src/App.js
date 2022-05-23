import React from "react";
import styled, {createGlobalStyle} from 'styled-components'
import fundoLabeX from './assets/fundoLabeX.jpg'
import Router from "./routes/Router";

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
}

body {
  background-image: url(${fundoLabeX});
}
`


function App() {
  return (
    <>
    <EstiloGlobal/>
      <div>
        <Router />
      </div>
    </>
  );
}

export default App;
