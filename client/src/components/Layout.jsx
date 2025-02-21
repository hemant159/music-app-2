// src/components/Layout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';
import { Box } from '@mui/material';

const Layout = () => {
  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <SideNav />
      <Box sx={{ flexGrow: 1, overflow: 'auto' }}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
