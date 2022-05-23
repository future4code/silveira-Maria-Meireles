import Router from './routes/router'
import React from 'react'
import styled, {createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
* {
margin: 0;
padding: 0;
font-family: 'Roboto', sans-serif;
}
`

const App = () => {

  return (
    <>
      <GlobalStyle/>
      <Router/>
    </>
  );
}

export default App;
