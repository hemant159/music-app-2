import React, { useState } from 'react';
import SideNav from '../components/SideNav';
import SongModal from '../components/SongModal';
import { 
  Box, 
  TextField, 
  InputAdornment, 
  Typography, 
  List, 
  ListItem, 
  ListItemText 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
  const [query, setQuery] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState(null);

  const songs = [
    { id: 1, title: 'Fall in love with me', artist: 'Artist A', audioSrc: 'https://adbooks2.s3.ap-south-1.amazonaws.com/music/video1.mp3', videoSrc: 'https://adbooks2.s3.ap-south-1.amazonaws.com/video/video1.mp4', img: 'https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img+2.jpg' },
    { id: 2, title: 'Haunt Me', artist: 'Artist B', audioSrc: 'https://adbooks2.s3.ap-south-1.amazonaws.com/music/video4.mp3', videoSrc: 'https://adbooks2.s3.ap-south-1.amazonaws.com/video/video5.mp4', img: 'https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img+3.jpg' },
    { id: 3, title: 'Aura', artist: 'Artist C', audioSrc: 'https://adbooks2.s3.ap-south-1.amazonaws.com/music/video7.mp3', videoSrc: 'https://adbooks2.s3.ap-south-1.amazonaws.com/video/video7.mp4', img: 'https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img.jpg' },
  ];

  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
  );

  const openModalForSong = (song) => {
    setSelectedTrack(song);
    setModalOpen(true);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', bgcolor: 'black' }}>

      <SideNav />
      
      <Box sx={{ flexGrow: 1, p: 2, color: 'white' }}>
        <Typography variant="h4" sx={{ mb: 4 }}>
          Search Music
        </Typography>
        <TextField
          variant="outlined"
          placeholder="Search for music..."
          onChange={(e) => setQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'white' }} />
              </InputAdornment>
            ),
          }}
          sx={{
            input: { color: 'white' },
            '& .MuiOutlinedInput-root': {
              '& fieldset': { borderColor: 'white' },
              '&:hover fieldset': { borderColor: 'white' },
              '&.Mui-focused fieldset': { borderColor: 'white' },
            },
            width: { xs: '90%', md: '50%' },
            mb: 4,
          }}
        />
        {filteredSongs.length > 0 ? (
          <List>
            {filteredSongs.map((song) => (
              <ListItem 
                key={song.id} 
                onClick={() => openModalForSong(song)}
                sx={{ borderBottom: '1px solid gray', cursor: 'pointer' }}
              >
                <ListItemText primary={song.title} secondary={song.artist} />
              </ListItem>
            ))}
          </List>
        ) : (
          <Typography>No results found.</Typography>
        )}
      </Box>

      <SongModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
        track={selectedTrack} 
      />
    </Box>
  );
};

export default Search;
