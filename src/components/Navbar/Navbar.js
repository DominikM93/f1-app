import React from "react";
import { AppBar, Typography, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import MyDrawer from "./MyDrawer";
import {
  StyledImg,
  StyledLink,
  StyledStack,
  StyledIconButton,
  StyledToolbar,
  StyledMenuItem,
} from "./styles";

const Navbar = ({ mobileOpen, toggleDrawer }) => {
  return (
    <>
      <AppBar>
        <StyledToolbar>
          <StyledStack direction="row">
            <IconButton disabled>
              <StyledImg src="/f1_icon.png" alt="f1" />
            </IconButton>
            <StyledMenuItem>
              <StyledLink to="/">
                <Typography variant="h6">Drivers</Typography>
              </StyledLink>
            </StyledMenuItem>
            <StyledMenuItem>
              <Typography variant="h6">
                <StyledLink to="/circuits">Circuits</StyledLink>
              </Typography>
            </StyledMenuItem>
            <StyledMenuItem>
              <Typography variant="h6">
                <StyledLink to="/constructors">Constructors</StyledLink>
              </Typography>
            </StyledMenuItem>
            <StyledMenuItem>
              <Typography variant="h6">
                <StyledLink to="/currentStandings">
                  Current Standings
                </StyledLink>
              </Typography>
            </StyledMenuItem>
          </StyledStack>
          <StyledIconButton onClick={() => toggleDrawer(true)}>
            <MenuIcon />
          </StyledIconButton>
        </StyledToolbar>
      </AppBar>
      <MyDrawer mobileOpen={mobileOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
