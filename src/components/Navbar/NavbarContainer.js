import i18next from "i18next";
import React, { useState } from "react";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeLanguage = (code) => {
    i18next.changeLanguage(code);
    setAnchorEl(null);
  };

  const toggleDrawer = (open) => {
    setMobileOpen(open);
  };

  return (
    <Navbar
      mobileOpen={mobileOpen}
      toggleDrawer={toggleDrawer}
      open={open}
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleClose={handleClose}
      changeLanguage={changeLanguage}
    />
  );
};

export default NavbarContainer;
