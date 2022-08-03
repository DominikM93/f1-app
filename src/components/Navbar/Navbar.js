import React from "react";

import { AppBar, Toolbar, Typography, Box, MenuItem } from "@mui/material";
import { MyLink, styles } from "./styles";
import { Link } from "react-router-dom";
import DropdownContainer from "../Dropdown/DropdownContainer";

const Navbar = ({ show }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ flexGrow: 3, display: "flex" }}>
          <img
            style={{ width: "80px", height: "80px" }}
            src="/f1_icon.png"
            alt="f1"
          />
          <MenuItem>
            <Typography variant="h6" component="div">
              <Link style={styles.link} to="/">
                Drivers
              </Link>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h6" component="div">
              <MyLink to="/circuits">Circuits</MyLink>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h6" component="div">
              <MyLink to="/constructors">Constructors</MyLink>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography variant="h6" component="div">
              <MyLink to="/currentStandings">Current Standings</MyLink>
            </Typography>
          </MenuItem>

          {show ? <DropdownContainer /> : ""}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
