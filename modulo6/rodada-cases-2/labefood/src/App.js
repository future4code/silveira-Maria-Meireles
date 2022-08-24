import { ThemeProvider } from '@mui/material';
import { GlobalStyled } from './constants/GlobalStyled'
import GlobalState from './GlobalState/GlobalState'
import React from 'react'
import theme from './constants/theme';
import Router from './Router/Router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <GlobalState>
        <Router />
      </GlobalState>
     </ThemeProvider>
  );
}

export default App;
