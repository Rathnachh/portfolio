import React from "react";
import { Box, Typography, Stack, Container } from "@mui/material";

const data = {
  education: [
    {
      title: "Norton University",
      duration: "2020-2024",
      degree: "Bachelor in Computer Science",
    },
    {
      title: "Sabaicode",
      duration: "2024",
      degree: "Bachelor in Computer Science",
    },
    {
      title: "Australian Center for Education",
      duration: "2023",
      degree: "Completed level 9B",
    }
  ],
  experience: [
    {
      title: "Ministry of Civil Service (MCS)",
      duration: "2023-current",
      role: "Front End Developer",
    },
    {
      title: "Digital Government Committee (DGC)",
      duration: "3 months Internship",
      role: "Front End Developer",
    },
    {
      title: "Panda Solution",
      duration: "3 months Internship",
      role: "System Supporter",
    },
  ],
};

const Education = () => {
  return (
    <Box sx={{  bgcolor: "#ffff", py: 8 }}>
      <Container maxWidth="lg">
        <Stack direction={{ xs: "column", md: "row" }} spacing={4}>
          {/* Education Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{ color: "#2c387e", fontWeight: "bold", mb: 3 }}
            >
              Education
            </Typography>
            {data.education.map((edu, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: "#e8f4ff",
                  p: 3,
                  borderRadius: 2,
                  mb: 2,
                  border: "1px solid #d1e3f8",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#0d47a1" }}>
                  {edu.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#455a64" }}>
                  {edu.duration}
                </Typography>
                <Typography variant="body2" sx={{ color: "#263238" }}>
                  {edu.degree}
                </Typography>
              </Box>
            ))}
          </Box>

          {/* Experience Section */}
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h5"
              sx={{ color: "#2c387e", fontWeight: "bold", mb: 3 }}
            >
              Experience
            </Typography>
            {data.experience.map((exp, index) => (
              <Box
                key={index}
                sx={{
                  bgcolor: "#fcefe3",
                  p: 3,
                  borderRadius: 2,
                  mb: 2,
                  border: "1px solid #fbd9c1",
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#bf360c" }}>
                  {exp.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#6d4c41" }}>
                  {exp.duration}
                </Typography>
                <Typography variant="body2" sx={{ color: "#4e342e" }}>
                  {exp.role}
                </Typography>
              </Box>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Education;
