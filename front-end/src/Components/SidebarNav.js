import React, { useState } from "react";
import { Link } from "react-router-dom";

//Component Import
import CalendarView from "./CalendarView";

//CSS Import
import "./SidebarNav.css";

const SidebarNav = ({setDate}) => {
  const [userType, setUserType] = useState("volunteer");

  return (
    <div className="SideBar">
      {userType === "volunteer" ? (
        <div className="text">
          <Link to="/user-dashboard">
            <p className="header">Volunteer Dashboard</p>
            <div className="under-click"></div>
          </Link>
          <Link>
            <p>Accepted Requests</p>
            <div className="under-click"></div>
          </Link>
          <Link to="/open-requests">
            <p onClick={()=>setDate('')}>Open Requests</p>
            <div className="under-click"></div>
          </Link>
          <Link>
            <p>Achievements</p>
            <div className="under-click"></div>
          </Link>

          <Link to="/users/:id/settings">
            <p>Settings</p>
            <div className="under-click"></div>
          </Link>
        </div>
      ) : (
        <>
          <p>Senior Dashboard</p>
          <p>My Requests</p>
          <p>Volunteers</p>
          <p>Submit A Request</p>
          <p>Settings</p>
        </>
      )}
      <CalendarView setDate={setDate}/>
    </div>
  );
};

export default SidebarNav;
