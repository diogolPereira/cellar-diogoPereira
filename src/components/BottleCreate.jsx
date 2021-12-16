import React, { Fragment,useContext,useEffect,useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputAdornment from '@mui/material/InputAdornment';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate, useParams } from 'react-router';
import { getBottle } from '../data/bottlesFake';
import { BottleContext } from '../providers/BottleProvider';

function BottleCreate() {
    /** Router Functions */
    const navigate = useNavigate()
    const params = useParams();

    /** State of Form */
    const {dispatch} = React.useContext(BottleContext);
    const[ bottle, setBottle] = React.useState((params && params.id) ? getBottle(params.id): {id:Math.floor(Math.random()*10000),name:'',price:''} );
    /** State of Dialog */
    const[ dialogState, setDialogState] = useState(true);

 
    /** Dynamic function for input change */
    const handleChange = (prop) => (event) => {
        setBottle({ ...bottle, [prop]: event.target.value });
      };
   
    /** Save data into array of data */
    const handleSubmit = e => {
        params.id ? dispatch({type:'edit',payload:bottle}) : dispatch({type:'add',payload:bottle})
        handleClose()

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
          <DialogTitle>{ params.id ? 'Editar' : 'Adicionar' } Garrafa</DialogTitle>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              variant="standard"
              label="Nome da Garrafa"
              id="name"
              fullWidth
              onChange={handleChange('name')}
              value={bottle.name}
            />
            <TextField
              margin="dense"
              variant="standard"
              label="Preço"
              InputProps={{
                endAdornment:<InputAdornment position="start"> € </InputAdornment>
              }}
              id="price"
              type="number"
              fullWidth
              onChange={handleChange('price')}
              value={bottle.price}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={params.id ? handleDelete :handleClose}>{ params.id ? 'Apagar' : 'Cancelar' }</Button>
            <Button onClick={handleSubmit}>{ params.id ? 'Editar' : 'Adicionar' }</Button>
          </DialogActions>
        </Dialog>
      </Fragment>

    )
}

export default BottleCreate
