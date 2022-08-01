import "./App.css";
import { Route, Routes } from "react-router-dom";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import DriversContainer from "./components/Drivers/DriversContainer";
import CircuitsContainer from "./components/Circuits/CircuitsContainer";
import ConstructorsContainer from "./components/Constructors/ConstructorsContainer";

function App() {
  return (
    <div>
      <NavbarContainer />
      <Routes>
        <Route path="/" element={<DriversContainer />}></Route>
        <Route path="/circuits" element={<CircuitsContainer />}></Route>
        <Route path="/constructors" element={<ConstructorsContainer />}></Route>
      </Routes>
    </div>
  );
}

export default App;
