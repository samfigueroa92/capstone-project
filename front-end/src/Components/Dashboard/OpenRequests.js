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
      setCurrentDate(
        stringCurrentDate.getFullYear() +
          "-" +
          (stringCurrentDate.getMonth() + 1) +
          "-" +
          stringCurrentDate.getDate())
    }
  }, [date]);

  return (
    <div className="open-requests">
      <h3>Open Requests</h3>
      <div className="open-list">
        {currentDate === value ?
        requests.map((request) =>
          !request.assigned && request.req_date >= value ? (
            <RequestCard key={request.id} request={request} />
          ) : null
        ):
        requests.map((request) =>
          !request.assigned && request.req_date === value ? (
            <RequestCard key={request.id} request={request} />
          ) : null)
      }
      </div>
    </div>
  );
};
export default OpenRequests;
