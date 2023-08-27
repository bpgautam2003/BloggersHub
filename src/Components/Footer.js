import React from "react";
import { Typography, Link, Container } from "@mui/material";
import { palette, spacing } from "@mui/system";

export default function Footer({ description, title }) {
  return (
    <footer
      style={{
        backgroundColor: "#424242",
        marginTop: "4px",
        padding: "6px",
        height: "50px",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          {description}
        </Typography>
        <Typography variant="body2" color="inherit" align="center">
          Copyright ©{" "}
          <Link color="inherit" href="https://material-ui.com/">
            Bloggers Hub
          </Link>{" "}
          {new Date().getFullYear()}.
        </Typography>
        <Typography variant="body2" align="center">
          Made By Brahmprakash
        </Typography>
      </Container>
    </footer>
  );
}
