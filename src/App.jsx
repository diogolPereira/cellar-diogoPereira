import Container from '@mui/material/Container';
import { useState } from 'react'
import { Outlet } from 'react-router';
import './App.scss'
import Navbar from './layout/Navbar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar/>
      <Container maxWidth="xl" sx={{ pt: 8, pb: 6 }}> 
        <Outlet/>
      </Container> 
    </div>
  )
}

export default App
