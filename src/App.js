import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import DriversContainer from "./components/Drivers/DriversContainer";
import CircuitsContainer from "./components/Circuits/CircuitsContainer";
import ConstructorsContainer from "./components/Constructors/ConstructorsContainer";
import CurrentStandingsContainer from "./components/CurrentStandings/CurrentStandingsContainer";
import { SeasonsProvider } from "./components/Context/SeasonsContext";

function App() {
  return (
    <div>
      <SeasonsProvider>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<DriversContainer />} />
          <Route path="/circuits" element={<CircuitsContainer />} />
          <Route path="/constructors" element={<ConstructorsContainer />} />
          <Route
            path="/currentStandings"
            element={<CurrentStandingsContainer />}
          />
        </Routes>
      </SeasonsProvider>
    </div>
  );
}

export default App;
