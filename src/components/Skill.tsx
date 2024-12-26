import React from "react";
import Image from "next/image";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Container,
} from "@mui/material";

const tools = [
  { name: "Figma", description: "Design tool", icon: "/skills/figma.png" },
  { name: "CSS", description: "User Interface", icon: "/skills/css-3.png" },
  {
    name: "JavaScript",
    description: "Interaction",
    icon: "/skills/javascript-1.svg",
  },
  { name: "Html", description: "User Interface", icon: "/skills/html-5.png" },
  {
    name: "NextJS",
    description: "Node Framework",
    icon: "/skills/nextjs.svg",
  },
  { name: "Boostrap", description: "Framework", icon: "/skills/boostrap.svg" },
  { name: "React", description: "Framework", icon: "/skills/react.png" },
  {
    name: "TailwindCSS",
    description: "User Interface",
    icon: "/skills/tailwind.svg",
  },
  {
    name: "Jira",
    description: "Management tool",
    icon: "/skills/jira.png",
  },
  {
    name: "GitHub",
    description: "Management tool",
    icon: "/skills/github.jpg",
  },
  {
    name: "MUI",
    description: "User Interface",
    icon: "/skills/mui.jpg",
  },
];

const EssentialTools = () => {
  return (
    <Box id="skill" sx={{ bgcolor: "grey.100", color: "white", py: 5 }}>
      <Container maxWidth="lg">
        {/* Section Title */}
        <Box
          width={{ xs: "90%", sm: "50%" }}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          gap={2}
          mb={2}
        >
          <Typography
            variant="subtitle1"
            color="primary"
            fontWeight="bold"
            textTransform="uppercase"
          >
            Skills
          </Typography>
          <Typography variant="h4" fontWeight="bold" color="black">
            Essential Tools I use
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Discover the powerful tools and technologies I use to create
            exceptional, high-performing websites & applications.
          </Typography>
        </Box>
        {/* Tools Grid */}
        <Grid container spacing={3}>
          {tools.map((tool, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                  backgroundColor: "white",
                  borderRadius: 2,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
                  display: "flex",
                  alignItems: "center",
                  padding: 2,
                  gap: 2,
                }}
              >
                <Image src={tool.icon} alt={tool.name} width={40} height={40} />
                {/* Tool Name & Description */}
                <CardContent sx={{ padding: 0 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {tool.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {tool.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default EssentialTools;
