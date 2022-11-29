import React, { useState, useEffect } from "react";
import axios from "axios";

//Component Import
import SidebarNav from "./SidebarNav";
import RequestCard from "./RequestCard";

//CSS Imports
import "./OpenRequestPage.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const OpenRequestPage = ({date, setDate}) => {
  setDate('')
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/requests`)
      .then((res) => setRequests(res.data))
      .catch((err) => console.error(err));
  }, []);

  // requests.sort((a, b) => a.req_date - b.req_date);
  // const neighborhood = requests.map((request) =>
  //   request.location.toLowerCase() === "bronx" &&
  //   !request.assigned &&
  //   request.req_date >= date ? (
  //     <RequestCard request={request} />
  //   ) : null
  // );
  // Location Needs to be changed per UseState of UsersProfile location
  const neighborhood = requests.map((request) => (request.location.toLowerCase() === "bronx" && !request.assigned) ? <RequestCard request={request} /> : null);

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
