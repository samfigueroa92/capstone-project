//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserProvider } from "./Providers/UserProviders";
import axios from "axios";

//COMPONENTS
import SignUpPage from "./Components/Dashboard/SignUpPage";
import Home from "./Components/HomePage/Home";
import NavBar from "./Components/NavBar/NavBar";
import LoginModal from "./Components/LoginModal";
import SeniorsPage from "./Components/HomePage/SeniorsPage";
import VolunteerPage from "./Components/HomePage/VolunteerPage";
import OurTeam from "./Components/HomePage/OurTeam";
import UserDashboard from "./Components/Dashboard/UserDashboard";
import OpenRequestPage from "./Components/Dashboard/OpenRequestPage";
import RequestDetails from "./Components/Dashboard/RequestDetails";
import Settings from "./Components/Dashboard/Settings";
import NewRequestForm from "./Components/Dashboard/NewRequestForm";
import Protected from "./Components/Protected";
import AcceptRequestPage from "./Components/Dashboard/AcceptRequestPage";
import Achievements from "./Components/ComingSoon/Achievements";
import Unprotected from "./Components/Unprotected";

//CSS
import "./App.css";
import PersonalPage from "./Components/HomePage/PersonalPage";


//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [stringCurrentDate, setStringCurrentDate] = useState(new Date());
  const [date, setDate] = useState("");
  const [requests, setRequests] = useState([]);
  const [openRequests, setOpenRequests] = useState([]);
  const [users, setUsers] = useState([]);
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
            <Route path="/" element={<Unprotected><Home /></Unprotected>} />
            <Route
              path="/sign-up"
              element={<Unprotected><SignUpPage setApplicationUser={setApplicationUser} /></Unprotected>}
            />
            <Route path="/volunteers" element={<Unprotected><VolunteerPage /></Unprotected>} />
            <Route path="/seniors" element={<Unprotected><SeniorsPage /></Unprotected>} />
            <Route path="/our-team" element={<Unprotected><OurTeam /></Unprotected>} />
            <Route path="/our-page/:staffMember" element={<Unprotected><PersonalPage /></Unprotected>} />
            <Route path="/achievements" element={<Achievements/>} />
            <Route
              path="/open-requests"
              element={
                <Protected>
                  <OpenRequestPage
                    date={date}
                    setDate={setDate}
                    requests={requests}
                    applicationUser={applicationUser}
                    stringCurrentDate={stringCurrentDate}
                  />
                </Protected>
              }
            />
            <Route
              path="/user-dashboard"
              element={
                <Protected>
                  <UserDashboard
                    users={users}
                    date={date}
                    setDate={setDate}
                    applicationUser={applicationUser}
                    requests={requests}
                    setRequests={setRequests}
                    stringCurrentDate={stringCurrentDate}
                    openRequests={openRequests}
                    setOpenRequests={setOpenRequests}
                  />
                </Protected>
              }
            />
            <Route
              path="/requests/new"
              element={
                <Protected>
                  <NewRequestForm
                    applicationUser={applicationUser}
                    setDate={setDate}
                  />
                </Protected>
              }
            />
            <Route
              path="/requests/:id"
              element={
                <Protected>
                  <RequestDetails
                    setDate={setDate}
                    date={date}
                    applicationUser={applicationUser}
                  />
                </Protected>
              }
            />
            <Route
              path="/user/settings"
              element={
                <Protected>
                  <Settings
                    applicationUser={applicationUser}
                    setDate={setDate}
                  />
                </Protected>
              }
            />
            <Route
              path="accepted-requests"
              element={
                <Protected>
                  <AcceptRequestPage
                    stringCurrentDate={stringCurrentDate}
                    date={date}
                    setDate={setDate}
                    applicationUser={applicationUser}
                    requests={requests}
                    setRequests={setRequests}
                  />
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
