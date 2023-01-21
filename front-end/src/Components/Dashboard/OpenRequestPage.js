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
  // stringCurrentDate,
  openRequests
}) => {

  const dateConverter = (specifiedDate) => {

    const fullYear = specifiedDate.getFullYear();
    const month = specifiedDate.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2,'0');
    const currentDate = specifiedDate.getDate()
    const paddedDate = currentDate.toString().padStart(2,'0')

    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`
    
    return formattedDate
  };

  let currentDate = dateConverter(new Date());
  let selectedCalendarDate = dateConverter(date) 


  // const [value, setValue] = useState("");
  // const [currentDate, setCurrentDate] = useState("");

  // useEffect(() => {
  //   if (date) {
  //     setCurrentDate(
  //       stringCurrentDate.getFullYear() +
  //         "-" +
  //         ((stringCurrentDate.getMonth() + 1).toString().length === 1
  //           ? "0" + (setCurrentDate.getMonth() + 1)
  //           : stringCurrentDate.getMonth() + 1) +
  //         "-" +
  //         (stringCurrentDate.getDate().toString().length === 1
  //           ? "0" + (stringCurrentDate.getDate())
  //           : stringCurrentDate.getDate())
  //     );
  //     setValue(
  //       date.getFullYear() +
  //         "-" +
  //         ((date.getMonth() + 1).toString().length === 1
  //           ? "0" + (date.getMonth() + 1)
  //           : date.getMonth() + 1) +
  //         "-" +
  //         (date.getDate().toString().length === 1
  //           ? "0" + date.getDate()
  //           : date.getDate())
  //     );
  //   }
  // }, [date]);


  // Location Needs to be changed per UseState of UsersProfile location
  const neighborhood = openRequests.map((request) =>
    !request.assigned && request.req_date >= selectedCalendarDate ? (
      <RequestCard key={request.id} request={request} />
    ) : null
  );

  const currentNeighborhood = openRequests.map((request) =>
    !request.assigned && request.req_date === selectedCalendarDate ? (
      <RequestCard key={request.id} request={request} />
    ) : null
  );

  return (
    <div className="user-dashboard">
      <div className='sidebar-nav'>
      <SidebarNav setDate={setDate} applicationUser={applicationUser} />
      </div>
      <div className="main-page">
        <h3>Open Request</h3>
        <div className="open-request-page">
          {currentDate === selectedCalendarDate ? neighborhood : currentNeighborhood}
        </div>
      </div>
    </div>
  );
};

export default OpenRequestPage;
