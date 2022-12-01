import React, { useState, useEffect } from "react";

//Component Import
import SidebarNav from "./SidebarNav";
import RequestCard from "./RequestCard";

//CSS Imports
import "./OpenRequestPage.css";

const OpenRequestPage = ({date, setDate, requests}) => {
  const [value, setValue] = useState('');

    useEffect(()=>{
            if(date){
                setValue((date.getFullYear()+"-"+ (date.getMonth() + 1)+"-"+ date.getDate()))
            }
        },[date])
    

  requests.sort((a, b) => a.req_date - b.req_date);
  console.log(date)

  // Location Needs to be changed per UseState of UsersProfile location
  const neighborhood = requests.map((request) => (!request.assigned && (request.req_date >= value)) ? <RequestCard key={request.id} request={request} /> : null);

  return (
    <div className="user-dashboard">
      <SidebarNav setDate ={setDate} />
      <div className="main-page">
        <h3>Open Request</h3>
        <div className="open-request-page">{neighborhood}</div>
      </div>
    </div>
  );
};

export default OpenRequestPage;
