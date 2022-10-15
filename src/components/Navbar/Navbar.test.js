import { screen, render } from "@testing-library/react";
import NavbarContainer from "./NavbarContainer";
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
  const { debug } = render(<MockDrivers />);
  debug();
});
