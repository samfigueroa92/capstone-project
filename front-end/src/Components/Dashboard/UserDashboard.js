//Component Imports
import SidebarNav from "./SidebarNav";
import MyRequests from "./MyRequests";
import OpenRequests from "./OpenRequests";
import MyFavorites from "./MyFavorites";
import RequestCard from "./RequestCard";
import { useEffect } from "react";
import axios from "axios";

//CSS Imports
import "./UserDashboard.css";

// Function to query the database with the users uid, and return their posted / assigned requests

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
  const API = process.env.REACT_APP_BACKEND_API_KEY;
  const data = JSON.stringify({ uuid: applicationUser.uuid });

  const config = {
    method: "post",
    url:
      applicationUser.user_type === "Volunteer"
        ? `${API}/requests/my_assigned_requests`
        : `${API}/requests/my_created_requests`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  useEffect(() => {
    axios(config).then((res) => setRequests(res.data));
    console.log(requests);
    axios
      .get(`${API}/requests/open_requests`)
      .then((res) => setOpenRequests(res.data));
  }, []);

  return (
    <div className="user-dashboard">
      <div className="sidebar-nav">
        <SidebarNav setDate={setDate} applicationUser={applicationUser} />
      </div>
      <div className="requests">
        <div className="my-list">
          <MyRequests
            requests={requests}
            date={date}
            stringCurrentDate={stringCurrentDate}
          />
        </div>
        <div>
          {applicationUser.user_type === "Volunteer" ? (
            <OpenRequests
              date={date}
              openRequests={openRequests}
              stringCurrentDate={stringCurrentDate}
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
