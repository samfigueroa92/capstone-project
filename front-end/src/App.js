//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserProvider } from "./Providers/UserProviders";

//COMPONENTS
import SignUpPage from "./Components/HomePage/SignUpPage";
import Home from "./Components/HomePage/Home";
import NavBar from "./Components/NavBar/NavBar";
import LoginModal from "./Components/LoginModal";
import Faq from "./Components/HomePage/Faq";
import OurTeam from "./Components/HomePage/OurTeam";
import RequestPage from "./Components/Dashboard/Pages/RequestDetails/RequestPage";
import Protected from "./Components/Protected";
import EditRequest from "./Components/Dashboard/Pages/EditRequest/EditRequest";
import Footer from "./Components/HomePage/Footer";
import PersonalPage from "./Components/HomePage/PersonalPage";
import NewDashboard from "./Components/Dashboard/Dashboard"

//CSS
import "./App.css";

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dashboardFilter, setDashboardFilter] = useState('main');
  const [location, setLocation] = useState('');
  const [applicationUser, setApplicationUser] = useState({
    uuid: "",
    firstname: "",
    lastname: "",
    dob: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    zipcode: "",
    phonenumber: "",
    email: "",
    verified: false,
    user_type: "",
    profilephoto: "",
    languages: "",
    verification_type: "",
  });
 
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <NavBar
            setModalOpen={setModalOpen}
            applicationUser={applicationUser}
          />
          <LoginModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setApplicationUser={setApplicationUser}
          />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/sign-up"
              element={<SignUpPage setApplicationUser={setApplicationUser} />}
            />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/our-page/:staffMember" element={<PersonalPage />} />

            <Route
              path="/dashboard"
              element={
                <Protected>
                  <NewDashboard
                    applicationUser={applicationUser}
                    dashboardFilter={dashboardFilter}
                    setDashboardFilter={setDashboardFilter}
                    location={location}
                    setLocation={setLocation}
                  />
                </Protected>
              }
            />
            <Route
              path="/requests/:id"
              element={
                <Protected>
                  <RequestPage
                    applicationUser={applicationUser}
                    dashboardFilter={dashboardFilter}
                    setDashboardFilter={setDashboardFilter}
                  />
                </Protected>
              }
            />
            <Route
              path="/edit/:id"
              element={
                <Protected>
                  <EditRequest
                    applicationUser={applicationUser}
                    setDashboardFilter={setDashboardFilter}
                  />
                </Protected>
              }
            />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
