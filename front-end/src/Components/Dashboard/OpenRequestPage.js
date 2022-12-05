//Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

//Component Import
import SidebarNav from "./SidebarNav";
import RequestCard from "./RequestCard";

//CSS Imports
import "./OpenRequestPage.css";

const API = process.env.REACT_APP_BACKEND_API_KEY;

const OpenRequestPage = ({
  date,
  setDate,
  applicationUser,
  stringCurrentDate,
  openRequests
}) => {
  const [value, setValue] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  console.log(openRequests)



  useEffect(() => {
    if (date) {
      setCurrentDate(
        stringCurrentDate.getFullYear() +
          "-" +
          ((stringCurrentDate.getMonth() + 1).toString().length === 1
            ? "0" + (setCurrentDate.getMonth() + 1)
            : stringCurrentDate.getMonth() + 1) +
          "-" +
          (stringCurrentDate.getDate().toString().length === 1
            ? "0" + (stringCurrentDate.getDate())
            : stringCurrentDate.getDate())
      );
      setValue(
        date.getFullYear() +
          "-" +
          ((date.getMonth() + 1).toString().length === 1
            ? "0" + (date.getMonth() + 1)
            : date.getMonth() + 1) +
          "-" +
          (date.getDate().toString().length === 1
            ? "0" + date.getDate()
            : date.getDate())
      );
    }
  }, [date]);


  // Location Needs to be changed per UseState of UsersProfile location
  const neighborhood = openRequests.map((request) =>
    !request.assigned && request.req_date >= value ? (
      <RequestCard key={request.id} request={request} />
    ) : null
  );
  const currentNeighborhood = openRequests.map((request) =>
    !request.assigned && request.req_date === value ? (
      <RequestCard key={request.id} request={request} />
    ) : null
  );

  return (
    <div className="user-dashboard">
      <SidebarNav setDate={setDate} applicationUser={applicationUser} />
      <div className="main-page">
        <h3>Open Request</h3>
        <div className="open-request-page">
          {currentDate === value ? neighborhood : currentNeighborhood}
        </div>
      </div>
    </div>
  );
};

export default OpenRequestPage;
