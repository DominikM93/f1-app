import { render, screen } from "@testing-library/react";
import DriversContainer from "./DriversContainer";
import { SeasonsProvider } from "../Context/SeasonsContext";
import { BrowserRouter } from "react-router-dom";

const MockDrivers = () => {
  return (
    <BrowserRouter>
      <SeasonsProvider>
        <DriversContainer />
      </SeasonsProvider>
    </BrowserRouter>
  );
};

test("test1", async () => {
  render(<MockDrivers />);
});
