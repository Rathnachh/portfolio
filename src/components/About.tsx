"use client";

import { Box, Typography, Stack, IconButton, Container } from "@mui/material";
import Image from "next/image";

const AboutMe = () => {
  return (
    <Box id="about">
      <Box mt={5} width="100%">
        <Container maxWidth="lg">
          {/* About Me Section */}
          <Box
            width={{ xs: "90%", sm: "50%" }}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            gap={2}
          >
            <Typography
              variant="subtitle1"
              color="primary"
              fontWeight="bold"
              textTransform="uppercase"
            >
              About Me
            </Typography>
            <Typography variant="h4" fontWeight="bold">
              Code Architect, Problem Solver
            </Typography>
            <Typography variant="body1" color="text.secondary">
              I am an aspiring frontend developer with a keen interest in
              building responsive and visually engaging user interfaces.
              Familiar with modern web technologies like React and Next.js, I am
              passionate about creating seamless user experiences. Dedicated to
              continuous learning, I am excited to grow and contribute to the
              evolving world of frontend development.
            </Typography>

            {/* Social Media Links */}
            <Stack direction="row" spacing={2} mb={2}>
              <IconButton
                component="a"
                href="https://github.com/Rathnachh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/github.svg"
                  alt="github"
                  width={24}
                  height={24}
                />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.facebook.com/chhuon.rathna.5"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/facebook.svg"
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </IconButton>
              <IconButton
                component="a"
                href="https://t.me/rathnaaa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/telegram.svg"
                  alt="telegram"
                  width={24}
                  height={24}
                />
              </IconButton>
              <IconButton
                component="a"
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=rathna.chh@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/icons/gmail.svg"
                  alt="gmail"
                  width={24}
                  height={24}
                />
              </IconButton>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutMe;
