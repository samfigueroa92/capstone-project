import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

//COMPONENTS
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import LoginModal from "./Components/LoginModal";
import SeniorsPage from "./Components/SeniorsPage";
import VolunteerPage from "./Components/VolunteerPage";

//CSS
import "./App.css"

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <Router>
        <NavBar setModalOpen={setModalOpen} />
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <Routes>
          <Route path="/" element={ <Home/> } />
          <Route path="/volunteers" element={ <VolunteerPage /> } />
          <Route path="/seniors" element={ <SeniorsPage /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
