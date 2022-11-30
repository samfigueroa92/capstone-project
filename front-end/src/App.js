import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import SignUpPage from "./Components/SignUpPage";
import { UserProvider } from "./Providers/UserProviders";

//COMPONENTS
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import LoginModal from "./Components/LoginModal";
import SeniorsPage from "./Components/SeniorsPage";
import VolunteerPage from "./Components/VolunteerPage";
import OurTeam from "./Components/OurTeam";
import UserDashboard from "./Components/UserDashboard";
import OpenRequestPage from "./Components/OpenRequestPage";
import RequestDetails from "./Components/RequestDetails";
import Settings from "./Components/Settings";
import Protected from "./Components/Protected";

//CSS
import "./App.css";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  // const [value,setvalue] = (new Date())
  const [date, setDate] = useState("");
  console.log(date);
  const [applicationUser, setApplicationUser] = useState({});

  return (
    <div className="App">
      <UserProvider>
        <Router>
          <NavBar setModalOpen={setModalOpen} />
          <LoginModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setApplicationUser={setApplicationUser}
          />
          <Routes>
            <Route
              path="/open-requests"
              element={
                <Protected>
                  <OpenRequestPage date={date} setDate={setDate} />
                </Protected>
              }
            />
            <Route
              path="/user-dashboard"
              element={
                <Protected>
                  <UserDashboard
                    date={date}
                    setDate={setDate}
                    currentUser={applicationUser}
                  />
                </Protected>
              }
            />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/" element={<Home />} />
            <Route
              path="/volunteers"
              element={<VolunteerPage setModalOpen={setModalOpen} />}
            />
            <Route
              path="/seniors"
              element={<SeniorsPage setModalOpen={setModalOpen} />}
            />
            <Route
              path="/sign-up"
              element={<SignUpPage setApplicationUser={setApplicationUser} />}
            />
            <Route
              path="/user/settings"
              element={<Settings applicationUser={applicationUser} />}
            />
            <Route
              path="/requests/"
              element={
                <Protected>
                  <RequestDetails setDate={setDate} date={date} />
                </Protected>
              }
            />
          </Routes>
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
