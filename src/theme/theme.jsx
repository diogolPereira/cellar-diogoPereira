/**
 * 
 * All material generic theme configs 
 * stay in this config file
 * 
*/

import { createTheme } from '@mui/material/styles';

// A Darktheme for app
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
// Light theme for app
const lightTheme = createTheme({
    palette: {
      mode: 'light',
    },
  });

export {lightTheme,darkTheme};