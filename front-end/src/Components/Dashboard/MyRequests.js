//Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";


//Components
import RequestCard from "./RequestCard";

//CSS
import "./MyRequests.css";

const API = process.env.REACT_APP_BACKEND_API_KEY;

const MyRequests = ({ date, applicationUser, stringCurrentDate }) => {
  const [value, setValue] = useState("");
  const [currentDate, setCurrentDate] = useState("");
  const [requests, setRequests] = useState([]);
  let count = 0;
  useEffect(() => {
    axios
      .get(`${API}/requests/my_requests`, applicationUser.uuid)
      .then((res) => setRequests(res.data))
      .catch((err) => console.log(err));


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
      // console.log(value, "--value")
      // console.log(currentDate, "current DATE")
      
  return (
    <div className="my-requests">
      <h3>My Requests</h3>
      <div className="my-list">
        {applicationUser === "Volunteer"
          ? currentDate === value
            ? requests.map((request) =>
                applicationUser.city === request.location &&
                request.assigned &&
                request.req_date >= value &&
                applicationUser.uuid === request.volunteer_id ? (
                  <RequestCard key={request.id} request={request} />
                ) : null
              )
            : requests.map((request) =>
                applicationUser.city === request.location &&
                request.assigned &&
                request.req_date >= value &&
                applicationUser.uuid === request.volunteer_id ? (
                  <RequestCard key={request.id} request={request} />
                ) : null
              )
          : currentDate === value
          ? requests.map((request) =>
              applicationUser.uuid === request.elder_id ? (
                <RequestCard key={request.id} request={request} />
              ) : null
            )
          : requests.map((request) =>
              applicationUser.uuid === request.elder_id ? (
                <RequestCard key={request.id} request={request} />
              ) : null
            )}
      </div>
    </div>
  );
};

export default MyRequests;

// request.req_date === value
