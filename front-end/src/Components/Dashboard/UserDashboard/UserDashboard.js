import React, { useState } from "react";
import SidebarNav from '../SideNav/SidebarNav';
import UserDashboardFilter from "./UserDashboardFilter";


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


