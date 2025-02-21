// src/App.jsx
import React from 'react';
import { Box } from '@mui/material';
import SideNav from '../components/SideNav';
import Dashboard from '../components/Dashboard';

const App = () => {
  return (
    <Box sx={{ width: '100%', height: '100vh', overflow: 'hidden' }} >
      <Dashboard />
    </Box>
  );
};

export default App;
