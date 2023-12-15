
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import Dashboard from './components/Dashboard';
import EmployeeForm from './components/EmployeeForm';

function App() {
  return (
    <Router>
      <CssBaseline />
      
      <AppBar position="static" sx={{ backgroundColor: '#FFA500'  }}>
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'Arial, sans-serif'}}>
            Employee App
          </Typography>
          <Link to="/" style={{ color: 'inherit', textDecoration: 'none', marginRight: '20px' }}>
            <HomeIcon style={{ display:'flex' ,alignItems:'center', marginRight: '20px',color:'black' }}/>
            Home
          </Link>
          <Link to="/employee-form" style={{ color: 'inherit', textDecoration: 'none' }}>
            <PersonAddIcon style={{ display:'flex',alignItems:'center' , marginRight: '20px' ,color:'black'}} />
            Employee Form
          </Link>
        </Toolbar>
      </AppBar>

      <Container>
        <Routes>
        <Route path='/employee-form'
            element={<EmployeeForm />} />
          <Route path='/'
            element={<Dashboard />} />
        </Routes>
      </Container>
      
    </Router>
  );
}

export default App;
