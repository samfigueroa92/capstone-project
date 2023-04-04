//DEPENDENCIES
import { useState, useEffect } from "react";
import axios from "axios";
import { dateConverter } from "../../../../utils/dateUtils"

//Component Import
import RequestCard from "../RequestCard/RequestCard";

//CSS Imports
import "./BrowseRequests.css";

const API = process.env.REACT_APP_BACKEND_API_KEY;

const BrowseRequests = ({
  date,
  applicationUser,
  openRequests,
  requestSearch,
  setLocation,
  iteration,
  setIteration,
  dashboardFilter
}) => {

  const browseIds = []
  useEffect(() => {
      if (applicationUser.user_type === "Volunteer") {
        setIteration({ ...iteration, 'browseRequests': browseIds});
      }
    }, [requestSearch, dashboardFilter]);
  
  
  openRequests?.sort((a, b) => b.req_date - a.req_date);

  const currentDate = dateConverter(new Date());
  const selectedCalendarDate = dateConverter(date);
  const search = requestSearch.toLowerCase() || "";

  //filter by date
  let requestsByDate =
    selectedCalendarDate !== currentDate
      ? openRequests.filter((request) => selectedCalendarDate === request.req_date)
      : openRequests;

  // filter by search
  let requestsBySearch = search
    ? requestsByDate.filter((request) =>
        request.title.toLowerCase().includes(search)
      )
    : requestsByDate;

  const openRequestFilter = requestsBySearch.map((request) => {
    if (!request.assigned) {
        browseIds.push(request.id)
      return (
        <RequestCard
          key={request.id}
          request={request}
          applicationUser={applicationUser}
        />
      );
    }
  })

  return (
    <div className="openRequestPage__main-page">
      {openRequestFilter.length !== 0 && requestSearch !== 0 && (
        <h3 className="openRequestPage__title top">Open Request</h3>
      )}
      {openRequestFilter.length !== 0 && (
        <div className="openRequestPage__filter" onClick={()=>setLocation('browseRequests')}>{openRequestFilter}</div>
      )}
    </div>
  );
};

export default BrowseRequests;
