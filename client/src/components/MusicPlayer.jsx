import React from "react";
import { Box, IconButton, Typography, Slider } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

const MusicPlayer = () => {
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
      <IconButton sx={{ color: "white" }}>
        <PlayArrowIcon fontSize="large" />
      </IconButton>
      <IconButton sx={{ color: "white" }}>
        <SkipNextIcon />
      </IconButton>
      <Box sx={{ flexGrow: 1, mx: 2 }}>
        <Slider value={30} sx={{ color: "white" }} />
      </Box>
      <Typography variant="body2">03:15 / 05:00</Typography>
    </Box>
  );
};

export default MusicPlayer;
