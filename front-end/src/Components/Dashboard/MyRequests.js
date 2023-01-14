//Dependencies
import React, { useState, useEffect } from "react";

//Components
import RequestCard from "./RequestCard";

//CSS
import "./MyRequests.css";

const MyRequests = ({ requests, date, stringCurrentDate }) => {

  let currentDate =
    stringCurrentDate.getFullYear() +
    "-" +
    ((stringCurrentDate.getMonth() + 1).toString().length === 1
      ? "0" + (stringCurrentDate.getMonth() + 1)
      : stringCurrentDate.getMonth() + 1) +
    "-" +
    (stringCurrentDate.getDate().toString().length === 1
      ? "0" + stringCurrentDate.getDate()
      : stringCurrentDate.getDate());
  

  let calendarDate =
    date?.getFullYear() +
    "-" +
    ((date?.getMonth() + 1).toString().length === 1
      ? "0" + (date?.getMonth() + 1)
      : date.getMonth() + 1) +
    "-" +
    (date?.getDate().toString().length === 1
      ? "0" + date?.getDate()
      : date?.getDate());

  const myspecifiedrequests =
    requests.length > 0 ? (
      requests.map((request) => {
        if (request.req_date === calendarDate) {
          return <RequestCard key={request.id} request={request} />;
        }
      })
    ) : (
      <p className="no-requests">No accepted requests.</p>
    );

  const myrequests =
    requests.length > 0 ? (
      requests.map((request) => {
        if (request.req_date >= calendarDate) {
          return <RequestCard key={request.id} request={request} />;
        }
      })
    ) : (
      <p className="no-requests">No accepted requests.</p>
    );

  return (
    <>
      <h3 className="head">My Requests</h3>
      <div className="my-requests">
        {currentDate === calendarDate ? myrequests : myspecifiedrequests}
      </div>
    </>
  );
};

export default MyRequests;
