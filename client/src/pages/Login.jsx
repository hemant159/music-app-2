// src/pages/Login.jsx

import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import BackgroundCollage from "../components/BackgroundCollage";

const Login = () => {
  const navigate = useNavigate();

  const handleSkip = () => {
    navigate("/home");
  };

  return (
    <Box >
      {/* Background Collage as the background */}
      <BackgroundCollage
        videos={[
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video4.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video3.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video2.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video1.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video5.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video6.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video6.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video7.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video8.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video9.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video10.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video11.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video12.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video13.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video14.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video15.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video1.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video1.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video1.mp4",
          "https://adbooks2.s3.ap-south-1.amazonaws.com/video/video1.mp4",
          // Add more video URLs as needed
        ]}
      />

      {/* Login Form Container */}
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1, // Ensure the form is above the background collage
        }}
      >
        <Box
          sx={{
            width: { xs: "90%", sm: 400 },
            bgcolor: "rgba(255, 255, 255, 0.9)",
            p: { xs: 2, sm: 4 },
            borderRadius: 2,
            boxShadow: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="h5" sx={{ mb: 2, color: "black" }}>
            Welcome to M2
          </Typography>
          <TextField label="Email" variant="outlined" fullWidth sx={{ mb: 2 }} />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth sx={{ mb: 2 }}>
            Continue
          </Button>
          <Typography variant="body2" sx={{ mb: 1, color: "black" }}>
            OR
          </Typography>
          <Button variant="outlined" color="secondary" fullWidth sx={{ mb: 2 }}>
            Facebook
          </Button>
          <Button variant="outlined" color="secondary" fullWidth sx={{ mb: 2 }}>
            Google
          </Button>
          <Button variant="text" onClick={handleSkip}>
            Skip
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
