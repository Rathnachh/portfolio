"use client";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Dialog,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import Image from "next/image";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Hero = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      id="home"
      sx={{
        bgcolor: "grey.100",
        minHeight: "100vh",
        pt: { xs: 8, md: 10 },
      }}
    >
      <Container>
        <Grid
          container
          spacing={4}
          sx={{
            py: { xs: 4, md: 8 },
            alignItems: "center",
          }}
        >
          {/* Text Content */}
          <Grid item xs={12} md={6}>
            <Box sx={{ maxWidth: "sm" }}>
              <Typography variant="h5" color="primary" gutterBottom>
                I&apos;m
              </Typography>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: "bold",
                  mb: 1,
                }}
              >
                Chhuon Rathna
              </Typography>
              <Typography variant="h4" color="text.secondary" gutterBottom>
                Web Designer
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ mb: 4, fontSize: "1.1rem" }}
              >
                Passionate about creating beautiful and functional web
                experiences that make a difference.
              </Typography>

              <Box sx={{ display: "flex", gap: 2 }}>
                <a
                  href="/CV-Rathna.pdf" 
                  download="CV.pdf"
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<DownloadIcon />}
                    sx={{ px: 4 }}
                  >
                    Download CV
                  </Button>
                </a>
                <Button
                  onClick={handleOpen}
                  variant="outlined"
                  size="large"
                  startIcon={<ContactMailIcon />}
                  sx={{ px: 4 }}
                >
                  Contact Me
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Image */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <Paper
                elevation={4}
                sx={{
                  position: "relative",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Image
                  src="/rathna.jpg"
                  width={600}
                  height={800}
                  alt="Chhuon Rathna"
                   layout="responsive"
                />
              </Paper>
              <Box
                sx={{
                  position: "absolute",
                  top: 24,
                  right: 24,
                  width: "100%",
                  height: "100%",
                  bgcolor: "primary.light",
                  opacity: 0.1,
                  borderRadius: 4,
                  zIndex: -1,
                }}
              />
            </Box>
          </Grid>
        </Grid>
        <Dialog open={open} onClose={handleClose}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
          <DialogContent
            sx={{ mt: 4, display: "flex", flexDirection: "column" }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Image
                src="/icons/phone.png"
                alt="Phone number"
                width={24}
                height={24}
              />
              <Typography
                style={{ color: "#3b5998" }}
              >
                +855-66-456-166
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Image
                src="/icons/facebook.svg"
                alt="facebook"
                width={24}
                height={24}
              />
              <a
                href="https://www.facebook.com/chhuon.rathna.5"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3b5998" }}
              >
                facebook.com/chhuon.rathna.5
              </a>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Image
                src="/icons/telegram.svg"
                alt="telegram"
                width={24}
                height={24}
              />
              <a
                href="https://t.me/rathnaaa"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3b5998" }}
              >
                https://t.me/rathnaaa
              </a>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
              <Image
                src="/icons/gmail.svg"
                alt="gmail"
                width={24}
                height={24}
              />
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&to=rathna.chh@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#3b5998" }}
              >
                rathna.chh@gmail.com
              </a>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
};

export default Hero;
