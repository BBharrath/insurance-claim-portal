import React, { use } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const Navbar = ({user,logout}) => {
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Insurance Claim Portal
        </Typography>
        <Box>
          {user ? (
            <>
              <Button component={Link} to={user.role==='admin'?'admin':'/customer'} color="inherit">Dashboard</Button>
              <Button color="inherit" onClick={()=>{logout();navigate('/login')}}>Logout</Button>
            </>
          ) : (
            <Button color="inherit" component={Link} to={'/login'}>Login</Button>
          )}
          
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;