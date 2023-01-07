//Dependencies
import { useEffect, useState } from "react";

//Components
import RequestCard from "./RequestCard";

//CSS
import "./OpenRequests.css";

const OpenRequests = ({ openRequests, date, stringCurrentDate }) => {
  const [value, setValue] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // useEffect(() => {
  //   if (date) {
  //     setCurrentDate(
  //       stringCurrentDate.getFullYear() +
  //         "-" +
  //         ((stringCurrentDate.getMonth() + 1).toString().length === 1
  //           ? "0" + (setCurrentDate.getMonth() + 1)
  //           : stringCurrentDate.getMonth() + 1) +
  //         "-" +
  //         (stringCurrentDate.getDate().toString().length === 1
  //           ? "0" + (stringCurrentDate.getDate())
  //           : stringCurrentDate.getDate())
  //     );
  //     setValue(
  //       date.getFullYear() +
  //         "-" +
  //         ((date.getMonth() + 1).toString().length === 1
  //           ? "0" + (date.getMonth() + 1)
  //           : date.getMonth() + 1) +
  //         "-" +
  //         (date.getDate().toString().length === 1
  //           ? "0" + date.getDate()
  //           : date.getDate())
  //     );
  //   }
  // }, [date]);

  const specifiedrequests = openRequests.map((openRequest, index) => {
    if (openRequest.req_date === value && index <= 4) {
      return <RequestCard key={openRequest.id} request={openRequest} />;
    }
  });

  const requests = openRequests.map((openRequest, index) => {
    if (openRequest.req_date >= value && index <= 4) {
      return <RequestCard key={openRequest.id} request={openRequest} />;
    }
  });

  return (
    <>
    <h3 className="head">Open Requests</h3>
    <div className="open-requests">
      
      {/* <div className="open-list"> */}
        {currentDate === value ? requests : specifiedrequests}
      {/* </div> */}
    </div>
    </>
  );
};
export default OpenRequests;

