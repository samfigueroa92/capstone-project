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
  stringCurrentDate,
}) => {
  const [value, setValue] = useState("");
  const [currentDate, setCurrentDate] = useState("");

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

  const accepted = requests.length > 0 ? requests.map((request)=>{
    if(request.assigned && request.req_date >= value){
      return <RequestCard key={request.id} request={request}/>
    }
  }) : <p className="no-requests">No accepted requests.</p>;

  const acceptedspecified = requests.length > 0 ? requests.map((request)=>{
    if(request.assigned && request.req_date === value){
      return <RequestCard key={request.id} request={request}/>
    }
  }) : <p className="no-requests">No accepted requests.</p>;

  const completed = requests.length > 0 ? requests.map((request)=>{
    if(request.complete){
     return <RequestCard key={request.id} request={request}/>
    }
  }) : <p className="no-requests">No completed requests.</p>;

  const completedspecified = requests.length > 0 ? requests.map((request)=>{
    if(request.complete && request.req_date === value){
     return <RequestCard key={request.id} request={request}/>
    }
  }) : <p className="no-requests">No completed requests.</p>;

  const notaccepted = requests.length > 0 ? requests.map((request)=>{
    if(!request.assigned && request.req_date >= value){
     return <RequestCard key={request.id} request={request}/>
    }
  }) : <p className="no-requests">No pending requests.</p>;

  const notacceptedspecified = requests.length > 0 ? requests.map((request)=>{
    if(!request.assigned && request.req_date === value){
     return <RequestCard key={request.id} request={request}/>
    }
  }) : <p className="no-requests">No pending requests.</p>;
  
  return (
    <div className="user-dashboard">
      <div className='sidebar-nav'>
      <SidebarNav setDate={setDate} applicationUser={applicationUser} />
      </div>
      <div className="main-page">
        <h3 className="accepted-request">Accepted Requests</h3>
        <div className="Accepted">
          {currentDate === value ? accepted : acceptedspecified}
        </div>
        {applicationUser.user_type === "Senior" ? <h3 className="comphead">Pending Requests</h3> : null}
       
      {applicationUser.user_type === "Senior" ? <div className="pending"> {currentDate === value ? notaccepted : notacceptedspecified} </div> : null}

        <h3 className="comphead">Completed Requests</h3>
        <div className="History">
          {currentDate === value ? completed : completedspecified}
        </div>
      </div>
    </div>
  );
};

export default AcceptRequestPage;
