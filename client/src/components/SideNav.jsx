import React from 'react';
import { Box, IconButton } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';

const SideNav = () => {
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
      <IconButton sx={{ color: '#fff', mb: 2 }}>
        <HomeIcon />
      </IconButton>
      <IconButton sx={{ color: '#fff', mb: 2 }}>
        <SearchIcon />
      </IconButton>
      <IconButton sx={{ color: '#fff', mb: 2 }}>
        <LibraryMusicIcon />
      </IconButton>
      <IconButton sx={{ color: '#fff', mb: 2 }}>
        <SettingsIcon />
      </IconButton>
    </Box>
  );
};

export default SideNav;
