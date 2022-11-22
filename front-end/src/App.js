import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

//COMPONENTS
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import LoginModal from "./Components/LoginModal";
import SeniorsPage from "./Components/SeniorsPage";
import VolunteerPage from "./Components/VolunteerPage";
import OurTeam from "./Components/OurTeam";
import VolunteerDashboard from "./Components/VolunteerDashboard";

//CSS
import "./App.css";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavBar setModalOpen={setModalOpen} />
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <Routes>
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/" element={ <Home setModalOpen={setModalOpen}/> } />
          <Route path="/volunteers" element={ <VolunteerPage setModalOpen={setModalOpen}/> } />
          <Route path="/seniors" element={ <SeniorsPage setModalOpen={setModalOpen}/> } />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
