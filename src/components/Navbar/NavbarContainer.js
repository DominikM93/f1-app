import React from "react";
import Navbar from "./Navbar";
import { useLocation } from "react-router-dom";

const NavbarContainer = () => {
  const location = useLocation();

  let show = true;

  if (location.pathname === "/currentStandings") show = false;

  return <Navbar show={show} />;
};

export default NavbarContainer;
