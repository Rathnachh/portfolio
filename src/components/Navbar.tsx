"use client";
import { useState, useEffect } from "react";
import {
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";

const pages = ["Home", "About", "Skill", "Project"];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleScroll = () => {
    const sections = pages.map((page) =>
      document.getElementById(page.toLowerCase())
    );
    const offset = 100; 
    const currentSection = sections.find(
      (section) =>
        section &&
        section.getBoundingClientRect().top <= offset &&
        section.getBoundingClientRect().bottom > offset
    );

    if (currentSection) {
      setActiveSection(currentSection.id);
    }
  };

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      component="nav"
      sx={{
        position: "fixed",
        width: "100%",
        backgroundColor: "background.default",
        boxShadow: 2,
        zIndex: 1300,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: "flex",
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Image src="/rathna_2.png" width={50} height={50} alt="logo" />
          </Typography>

          {/* Mobile menu button */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="menu"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop menu */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                href={`#${page.toLowerCase()}`}
                sx={{
                  my: 2,
                  mx: 1,
                  display: "block",
                  color: activeSection === page.toLowerCase() ? "blue" : "text.primary",
                  fontWeight: activeSection === page.toLowerCase() ? "bold" : "normal",
                  "&:hover": {
                    backgroundColor: "blue",
                    color: "white",
                  },
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Drawer */}
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
        }}
      >
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
          <List>
            {pages.map((page) => (
              <ListItem
                key={page}
                component="a"
                href={`#${page.toLowerCase()}`}
                aria-label={`Navigate to ${page}`}
              >
                <ListItemText
                  primary={page}
                  sx={{
                    color: activeSection === page.toLowerCase() ? "blue" : "text.primary",
                    fontWeight: activeSection === page.toLowerCase() ? "bold" : "normal",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Navbar;
