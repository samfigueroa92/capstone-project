//Dependencies
import React, { useState, useEffect } from "react";

//Components
import RequestCard from "./RequestCard";

//CSS
import "./MyRequests.css";

const MyRequests = ({ requests, date, applicationUser }) => {
  const [value, setValue] = useState("");
  let count = 0;
  useEffect(() => {
    if (date) {
      setValue(
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    }
  }, [date]);

  return (
    <div className="my-requests">
      <h1>My Requests</h1>
      <div className="my-list">
        {requests.map((request) =>
          request.assigned &&
          request.req_date >= value &&
          applicationUser.uid === request.volunteer_id ? (
            <RequestCard request={request} />
          ) : null
        )}
      </div>
    </div>
  );
};

export default MyRequests;
