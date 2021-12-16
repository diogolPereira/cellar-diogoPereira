import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import React, {Fragment} from 'react'
import BottleList from './BottleList'
import Paper from '@mui/material/Paper';
import { Link, Outlet } from 'react-router-dom'
import { BottleContext } from '../providers/BottleProvider'

function Bottles() {
    const {state} = React.useContext(BottleContext);
    return (
        <Fragment>
            <Paper sx={{p:2}}>
                <Grid container sx={{ mb:5}} >
                    <Grid item xs={6} align="" > 
                        <Typography variant="h5" color="text.primary" sx={{ mt: 1.75 }}>Garrafas</Typography>
                    </Grid>
                    <Grid item xs={6} align="right">
                        <Button component={Link} to="new" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                            Adicionar Garrafa
                        </Button>
                    </Grid>
                </Grid>
                <BottleList bottles={state.bottles} ></BottleList>
            </Paper>
            <Outlet/>
        </Fragment>
    )
}

export default Bottles
