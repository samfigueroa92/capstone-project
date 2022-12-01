//Dependencies
import React, { useState, useEffect } from "react";

//Component Import
import SidebarNav from "./SidebarNav";
import RequestCard from "./RequestCard";

//CSS Imports
import "./OpenRequestPage.css";

const OpenRequestPage = ({
  date,
  setDate,
  requests,
  applicationUser,
  stringCurrentDate,
}) => {
  const [value, setValue] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    if (date) {
      setValue(
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
      setCurrentDate(
        stringCurrentDate.getFullYear() +
          "-" +
          (stringCurrentDate.getMonth() + 1) +
          "-" +
          stringCurrentDate.getDate()
      );
    }
  }, [date]);

  console.log(applicationUser, applicationUser.city);

  // Location Needs to be changed per UseState of UsersProfile location
  const neighborhood = requests.map((request) =>
    applicationUser.city.toLowerCase() === request.location.toLowerCase() &&
    !request.assigned && request.req_date >= value ? (
      <RequestCard key={request.id} request={request} />
    ) : null
  );
  const currentNeighborhood = requests.map((request) =>
    applicationUser.city === request.location &&
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
