import React, { useState } from "react";
import Navbar from "./Navbar";

const NavbarContainer = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDrawer = (open) => {
    setMobileOpen(open);
  };

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Navbar
      container={container}
      mobileOpen={mobileOpen}
      toggleDrawer={toggleDrawer}
    />
  );
};

export default NavbarContainer;
