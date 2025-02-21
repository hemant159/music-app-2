import React, { useRef, useState, useEffect } from "react";
import { Box, IconButton, Typography, Slider } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

// Helper to format seconds into mm:ss
const formatTime = (seconds) => {
  const min = Math.floor(seconds / 60);
  const sec = Math.floor(seconds % 60);
  return `${min}:${sec < 10 ? "0" : ""}${sec}`;
};

const MusicPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioSrc = "https://adbooks2.s3.ap-south-1.amazonaws.com/music/video1.mp3";

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
    audioRef.current.currentTime = newValue;
    setCurrentTime(newValue);
  };

  return (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        left: 0,
        right: 0,
        bgcolor: "#1D1C1C",
        color: "white",
        p: 1,
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton sx={{ color: "white" }}>
        <SkipPreviousIcon />
      </IconButton>
      <IconButton onClick={togglePlayPause} sx={{ color: "white" }}>
        {isPlaying ? <PauseIcon fontSize="large" /> : <PlayArrowIcon fontSize="large" />}
      </IconButton>
      <IconButton sx={{ color: "white" }}>
        <SkipNextIcon />
      </IconButton>
      <Box sx={{ flexGrow: 1, mx: 2 }}>
        <Slider
          min={0}
          max={duration}
          value={currentTime}
          onChange={handleSliderChange}
          sx={{ color: "white" }}
        />
      </Box>
      <Typography variant="body2">
        {formatTime(currentTime)} / {formatTime(duration)}
      </Typography>
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
      />
    </Box>
  );
};

export default MusicPlayer;
