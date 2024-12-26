import { Box, IconButton, Typography } from "@mui/material";
import Image from "next/image";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        py: 3,
        background: "linear-gradient(to right, #2c3e50, #4ca1af)", // Gradient background
        color: "#fff", // White text for contrast
      }}
    >
      <Box display="flex" justifyContent="center" alignItems="center" gap={2}>
        {/* Social Links */}
        <IconButton
          component="a"
          href="https://github.com/Rathnachh"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/icons/github.svg" alt="github" width={24} height={24} />
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
          <Image src="/icons/gmail.svg" alt="gmail" width={24} height={24} />
        </IconButton>
      </Box>
      {/* Copyright */}
      <Box textAlign="center" mt={2}>
        <Typography variant="body2" sx={{ color: "#dcdcdc" }}>
          Copyright © <a href="#your-link" style={{ color: "#a0e9f1" }}>2024</a>
        </Typography>
        <Typography variant="body2" sx={{ color: "#dcdcdc" }}>
          Design and Developed By{" "}
          <a
            href="https://themewagon.com/"
            style={{ color: "#a0e9f1", textDecoration: "underline" }}
          >
            Chhuon Rathna
          </a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
