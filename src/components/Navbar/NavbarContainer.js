import React, { useState } from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const NavbarContainer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = (open) => {
    setMobileOpen(open);
  };

  const location = useLocation();

  let show = true;
  const pathname = location.pathname;

  if (pathname === "/currentStandings") show = false;

  if (pathname.includes("/drivers") && pathname.length > 9) {
    show = false;
  }

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Navbar
      show={show}
      container={container}
      mobileOpen={mobileOpen}
      toggleDrawer={toggleDrawer}
    />
  );
};

export default NavbarContainer;
