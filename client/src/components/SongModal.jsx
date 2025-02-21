// src/components/SongModal.jsx
import React, { useRef, useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Box,
  IconButton,
  Button,
  Slider,
  Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

const formatTime = (seconds) => {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
};

const SongModal = ({ open, onClose, track }) => {
  const audioRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    if (open) {
      setShowVideo(false);
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
        setCurrentTime(0);
        setDuration(0);
      }
    }
  }, [open, track]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  const handleSliderChange = (event, newValue) => {
    if (audioRef.current) {
      audioRef.current.currentTime = newValue;
      setCurrentTime(newValue);
    }
  };

  const handleToggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: {
          bgcolor: 'rgba(225, 225, 225, 0.1)', // semi-transparent black
          color: 'white',
        },
      }}
    >
      <DialogTitle sx={{ m: 0, p: 2, textAlign: 'center', position: 'relative' }}>
        {track ? track.trackTitle : "Now Playing"}
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {track?.videoSrc && (
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Button variant="contained" size="small" onClick={handleToggleVideo}>
              {showVideo ? "Show Image" : "Show Video"}
            </Button>
          </Box>
        )}
      </DialogTitle>
      <DialogContent dividers>
        {track && (
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            {showVideo && track.videoSrc ? (
              <Box
                component="video"
                // controls
                autoPlay
                muted
                loop
                ref={videoRef}
                src={track.videoSrc}
                alt={track.trackTitle}
                sx={{ width: '100%', maxWidth: 300, borderRadius: 2 }}
              />
            ) : (
              <Box
                component="img"
                src={track.img}
                alt={track.trackTitle}
                sx={{ width: '100%', maxWidth: 300, borderRadius: 2 }}
              />
            )}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, width: '100%' }}>
              <IconButton onClick={togglePlayPause} sx={{ color: 'black' }}>
                {isPlaying ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
              </IconButton>
              <Slider
                min={0}
                max={duration}
                value={currentTime}
                onChange={handleSliderChange}
                sx={{ flexGrow: 1 }}
              />
            </Box>
            <Typography variant="body2">
              {formatTime(currentTime)} / {formatTime(duration)}
            </Typography>
            <audio
              ref={audioRef}
              src={track.audioSrc}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default SongModal;
