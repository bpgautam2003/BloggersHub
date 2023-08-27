import { Divider, IconButton, Toolbar, Typography, Badge } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/system";
import SideDrawer from "./SideDrawer";

const Title = styled(Typography)({
  flexGrow: 1,
  marginLeft: "15px",
});

const Tagline = styled(Typography)({
  fontSize: 20,
  textTransform: "uppercase",
  justifyContent: "center",
  fontFamily: "Montserrat",
});

export default function Header() {
  return (
    <>
      <Toolbar>
        <SideDrawer>
          <IconButton color="white">
            <MenuIcon />
          </IconButton>
        </SideDrawer>
        <Title variant="h4">Bloggers Hub</Title>

        <IconButton color="inherit" style={{ marginRight: "15px" }}>
          <Badge badgeContent={1} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>

        <IconButton color="inherit">
          <AccountCircleIcon />
        </IconButton>
      </Toolbar>

      <Divider />

      <Toolbar>
        <Tagline>Express your emotions through words!!!</Tagline>
      </Toolbar>
    </>
  );
}
