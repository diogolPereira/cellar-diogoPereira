import React from 'react'
import { render } from "react-dom";

import './index.scss'
import { darkTheme } from './theme/theme';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import Router from './router';
import BottleProvider from './providers/BottleProvider';


render(
  <BrowserRouter>
    <BottleProvider>
      <ThemeProvider theme={darkTheme} >
        <CssBaseline/>
        <Router/>
      </ThemeProvider>
    </BottleProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
