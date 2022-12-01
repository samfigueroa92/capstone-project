//Dependencies
import React, { useState, useEffect } from "react";

//Import Components
import SidebarNav from "./SidebarNav";

//Import CSS
import "./AcceptRequestPage.css";

const AcceptRequestPage = ({
  date,
  setDate,
  applicationUser,
  requests,
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

  const volunteerAccepted = () => {
    currentDate === value
      ? requests.map(
          (request) =>
            request.assigned &&
            request.volunteer_id === applicationUser.uuid &&
            request.req_date >= value
        )
      : requests.map(
          (request) =>
            request.assigned &&
            request.volunteer_id === applicationUser.uuid &&
            request.req_date === value
        );
  };
  const seniorAccepted = () => {
    currentDate === value
      ? requests.map(
          (request) =>
            request.assigned &&
            request.elder_id === applicationUser.uuid &&
            request.req_date >= value
        )
      : requests.map(
          (request) =>
            request.assigned &&
            request.elder_id === applicationUser.uuid &&
            request.req_date === value
        );
  };
  return (
    <div className="user-dashboard">
      <SidebarNav setDate={setDate} applicationUser={applicationUser} />
      <div className="main-page">
        <h3 className="accepted-request">{applicationUser.user_type === "Volunteer" ? "Accepted Request" : "My Request"}</h3>
        <div className="Accepted">
          {applicationUser.user_type === "Volunteer"
            ? volunteerAccepted
            : seniorAccepted}
        </div>

        {/* Favorites Logic for Seniors */}
        <h3>Completed Request</h3>
        <div className="History">
          {currentDate === value
            ? requests.map(
                (request) =>
                  request.completed &&
                  request.volunteer_id === applicationUser.uuid &&
                  value > request.req_date
              )
            : requests.map(
                (request) =>
                  request.completed &&
                  request.volunteer_id === applicationUser.uuid &&
                  value === request.req_date
              )}
        </div>
      </div>
    </div>
  );
};

export default AcceptRequestPage;
