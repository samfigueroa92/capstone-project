//Dependencies
import React, { useState, useEffect } from "react";

//Components
import RequestCard from "./RequestCard";

//CSS
import "./MyRequests.css";

const MyRequests = ({ requests, date, applicationUser, stringCurrentDate }) => {
  const [value, setValue] = useState("");
  const [currentDate, setCurrentDate] = useState('')
  let count = 0;
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
      )
    }
  }, [date]);

  return (
    <div className="my-requests">
      <h3>My Requests</h3>
      <div className="my-list">
        { (currentDate === value) ? 
        requests.map((request) =>
          request.assigned &&
          request.req_date >= value &&
          applicationUser.uid === request.volunteer_id ? (
            <RequestCard request={request} />
          ) : null
        ):
        requests.map((request) =>
        request.assigned &&
        request.req_date >= value &&
        applicationUser.uid === request.volunteer_id ? (
          <RequestCard request={request} />
        ) : null)
        }
      </div>
    </div>
  );
};

export default MyRequests;
