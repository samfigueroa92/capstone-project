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

  const accepted = requests.map((request)=>{
    if(request.assigned && request.req_date >= value){
      return <RequestCard key={request.id} request={request}/>
    }
  })

  const acceptedspecified = requests.map((request)=>{
    if(request.assigned && request.req_date === value){
      return <RequestCard key={request.id} request={request}/>
    }
  })
  const completed = requests.map((request)=>{
    if(request.complete){
     return <RequestCard key={request.id} request={request}/>
    }
  })

  const completedspecified = requests.map((request)=>{
    if(request.complete && request.req_date === value){
     return <RequestCard key={request.id} request={request}/>
    }
  })
  const notaccepted = requests.map((request)=>{
    if(!request.assigned && request.req_date >= value){
     return <RequestCard key={request.id} request={request}/>
    }
  })
  const notacceptedspecified = requests.map((request)=>{
    if(!request.assigned && request.req_date === value){
     return <RequestCard key={request.id} request={request}/>
    }
  })
  
  return (
    <div className="user-dashboard">
      <SidebarNav setDate={setDate} applicationUser={applicationUser} />
      <div className="main-page">
        <h3 className="accepted-request">{applicationUser.user_type === "Volunteer" ? "Accepted Request" : "My Request"}</h3>
        <div className="Accepted">
          {currentDate === value ? accepted : acceptedspecified}
        </div>
      {applicationUser.user_type === "Senior" ? <div className="pending"> {currentDate === value ? notaccepted : notacceptedspecified} </div> : null}

        {/* Favorites Logic for Seniors */}
        <h3 className="comphead">Completed Request</h3>
        <div className="History">
          {currentDate === value ? completed : completedspecified}
        </div>
      </div>
    </div>
  );
};

export default AcceptRequestPage;
