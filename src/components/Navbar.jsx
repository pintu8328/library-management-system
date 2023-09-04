// Navbar.js
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
 import { Link } from "react-router-dom";


const Navbar = () => {
 
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
         
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          My App
        </Typography>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        <Link to="/login">Login</Link>
        </Typography>
         
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
