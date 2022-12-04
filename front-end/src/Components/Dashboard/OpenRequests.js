//Dependencies
import { useEffect, useState } from "react";

//Components
import RequestCard from "./RequestCard";

//CSS
import "./OpenRequests.css";

const OpenRequests = ({ requests, date, stringCurrentDate}) => {
  const [value, setValue] = useState("");
  const [currentDate, setCurrentDate] = useState('')
  
  useEffect(() => {
    if (date) {      
      setValue(
        date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
      );
    }
  }, [date]);

  console.log(currentDate, value);
  return (
    <div className="open-requests">
      <h1>Open Requests</h1>
      <div className="open-list">
        {requests.map((request) =>
          (!request.assigned) && (request.req_date >= value) ? (
            <RequestCard key={request.id} request={request} />
            ) : null)}
      </div>
    </div>
  );
};
export default OpenRequests;
