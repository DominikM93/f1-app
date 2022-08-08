import { Route, Routes } from "react-router-dom";
import { SeasonsProvider } from "./components/Context/SeasonsContext";
import { StyledBoxContainer, StyledBoxWrap } from "./styles";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import DriversContainer from "./components/Drivers/DriversContainer";
import CircuitsContainer from "./components/Circuits/CircuitsContainer";
import ConstructorsContainer from "./components/Constructors/ConstructorsContainer";
import CurrentStandingsContainer from "./components/CurrentStandings/CurrentStandingsContainer";
import DriverContainer from "./components/Driver/DriverContainer";
import CircuitContainer from "./components/Circuit/CircuitContainer";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";

function App() {
  return (
    <StyledBoxContainer>
      <SeasonsProvider>
        <NavbarContainer />
        <StyledBoxWrap>
          <Routes>
            <Route path="/drivers">
              <Route index element={<DriversContainer />} />
              <Route path=":id" element={<DriverContainer />} />
            </Route>
            <Route path="/circuits">
              <Route index element={<CircuitsContainer />} />
              <Route path=":name" element={<CircuitContainer />} />
            </Route>
            <Route path="/constructors" element={<ConstructorsContainer />} />
            <Route
              path="/currentStandings"
              element={<CurrentStandingsContainer />}
            />
            <Route path="/" element={<Home />} />{" "}
          </Routes>
        </StyledBoxWrap>
        <Footer />
      </SeasonsProvider>
    </StyledBoxContainer>
  );
}

export default App;
