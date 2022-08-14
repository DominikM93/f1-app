import { screen, render } from "@testing-library/react";
import NavbarContainer from "./NavbarContainer";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "../Context/LanguageContext";

const MockDrivers = () => {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <NavbarContainer />
      </LanguageProvider>
    </BrowserRouter>
  );
};

test("test1", () => {
  render(<MockDrivers />);
});
