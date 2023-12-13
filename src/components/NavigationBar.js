import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
  return (
    <AppBar style={{ background: 'white' }}>
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" style={{ fontWeight: 'bold', color: 'black' }}>
          APP LOGO
        </Typography>
        <div>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="text" style={{ color: 'black' }}>Dashboard</Button>
          </Link>
          <Link to="/create-ad" style={{ textDecoration: 'none' }}>
            <Button variant="text" style={{ color: 'black' }}>Create Ad</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
