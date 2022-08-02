import { ThemeProvider } from '@mui/material';
import React from 'react'
import theme from './constants/theme';
import Router from './Router/Router'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router/>
     </ThemeProvider>
  );
}

export default App;
