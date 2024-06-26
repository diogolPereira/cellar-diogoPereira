import React, { Fragment, useContext } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import InputAdornment from '@mui/material/InputAdornment';
import DialogTitle from '@mui/material/DialogTitle';
import { useNavigate, useParams } from 'react-router';
import { BottleContext } from '../providers/BottleProvider';
function BottleCreate() {
    const year = new Date().getFullYear()
  
    /** Router Functions */
    const navigate = useNavigate()
    const params = useParams();
    /** State of Form */
    const [isFormInvalid, setIsFormInvalid] = React.useState(false);

    const {state,dispatch} = useContext(BottleContext);
    const[ bottle, setBottle] = React.useState((params && params.id) ? state.bottles.find(x=> x.id == params.id): {id:Math.floor(Math.random()*10000),name:'',price:''} );
    
    /** State of Dialog */
    const[ dialogState, setDialogState] = React.useState(true);

 
    /** Dynamic function for input change */
    const handleChange = (prop) => (event) => {
        setBottle({ ...bottle, [prop]: event.target.value });
      };

    
    /** Validate if bottle is valid */
    const validateYear = () => {
      if(!bottle.year) return false
      if(bottle.year < 0) return false
      if(bottle.year > year) return false
      return true
    }
    const validatePrice = () => {
      if(!bottle.price) return false
      if(bottle.price < 0) return false
      return true
    }  
    const validateBottle = bottle => {
        if(!bottle.name) return false
        if(!validateYear()) return false
        if(!validatePrice()) return false

        return true
    }

    /** Save data into array of data */
    const handleSubmit = () => {
        if(validateBottle(bottle)){
            params.id ? dispatch({type:'edit',payload:bottle}) : dispatch({type:'add',payload:bottle})
            handleClose()
        } else {
          setIsFormInvalid(true)
        }
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
              error = {!bottle.name && isFormInvalid}
              margin="dense"
              variant="standard"
              label="Nome da Garrafa"
              id="name"
              fullWidth
              required
              onChange={handleChange('name')}
              value={bottle.name || ''}
            />
            <TextField
              margin="dense"
              error = {(!validatePrice()) && isFormInvalid}
              variant="standard"
              label="Preço"
              InputProps={{
                endAdornment:<InputAdornment position="start"> € </InputAdornment>,
                inputProps: { min: 0} 
              }}
              id="price"
              type="number"
              fullWidth
              onChange={handleChange('price')}
              value={bottle.price || 0}
            />
            <TextField
              margin="dense"
              variant="standard"
              error = {(!validateYear()) && isFormInvalid}
              label="Ano"
              id="year"
              type="number"
              InputProps={{ inputProps: { min: 0, max: year } }}
              fullWidth
              onChange={handleChange('year')}
              value={bottle.year || 0}
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
