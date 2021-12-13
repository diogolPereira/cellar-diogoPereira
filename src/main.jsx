import React from 'react'
import { render } from "react-dom";

import './index.scss'
import App from './App'
import { CssBaseline, ThemeProvider } from '@mui/material';
import { darkTheme } from './theme/theme';

render(
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <App />
    </ThemeProvider>,
  document.getElementById('root')
)
