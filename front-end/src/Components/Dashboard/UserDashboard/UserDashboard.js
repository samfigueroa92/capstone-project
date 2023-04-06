import React, { useState } from "react";
import SidebarNav from '../SideNav/SidebarNav';
import UserDashboardFilter from "./UserDashboardFilter";

//Component Imports
// import SidebarNav from "../SideNav/SidebarNav";
// import MyRequests from "../MyRequest/MyRequests";
// import OpenRequests from "../OpenRequest/OpenRequests";
// import MyFavorites from "../MyFavorites/MyFavorites";
// import RequestCard from "./RequestCard";
// import { useEffect, useContext } from "react";
// import axios from "axios";

// import { UserContext } from "../../../Providers/UserProviders";

//CSS Imports
import "./UserDashboard.css";

// Function to query the database with the users uid, and return their posted / assigned requests
const API = process.env.REACT_APP_BACKEND_API_KEY;

const UserDashboard = ({
  applicationUser, 
  dashboardFilter, 
  setDashboardFilter, 
  setLocation, 
  location, 
  setIteration, 
  iteration, 
  completedData, 
  requestSearch, 
  setRequestSearch
}) => {
  // const user = useContext(UserContext);
  const [date, setDate] = useState(new Date());
  //Specific to person
  const [users, setUsers] = useState([]);

  return (
    <div className="user-dashboard">
      <SidebarNav
        setDate={setDate}
        date={date}
        applicationUser={applicationUser}
        requestSearch={requestSearch}
        setRequestSearch={setRequestSearch}
        setDashboardFilter={setDashboardFilter}
        dashboardFilter = {dashboardFilter}
      />
      <UserDashboardFilter 
      applicationUser={applicationUser}
      date={date}
      requestSearch = {requestSearch}
      setRequestSearch={setRequestSearch}
      dashboardFilter={dashboardFilter}
      setDashboardFilter ={setDashboardFilter}
      setLocation={setLocation}
      location={location}
      setIteration={setIteration}
      iteration={iteration}
      completedData={completedData}

      />
    </div>

  
  );
};

export default UserDashboard;


/**
 * let route;
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

  useEffect(() => {
    axios(config).then((res) => setRequests(res.data));
    if (applicationUser.user_type === "Volunteer") {
      axios
        .get(`${API}/requests/open_requests`)
        .then((res) => setOpenRequests(res.data));
    }
  }, [user, applicationUser]);

  return (
    <div className="user-dashboard">
      <div className="sidebar-nav">
        <SidebarNav
          setDate={setDate}
          date={date}
          applicationUser={applicationUser}
          setRequestSearch={setRequestSearch}
          requestSearch={requestSearch}
        />
      </div>
      <div className="user-dashboard__main-page">
        <>
          <div className="my-list">
            <MyRequests
              requests={requests}
              date={date}
              requestSearch={requestSearch}
            />
          </div>
          <div className="requests">
            {applicationUser.user_type === "Volunteer" ? (
              <OpenRequests
                date={date}
                openRequests={openRequests}
                requestSearch={requestSearch}
              />
            ) : (
              <MyFavorites users={users} />
            )}
          </div>
        </>
      </div>
    </div>
 */
