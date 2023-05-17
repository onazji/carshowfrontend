// rafce hint
import { AppBar, Toolbar, Typography } from '@mui/material'
import CarList from './components/CarList'
import './App.css'
import { Route,Routes } from 'react-router-dom'
function App() {
 

  return (
    <div className='App'>
      <AppBar
      position='static'>
        <Toolbar>
            <Typography align='center' variant='h2' >
              Car Show 🚗 
            </Typography>
        </Toolbar>

      </AppBar>
      <CarList />
      <Routes >
        <Route path="/"/>

        <Route path="cars"/>

        <Route path="show"/>
      </Routes>
    </div>
  )
}

export default App