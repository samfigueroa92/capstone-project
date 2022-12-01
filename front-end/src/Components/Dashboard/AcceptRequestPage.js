//Dependencies
import React, { useState, useEffect } from "react";

//Import Components
import SidebarNav from "./SidebarNav";

//Import CSS
import "./AcceptRequestPage.css";

const AcceptRequestPage = ({ date, setDate, applicationUser, requests }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (date) {
      setValue(
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    }
  }, [date]);

  return (
    <div className="user-dashboard">
      <SidebarNav setDate={setDate} />
      <div className="main-page">
        <h3 className="accepted-request">Accepted Request</h3>
        <div className="Accepted">
          {" "}
          {requests.map(
            (request) =>
              request.assigned &&
              request.volunteer_id === applicationUser.uuid &&
              request.req_date >= value
          )}
        </div>
        <h3>Completed Request</h3>
        <div className="History">
          {requests.map(
            (request) =>
              request.completed &&
              request.volunteer_id === applicationUser.uuid &&
              value > request.req_date
          )}
        </div>
      </div>
    </div>
  );
};

export default AcceptRequestPage;
