import React from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  MenuItem,
  IconButton,
} from "@mui/material";
import { MyLink, styles } from "./styles";
import { Link } from "react-router-dom";
import DropdownContainer from "../Dropdown/DropdownContainer";
import MenuIcon from "@mui/icons-material/Menu";
import MyDrawer from "./MyDrawer";

const Navbar = ({ show, mobileOpen, toggleDrawer }) => {
  return (
    <>
      <AppBar>
        <Box sx={{ flexGrow: 3, display: "flex" }}>
          <Toolbar>
            <IconButton disabled sx={styles.mobile}>
              <img style={styles.img} src="/f1_icon.png" alt="f1" />
            </IconButton>
            <IconButton sx={styles.menu} onClick={() => toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>

            <MenuItem>
              <Typography variant="h6" component="div" sx={styles.mobile}>
                <Link style={styles.link} to="/">
                  Drivers
                </Link>
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant="h6" component="div" sx={styles.mobile}>
                <MyLink to="/circuits">Circuits</MyLink>
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant="h6" component="div" sx={styles.mobile}>
                <MyLink to="/constructors">Constructors</MyLink>
              </Typography>
            </MenuItem>
            <MenuItem>
              <Typography variant="h6" component="div" sx={styles.mobile}>
                <MyLink to="/currentStandings">Current Standings</MyLink>
              </Typography>
            </MenuItem>
            <MenuItem sx={styles.mobile}>
              {show ? <DropdownContainer /> : ""}
            </MenuItem>
          </Toolbar>
        </Box>
      </AppBar>
      <MyDrawer mobileOpen={mobileOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

export default Navbar;
