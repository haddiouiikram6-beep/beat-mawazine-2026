import { Nav } from "./components/com/nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./components/style/index.css";
import { Accueil } from "./pages/Accueil";
import { Programme } from "./pages/Programme";
import { MonPlanning } from "./pages/MonPlanning";
import { Passeport } from "./pages/passeport";



function App() {
  return (
    <Router>
      <div className="  text-white min-h-screen bg-slate-950">
        <Nav />
       
        <Routes>
          <Route path="/Accueil" element={<Accueil />} />
          <Route path="/programme" element={<Programme/>} />
          <Route path="/Mon Planning" element={<MonPlanning />} />
          <Route path="/passeport" element={<Passeport/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
