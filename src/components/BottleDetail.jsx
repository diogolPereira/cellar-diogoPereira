import React, { Fragment } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { useNavigate, useParams } from 'react-router';
import { BottleContext } from '../providers/BottleProvider';


function BottleDetail() {
    /** Router Functions */
    const navigate = useNavigate();
    const params = useParams();

    const {state,dispatch} = React.useContext(BottleContext);
    const[ bottle, setBottle] = React.useState( state.bottles.find(x=> x.id == params.id));

    /** State of Dialog */
    const[ dialogState, setDialogState] = React.useState(true);

    /** Save data into array of data */
    const handleEdit = e => {
        setDialogState(false)
        navigate('edit')
    }

    /** Close Dialog Without Save */
    const handleDelete = e => {
        dispatch({type:'delete',payload:params.id})
        navigate('/bottles')
    }
    /** Close Dialog Without Save */
    const handleClose = e => {
        setDialogState(false)
        navigate('/bottles')
    }
    return (
        <Fragment>
        <Dialog maxWidth="md" fullWidth open={dialogState} onClose={handleClose}>
          <DialogTitle>Detalhes da Garrafa</DialogTitle>
          <DialogContent>
          <Grid container >
            <Grid item xs={12} align=""> 
               <Typography variant="h6" gutterBottom> Nome: <span class="font-weight-light">{bottle.name}</span></Typography>
               <Typography variant="h6" gutterBottom> Ano: <span class="font-weight-light">{bottle.year}</span></Typography>
               <Typography variant="h6" gutterBottom> Preço: <span class="font-weight-light">{bottle.price}€</span></Typography>
            </Grid>
          </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleDelete} >Apagar</Button>
            <Button onClick={handleEdit}>Editar</Button>
          </DialogActions>
        </Dialog>
      </Fragment>

    )
}

export default BottleDetail
