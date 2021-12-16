import  Typography  from '@mui/material/Typography'
import  Box  from '@mui/material/Box'
import  Container  from '@mui/material/Container'
import  Button  from '@mui/material/Button'
import React from 'react'

function NotFound() {
    return (
        <Container  disableGutters maxWidth="sm" align="center" component="main" sx={{ pt: 50 }}>
               <Typography  
                    component="h4"
                    variant="h5"
                >
                   404 &nbsp; | &nbsp; This page could not be found.
               </Typography>
                <Button href="/" variant="outlined" sx={{ my: 1, mt:5, mx: 1.5 }}>
                    Home Page
                </Button>
        </Container>
    )
}

export default NotFound
