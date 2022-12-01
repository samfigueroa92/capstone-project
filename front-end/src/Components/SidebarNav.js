import React, { useState } from "react";
import { Link } from "react-router-dom";

//Component Import
import CalendarView from "./CalendarView";

//CSS Import
import "./SidebarNav.css";

const SidebarNav = ({ setDate, currentUser }) => {
  //const [userType, setUserType] = useState();
  console.log({ currentUser });

  return (
    <div className="SideBar">
      <div className="text">
        <Link to="/user-dashboard">
          <p className="header">User Dashboard</p>
          <div className="under-click"></div>
        </Link>

        {/* For a volunteer, this will display a link to their accepted request. For an elder, this will be a link to post a new request */}
        {currentUser.user_type === "Volunteer" ? (
          <Link to="/accepted-requests">
            <p>Accepted Requests</p>
            <div className="under-click"></div>
          </Link>
        ) : (
          <Link to="/requests/new">
            <p>Submit a New Request</p>
            <div className="under-click"></div>
          </Link>
        )}
        {/* For a volunteer, this will display a link to the requests that are available to take on. We can replace
            this with... view all currently submitted requests for the elder user */}

        <Link to="/open-requests">
          <p>Open Requests</p>
          <div className="under-click"></div>
        </Link>

        <Link>
          <p>Achievements</p>
          <div className="under-click"></div>
        </Link>

        <Link to="/user/settings">
          <p>Settings</p>
          <div className="under-click"></div>
        </Link>
      </div>

      <div className="calender-view">
        <CalendarView setDate={setDate} />
      </div>
    </div>
  );
};

export default SidebarNav;

{
  /* <>
        <Link to="/user-dashboard">
          <p>Senior Dashboard</p>
        </Link>

        <p>My Requests</p>
        <p>Volunteers</p>
        <p>Submit A Request</p>
        <Link to="/user/settings">
          <p>Settings</p>
        </Link>
      </> */
}
