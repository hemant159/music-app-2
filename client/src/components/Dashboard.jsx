// src/components/Dashboard.jsx
import React from "react";
import { Box, Typography, IconButton, Card, CardMedia, CardContent } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SideNav from "./SideNav";
import SecondColumn from "./SecondColumn";
// Optionally, if you have a TopBar component, import it here.
// import TopBar from "./TopBar";

const Dashboard = () => {
  // Example trending data; replace with your real data.
  const trendingData = [
    {
      id: 1,
      trackTitle: "Haunt me",
      length: "03:15",
      img: "https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img+2.jpg",
    },
    {
      id: 2,
      trackTitle: "Song Two",
      length: "04:05",
      img: "https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img+3.jpg",
    },
    {
      id: 3,
      trackTitle: "Song Three",
      length: "02:45",
      img: "https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img.jpg",
    },
  ];

  return (
    <Box sx={{ display: "flex", height: "100vh", bgcolor: "black" }}>
      {/* Left Navigation Bar */}
      <SideNav />

      {/* Main Content Area: 2 Columns */}
      <Box sx={{ flexGrow: 1, display: "flex" }}>
        {/* First (Wider) Column */}
        <Box
          sx={{
            width: "70%", // Adjust as needed
            display: "flex",
            flexDirection: "column",
            p: 2,
            gap: 2, // Space between rows
          }}
        >
          {/* Row 1: "Home" */}
          <Box
            sx={{
              // styling for the "Home" row
              bgcolor: "",
              p: 2,
              borderRadius: 2,
            }}
          >
            <Typography variant="h5" fontWeight="bold" color="white">
              Home
            </Typography>
          </Box>

          {/* Row 2: Banner */}
          <Box
            sx={{
              // styling for the banner
              borderRadius: 2,
              height: 250,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {/* Example background image for banner */}
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

          {/* Row 3: Trending Right Now */}
          <Box
            sx={{
              // styling for the trending section
              
              borderRadius: 2,
              p: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2, color: "white" }}>
              Trending right now
            </Typography>

            {/* Each track row */}
            {trendingData.map((track, index) => (
              <Box
                key={track.id}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 1,
                  p: 1,
                  mb: 1,
                  gap: 2,
                }}
              >
                {/* Serial number */}
                <Typography variant="body1" sx={{ width: "30px", textAlign: "center", color: "white" }}>
                  {index + 1}
                </Typography>

                {/* Album Art */}
                <Box
                  component="img"
                  src={track.img}
                  alt={track.trackTitle}
                  sx={{ width: 50, height: 50, borderRadius: 1 }}
                />

                {/* Track Title & Additional Info (could add artist name, etc.) */}
                <Box sx={{ flexGrow: 1 }}>
                  <Typography variant="subtitle1" color="white">{track.trackTitle}</Typography>
                </Box>

                {/* Length of the music */}
                <Typography variant="body2" sx={{ width: "50px", textAlign: "center", color: "white" }}>
                  {track.length}
                </Typography>

                {/* Heart icon */}
                <IconButton>
                  <FavoriteBorderIcon sx={{ color: "white"}} />
                </IconButton>

                {/* More (three dots) icon */}
                <IconButton>
                  <MoreVertIcon sx={{ color: "white" }} />
                </IconButton>
              </Box>
            ))}
          </Box>
        </Box>

        {/* Second (Narrower) Column */}
        <Box
          sx={{
            width: "45%", // Adjust as needed
            p: 2,
            bgcolor: "balck",
          }}
        >
          <SecondColumn />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
