//Dependencies
import React, { useState } from "react";
import { Link } from "react-router-dom";

//Component Import
import CalendarView from "./CalendarView";

//CSS Import
import "./SidebarNav.css";

const SidebarNav = ({ setDate }) => {
  const [userType, setUserType] = useState("volunteer");

  return (
    <div className="SideBar">
      {userType === "volunteer" ? (
        <div className="text">
          <Link to="/user-dashboard">
            <p className="header">Volunteer Dashboard</p>
            <div className="under-click"></div>
          </Link>
          <Link to ="/accepted-requests">
            <p>Accepted Requests</p>
            <div className="under-click"></div>
          </Link>
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
      ) : (
        <>
          <Link to="/user-dashboard">
            <p>Senior Dashboard</p>
          </Link>

          <p>My Requests</p>
          <p>Volunteers</p>
          <p>Submit A Request</p>
          <Link to="/user/settings">
            <p>Settings</p>
          </Link>
        </>
      )}
      <div className="calender-view">
        <CalendarView setDate={setDate} />
      </div>
    </div>
  );
};

export default SidebarNav;
