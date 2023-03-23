//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
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
import Dashboard from "./Components/Dashboard/Dashboard";
import ReviewsPage from "./Components/Dashboard/Filter/ReviewsPage/ReviewsPage";

//CSS
import "./App.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dashboardFilter, setDashboardFilter] = useState('main');
  const [iteration, setIteration] = useState({});
  const [render, setRender] = useState(true);
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

  // const user = useContext(UserContext);

  let route;

  if (applicationUser.user_type === "Volunteer") {
    route = "my_assigned_requests";
  } else {
    route = "my_created_requests";
  }

  const data = JSON.stringify({ uuid: applicationUser.uuid });

  const config = {
    method: "post",
    url: `${API}/requests/${route}`,

    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  let myRequestIds = [];
  let openRequestIds = []

  useEffect(() => {

    axios(config).then((res) => {
      let requestSort = res.data?.sort((a, b) => a.req_date - b.req_date);

      for (let i = 0; i < 4; i++) {
        myRequestIds?.push(requestSort[i]?.id);
      }
    });
   
    axios(config).then((res) => {
      if (applicationUser.user_type === "Volunteer") {
        axios.get(`${API}/requests/open_requests`).then((res) => {
          let openRequestSort = res.data?.sort((a,b) => a.req_date - b.req_date)
          for(let i = 0; i < 4; i++){
            openRequestIds?.push(openRequestSort[i]?.id)
          }
          setIteration({
            ...iteration,
            openRequests: openRequestIds,
            myRequests: myRequestIds,
          });
        });
      }else{
        setIteration({
          ...iteration,
          myRequests: myRequestIds,
        });
      }
    });

  }, [applicationUser, render]);
 
  return (
    <div className="App">
      <UserProvider>
        <Router>
          <NavBar
            setModalOpen={setModalOpen}
            applicationUser={applicationUser}
            setDashboardFilter={setDashboardFilter}
            render = {render}
            setRender = {setRender}
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
                  <Dashboard
                    applicationUser={applicationUser}
                    dashboardFilter={dashboardFilter}
                    setDashboardFilter={setDashboardFilter}
                    location={location}
                    setLocation={setLocation}
                    setIteration={setIteration}
                    iteration={iteration}
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
                    location={location}
                    iteration={iteration}
                    render={render}
                    setRender={setRender}
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
                    iteration={iteration}
                    location={location}
                  />
                </Protected>
              }
            />
            <Route
              path="/reviews/:id"
              element={
                <Protected>
                  <ReviewsPage
                    applicationUser={applicationUser}
                    
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
