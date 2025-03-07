// src/components/SideNav.jsx
import React from 'react';
import { Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';
import { useNavigate } from 'react-router-dom';

const SideNav = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
  };

  const handleHome = () => {
    navigate("/home");
  };

  const handlesetting = () => {
    navigate("/settings");
  };

  const handleLibrary = () => {
    navigate("/library");
  };

  return (
    <Box
      sx={{
        width: { xs: '50px', md: '60px' },
        height: '100%',
        bgcolor: 'red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 1,
      }}
    >
      <IconButton sx={{ color: "#fff", mb: 2 }} onClick={handleHome}>
        <HomeIcon />
      </IconButton>
      <IconButton sx={{ color: "#fff", mb: 2 }} onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
      <IconButton sx={{ color: "#fff", mb: 2 }} onClick={handleLibrary}>
        <LibraryMusicIcon />
      </IconButton>
      <IconButton sx={{ color: "#fff", mb: 2 }} onClick={handlesetting}>
        <SettingsIcon />
      </IconButton>
    </Box>
  );
};

export default SideNav;
