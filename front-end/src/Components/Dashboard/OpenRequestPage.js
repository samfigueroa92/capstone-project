//Dependencies
import React, { useState } from "react";

//Component Import
import SidebarNav from "./SidebarNav";
import RequestCard from "./RequestCard";

//CSS Imports
import "./OpenRequestPage.css";

const OpenRequestPage = ({
  date,
  setDate,
  applicationUser,
  openRequests
}) => {

  const dateConverter = (specifiedDate) => {

    const fullYear = specifiedDate?.getFullYear();
    const month = specifiedDate?.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2,'0');
    const currentDate = specifiedDate?.getDate();
    const paddedDate = currentDate.toString().padStart(2,'0');

    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`;
    
    return formattedDate;
  };

  let currentDate = dateConverter(new Date());
  let selectedCalendarDate = dateConverter(date);
  
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
