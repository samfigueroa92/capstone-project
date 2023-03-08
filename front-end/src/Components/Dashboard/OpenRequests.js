//Components
import RequestCard from "./RequestCard";
import ZeroRequests from "./ZeroRequests";

//CSS
import "./OpenRequests.css";

const OpenRequests = ({ openRequests, date }) => {

  const dateConverter = (specifiedDate) => {

    const fullYear = specifiedDate?.getFullYear();
    const month = specifiedDate?.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2,'0');
    const currentDate = specifiedDate?.getDate()
    const paddedDate = currentDate.toString().padStart(2,'0')

    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`
    
    return formattedDate;
  };


  let currentDate = dateConverter(new Date());
  let selectedCalendarDate = dateConverter(date);

  let requestFilter = openRequests.filter((request)=> selectedCalendarDate === currentDate ? request.req_date >= currentDate : selectedCalendarDate === request.req_date ).map((request)=> <RequestCard key={request.id} request={request} />);
 
  return (
    <>
    <h3 className="head">Open Requests</h3>
    <div className="open-requests">
        {requestFilter.length > 0 ? requestFilter : <ZeroRequests />}
    </div>
    </>
  );
};
export default OpenRequests;

