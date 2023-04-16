import Home from "./components/pages/home/Home";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Destination from "./components/pages/destination/Destination";
import NavBar from "./components/navbar/NavBar";
import Crew from "./components/pages/crew/Crew";
import Technology from "./components/pages/tecnology/Technology";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="destination" element={<Destination />} />

        <Route path="crew" element={<Crew />} />
        <Route path="technology" element={<Technology />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
