// src/components/Dashboard.jsx
import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SideNav from "./SideNav";
import SecondColumn from "./SecondColumn";
import MusicPlayer from "./MusicPlayer";
import SongModal from "./SongModal";

const Dashboard = () => {
  // Sample trending data for the first column. Note the added "audioSrc" for each track.
  const trendingData = [
    {
      id: 1,
      trackTitle: "Haunt me",
      length: "00:19",
      img: "https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img+2.jpg",
      audioSrc: "https://adbooks2.s3.ap-south-1.amazonaws.com/music/video1.mp3",
      videoSrc: "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video1.mp4"
    },
    {
      id: 2,
      trackTitle: "Song Two",
      length: "04:05",
      img: "https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img+3.jpg",
      audioSrc: "https://example.com/your-audio-file-2.mp3",
    },
    {
      id: 3,
      trackTitle: "Song Three",
      length: "02:45",
      img: "https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img.jpg",
      audioSrc: "https://example.com/your-audio-file-3.mp3",
    },
  ];

  // State for modal control
  const [selectedTrack, setSelectedTrack] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openModalForTrack = (track) => {
    setSelectedTrack(track);
    setModalOpen(true);
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", bgcolor: "black" }}>
      <Box sx={{ display: "flex", flexGrow: 1 }}>
        {/* Left Navigation Bar */}
        <SideNav />

        {/* Main Content Area */}
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            height: "100%",
          }}
        >
          {/* First (Wider) Column */}
          <Box
            sx={{
              width: { xs: "100%", md: "70%" },
              p: 2,
              bgcolor: "black",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "100%",
            }}
          >
            {/* Header */}
            <Box sx={{ p: 2 }}>
              <Typography variant="h5" fontWeight="bold" color="white">
                Home
              </Typography>
            </Box>

            {/* Banner */}
            <Box
              sx={{
                borderRadius: 2,
                height: 250,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              <Box
                component="img"
                src="https://adbooks2.s3.ap-south-1.amazonaws.com/photos/banner.jpg"
                alt="Banner"
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 2,
                  opacity: 0.4,
                }}
              />
            </Box>

            {/* Trending Section */}
            <Box sx={{ p: 2 }}>
              <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "white" }}>
                Trending right now
              </Typography>
              {trendingData.map((track, index) => (
                <Box
                  key={track.id}
                  onClick={() => openModalForTrack(track)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    p: 1,
                    mb: 1,
                    gap: 2,
                    borderRadius: 1,
                    cursor: "pointer",
                    "&:hover": { bgcolor: "rgba(255,255,255,0.1)" },
                  }}
                >
                  <Typography variant="body1" sx={{ width: "30px", textAlign: "center", color: "white" }}>
                    {index + 1}
                  </Typography>
                  <Box
                    component="img"
                    src={track.img}
                    alt={track.trackTitle}
                    sx={{ width: 50, height: 50, borderRadius: 1 }}
                  />
                  <Box sx={{ flexGrow: 1 }}>
                    <Typography variant="subtitle1" color="white">
                      {track.trackTitle}
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ width: "50px", textAlign: "center", color: "white" }}>
                    {track.length}
                  </Typography>
                  <IconButton>
                    <FavoriteBorderIcon sx={{ color: "white" }} />
                  </IconButton>
                  <IconButton>
                    <MoreVertIcon sx={{ color: "white" }} />
                  </IconButton>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Second (Narrower) Column */}
          <Box sx={{ width: { xs: "100%", md: "30%" }, p: 2, bgcolor: "black", height: "100%" }}>
            <SecondColumn />
          </Box>
        </Box>
      </Box>

      {/* Sticky Bottom Music Player */}
      <MusicPlayer />

      {/* Song Modal */}
      <SongModal open={modalOpen} onClose={() => setModalOpen(false)} track={selectedTrack} />
    </Box>
  );
};

export default Dashboard;
