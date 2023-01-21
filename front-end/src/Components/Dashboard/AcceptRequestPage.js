//Dependencies
import React, { useState, useEffect } from "react";

//Import Components
import SidebarNav from "./SidebarNav";
import RequestCard from "./RequestCard";

//Import CSS
import "./AcceptRequestPage.css";

const AcceptRequestPage = ({
  date,
  setDate,
  applicationUser,
  requests,
 
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
     
  
  let acceptedRequestFilter = requests.filter((request)=> selectedCalendarDate === currentDate ? request.req_date >= currentDate : selectedCalendarDate === request.req_date ).map((request)=> request.assigned  && <RequestCard key={request.id} request={request} />)


  let completedRequestFilter = requests.filter((request)=> selectedCalendarDate === currentDate ? request.req_date >= currentDate : selectedCalendarDate === request.req_date ).map((request)=> request.complete  && <RequestCard key={request.id} request={request} />)

  let pendingRequestFilter = requests.filter((request)=> selectedCalendarDate === currentDate ? request.req_date >= currentDate : selectedCalendarDate === request.req_date ).map((request)=> !request.assigned  && <RequestCard key={request.id} request={request} />)

  
  return (
    <div className="user-dashboard">
      <div className='sidebar-nav'>
      <SidebarNav setDate={setDate} date={date} applicationUser={applicationUser} />
      </div>
      <div className="main-page">
        <h3 className="accepted-request">Accepted Requests</h3>
        <div className="Accepted">
          {acceptedRequestFilter}
        </div>
        {applicationUser.user_type === "Senior" ? <h3 className="comphead">Pending Requests</h3> : null}
        {pendingRequestFilter}
        <h3 className="comphead">Completed Requests</h3>
        <div className="History">
          {completedRequestFilter}
        </div>
      </div>
    </div>
  );
};

export default AcceptRequestPage;
