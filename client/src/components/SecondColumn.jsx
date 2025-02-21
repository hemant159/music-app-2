import React from "react";
import {
  Box,
  Typography,
  IconButton,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const SecondColumn = () => {
  const topArtists = [
    { id: 1, name: "Citizen the Artist", img: "https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img.jpg" },
    { id: 2, name: "Weekend", img: "https://th.bing.com/th/id/OIP.KeIwYhRqStCBZVQBhR7NawHaEJ?rs=1&pid=ImgDetMain" },
  ];

  const playlistData = [
    { id: 1, name: "Road Trip", img: "https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img.jpg" },
    { id: 2, name: "Playlist Two", img: "https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img.jpg" },
    { id: 3, name: "Playlist Three", img: "https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img.jpg" },
    { id: 4, name: "Playlist Four", img: "https://adbooks2.s3.ap-south-1.amazonaws.com/photos/img.jpg" },
  ];

  return (
    <Box
      sx={{
        height: "100%",
        bgcolor: "black",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
      }}
    >
     
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <IconButton sx={{ color: "white" }}>
          <NotificationsIcon />
        </IconButton>
        <TextField
          variant="outlined"
          placeholder="Search"
          size="small"
          fullWidth
          sx={{
            "& .MuiOutlinedInput-root": { color: "white" },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "white" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      {/* Row 2: Top Artist */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6" fontWeight="bold" color="white">
          Top Artist
        </Typography>
        {topArtists.map((artist) => (
          <Box
            key={artist.id}
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              p: 1,
              borderRadius: 1,
            }}
          >
            <CardMedia
              component="img"
              image={artist.img}
              alt={artist.name}
              sx={{ width: 50, height: 50, borderRadius: "50%" }}
            />
            <Typography variant="subtitle1" sx={{ flexGrow: 1, color: "white" }}>
              {artist.name}
            </Typography>
            <IconButton sx={{ color: "white" }}>
              <MoreVertIcon />
            </IconButton>
          </Box>
        ))}
      </Box>

      {/* Row 3: Recent Favorite */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography variant="h6" fontWeight="bold" color="white">
          Recent Favorite
        </Typography>
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 1 }}>
          {playlistData.map((playlist) => (
            <Card
              key={playlist.id}
              sx={{
                width: { xs: 120, md: 80 },
                boxShadow: 3,
                p: 0.5,
              }}
            >
              <CardMedia
                component="img"
                image={playlist.img}
                alt={playlist.name}
                sx={{
                  borderRadius: 1,
                  width: "100%",
                  height: { xs: 80, md: 60 },
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ p: 0.5 }}>
                <Typography variant="subtitle2" noWrap>
                  {playlist.name}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SecondColumn;
