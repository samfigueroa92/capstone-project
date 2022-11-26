import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

//COMPONENTS
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import LoginModal from "./Components/LoginModal";
import SeniorsPage from "./Components/SeniorsPage";
import VolunteerPage from "./Components/VolunteerPage";
import OurTeam from "./Components/OurTeam";
import UserDashboard from "./Components/UserDashboard";
import OpenRequestPage from "./Components/OpenRequestPage";
import SignUpPage from "./Components/SignUpPage";
import { UserProvider } from "./Providers/UserProviders";

//CSS
import "./App.css";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <UserProvider>
      <Router>
        <NavBar setModalOpen={setModalOpen} />
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        <Routes>
          <Route path='/open-requests' element= {<OpenRequestPage />}/>
          <Route path='/user-dashboard' element={ <UserDashboard /> }/>
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/" element={ <Home /> } />
          <Route path="/volunteers" element={ <VolunteerPage /> } />
          <Route path="/seniors" element={ <SeniorsPage /> } />
          <Route path="/sign-up" element={<SignUpPage/>} />
        </Routes>
      </Router>
      </UserProvider>
    </div>
  );
};

export default App;
