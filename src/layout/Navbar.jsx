import React, { Fragment } from 'react'
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom'
import Button  from '@mui/material/Button';


function Navbar() {
    return (
        <Fragment>
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` , lineHeight:0 }}
        >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                Cellar
            </Typography>
            <nav>
              <Button
                variant="button"
                color="text.primary"
                component={Link}
                to="bottles"
                sx={{ my: 1, mx: 1.5 }}
              >
                Lista de Garrafas
              </Button>
            </nav>
            {/* <Button href="#" align="right" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
              Login
            </Button> */}
        </Toolbar>
    </AppBar> 
  </Fragment> 
    )
}

export default Navbar
