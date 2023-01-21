//Component Imports
import SidebarNav from "./SidebarNav";
import MyRequests from "./MyRequests";
import OpenRequests from "./OpenRequests";
import MyFavorites from "./MyFavorites";
import RequestCard from "./RequestCard";
import { useState, useEffect, useContext } from "react";
import axios from "axios";

import { UserContext } from "../../Providers/UserProviders";

//CSS Imports
import "./UserDashboard.css";

// Function to query the database with the users uid, and return their posted / assigned requests
const API = process.env.REACT_APP_BACKEND_API_KEY;

const UserDashboard = ({
  date,
  setDate,
  applicationUser,
  requests,
  setRequests,
  stringCurrentDate,
  users,
  openRequests,
  setOpenRequests,
}) => {


  const user = useContext(UserContext);

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

  useEffect(() => {
    axios(config).then((res) => setRequests(res.data));
    if (applicationUser.user_type === "Volunteer") {
      axios
        .get(`${API}/requests/open_requests`)
        .then((res) => setOpenRequests(res.data));
    }
  }, [user, applicationUser, openRequests]);

  return (
    <div className="user-dashboard">
      <div className="sidebar-nav">
        <SidebarNav setDate={setDate} date={date} applicationUser={applicationUser} />
      </div>
      <div className="requests">
        <div className="my-list">
          <MyRequests
            requests={requests}
            date={date}
           
          />
        </div>
        <div>
          {applicationUser.user_type === "Volunteer" ? (
            <OpenRequests
              date={date}
              openRequests={openRequests}
             
            />
          ) : (
            <MyFavorites users={users} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
