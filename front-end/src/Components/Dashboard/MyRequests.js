//Dependencies
import React, { useState, useEffect } from "react";

//Components
import RequestCard from "./RequestCard";

//CSS
import "./MyRequests.css";

const MyRequests = ({ requests, date }) => {
  
  console.log(requests)
  const dateConverter = (date) => {
    const fullYear = date.getFullYear();
    const month = date.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2,'0');
    const currentDate = date.getDate()
    const paddedDate = currentDate.toString().padStart(2,'0')

    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`
    
    return formattedDate
  };


  let currentDate = dateConverter(new Date());

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

  // const filterRequestBasedOnCalendarDate =  requests.filter((request)=> calendarDate === currentDate  && ? <RequestCard key={request.id} request={request} /> : )
  //filter instead
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
