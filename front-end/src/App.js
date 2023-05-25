//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { UserProvider } from "./Providers/UserProviders";
import { dateConverter } from "./utils/dateUtils";

//COMPONENTS
import SignUpPage from "./Components/HomePage/SignUpPage";
import Home from "./Components/HomePage/Home";
import NavBar from "./Components/NavBar/NavBar";
import LoginModal from "./Components/LoginModal";
import OurTeam from "./Components/HomePage/OurTeam";
import RequestPage from "./Components/Dashboard/Pages/RequestDetails/RequestPage";
import Protected from "./Components/Protected";
import Footer from "./Components/HomePage/Footer";
import Dashboard from "./Components/Dashboard/Dashboard";
import PublicReviews from "./Components/Dashboard/Pages/PublicReviews/PublicReviews";

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
  const [completedData, setCompletedData] = useState([]);
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
  let openRequestIds = [];

  let currentDate = dateConverter(new Date());

  useEffect(() => {
    setCompletedData([]);

    axios(config).then((res) => {
      let requestSort = res.data?.sort((a, b) => a.req_date - b.req_date);
      let requestFilter = requestSort?.filter(
        (request) => currentDate <= request.req_date
      );

      let achievementFilter = res.data?.filter(
        (request) => currentDate > request.req_date && request.complete
      );

      let completedObject = {};
      for (let i = 0; i < achievementFilter.length; i++) {
        if (completedObject[achievementFilter[i].req_date]) {
          completedObject[achievementFilter[i].req_date]++;
        } else {
          completedObject[achievementFilter[i].req_date] = 1;
        }
      }

      let completedArray = [];
      for (let key in completedObject) {
        completedArray.push({ value: completedObject[key], day: key });
      }
      setCompletedData([completedArray, ...completedData]);
      for (let i = 0; i < 4; i++) {
        myRequestIds?.push(requestFilter[i]?.id);
      }
  
    });

    axios(config).then((res) => {
      if (applicationUser.user_type === "Volunteer") {
        axios.get(`${API}/requests/open_requests`).then((res) => {
          let openRequestSort = res.data?.sort(
            (a, b) => a.req_date - b.req_date
          );
          let openRequestFilter = openRequestSort?.filter(
            (request) => currentDate <= request.req_date
          );
          for (let i = 0; i < 4; i++) {
            openRequestIds?.push(openRequestFilter[i]?.id);
          }
          setIteration({
            ...iteration,
            openRequests: openRequestIds,
            myRequests: myRequestIds,
          });
        });
      } else {
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
                    completedData={completedData}
                    setCompletedData={setCompletedData}
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
              path="/reviews/:id"
              element={
                <Protected>
                  <PublicReviews />
                </Protected>
              }
            />
          </Routes>
          <Footer
            applicationUser={applicationUser}
            render={render}
            setRender={setRender}
            setDashboardFilter={setDashboardFilter}
          />
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
