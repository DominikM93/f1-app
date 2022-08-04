import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const NavbarContainer = () => {
  const location = useLocation();

  let show = true;
  const pathname = location.pathname;

  if (pathname === "/currentStandings") show = false;

  if (pathname.includes("/drivers") && pathname.length > 9) {
    show = false;
  }

  return <Navbar show={show} />;
};

export default NavbarContainer;
