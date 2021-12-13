import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useState } from 'react'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Container component="main" sx={{ pt: 8, pb: 6 }}> 
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="text.primary"
      >
        This will be the best beer/wine list app ever created.
      </Typography>
       
      </Container> 
    </div>
  )
}

export default App
