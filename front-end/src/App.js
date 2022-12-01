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

//CSS
import "./App.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [date, setDate] = useState("");
  const [applicationUser, setApplicationUser] = useState({
    uuid:"",
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
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/requests`)
      .then((res) => setRequests(res.data))
      .catch((err) => console.error(err));
  }, [requests]);

  requests.sort((a, b) => a.req_date - b.req_date);

  return (
    <div className="App">
      <UserProvider>
      <Router>
        <NavBar setModalOpen={setModalOpen} />
        <LoginModal modalOpen={modalOpen} setModalOpen={setModalOpen} setApplicationUser={setApplicationUser} />
        <Routes>
          <Route path='/open-requests' element= {<Protected><OpenRequestPage date={date} setDate={setDate} requests={requests} /></Protected>}/>
          <Route path='/user-dashboard' element={ <Protected><UserDashboard date={date} setDate={setDate} applicationUser={applicationUser} requests={requests} /></Protected> }/>
          <Route path='accepted-requests' element={<Protected><AcceptRequestPage date={date} setDate={setDate} applicationUser={applicationUser} requests={requests}/></Protected>}/>
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/" element={<Home />} />
          <Route path="/volunteers" element={ <VolunteerPage /> } />
          <Route path="/seniors" element={ <SeniorsPage /> } />
          <Route path="/sign-up" element={<SignUpPage setApplicationUser={setApplicationUser}/>} />
          <Route path="/user/settings" element={<Settings applicationUser={applicationUser}/>}/>
          <Route path="/requests/new" element={<Protected><NewRequestForm /></Protected>} />
          <Route path="/requests/:id" element={<Protected><RequestDetails setDate={setDate} date={date}/></Protected>} />
        </Routes>
      </Router>
      </UserProvider>
    </div>
  );
};

export default App;
