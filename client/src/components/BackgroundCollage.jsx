// src/components/BackgroundCollage.jsx
import { Box, useTheme } from "@mui/material";

const BackgroundCollage = ({ videos = [] }) => {
  const theme = useTheme();

  // Define a set of grid sizes for a "portrait" effect.
  // Here each cell occupies 1 column, and row spans vary to create a taller appearance.
  const gridSizes = [
    { col: 1, row: 2 },
    { col: 1, row: 3 },
    { col: 1, row: 2 },
    { col: 1, row: 3 },
    { col: 1, row: 2 },
    { col: 1, row: 3 },
    { col: 1, row: 2 },
    { col: 1, row: 3 },
    // You can add or adjust patterns as desired.
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Ensure collage stays behind other content
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          display: "grid",
          // Adjust columns based on screen size
          gridTemplateColumns: {
            xs: "repeat(2, 1fr)",
            sm: "repeat(4, 1fr)",
            md: "repeat(6, 1fr)",
          },
          // Increase row height so cells become more portrait (try 150px or adjust as needed)
          gridAutoRows: "150px",
          gridAutoFlow: "dense",
          gap: "4px",
          width: "100%",
          height: "100%",
        }}
      >
        {videos.map((videoSrc, index) => {
          const size = gridSizes[index % gridSizes.length];

          // Check if the URL is an Instagram link and handle it as before.
          if (videoSrc.includes("instagram.com")) {
            let embedSrc = videoSrc;
            try {
              const url = new URL(videoSrc);
              const pathParts = url.pathname.split("/");
              if (pathParts.length > 2 && pathParts[1] === "reel") {
                const reelId = pathParts[2];
                embedSrc = `${url.origin}/reel/${reelId}/embed`;
              }
            } catch (error) {
              console.error("Invalid URL:", videoSrc);
            }
            return (
              <Box
                key={index}
                sx={{
                  gridColumn: `span ${size.col}`,
                  gridRow: `span ${size.row}`,
                }}
              >
                <iframe
                  title={`Instagram Reel ${index}`}
                  src={embedSrc}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    border: "none",
                  }}
                  allowTransparency="true"
                  frameBorder="0"
                  scrolling="no"
                ></iframe>
              </Box>
            );
          } else {
            return (
              <Box
                key={index}
                sx={{
                  gridColumn: `span ${size.col}`,
                  gridRow: `span ${size.row}`,
                }}
              >
                <video
                  autoPlay
                  loop
                  muted
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
              </Box>
            );
          }
        })}
      </Box>
    </Box>
  );
};

export default BackgroundCollage;
