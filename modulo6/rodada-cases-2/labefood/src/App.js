import { ThemeProvider } from '@mui/material';
import { GlobalStyled } from './constants/GlobalStyled'
import React from 'react'
import theme from './constants/theme';
import Router from './Router/Router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Router />
     </ThemeProvider>
  );
}

export default App;
