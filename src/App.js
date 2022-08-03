import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import DriversContainer from "./components/Drivers/DriversContainer";
import CircuitsContainer from "./components/Circuits/CircuitsContainer";
import ConstructorsContainer from "./components/Constructors/ConstructorsContainer";
import { SeasonsProvider } from "./components/Context/SeasonsContext";

function App() {
  return (
    <div>
      <SeasonsProvider>
        <NavbarContainer />
        <Routes>
          <Route path="/" element={<DriversContainer />}></Route>
          <Route path="/circuits" element={<CircuitsContainer />}></Route>
          <Route
            path="/constructors"
            element={<ConstructorsContainer />}
          ></Route>
        </Routes>
      </SeasonsProvider>
    </div>
  );
}

export default App;
