//Components
import RequestCard from "../RequestCard/RequestCard";
import ZeroRequests from "../ZeroRequests/ZeroRequests";

//CSS
import "./OpenRequests.css";

const OpenRequests = ({ openRequests, date, requestSearch, applicationUser }) => {

  const search = requestSearch.toLowerCase()

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

  let openRequestIds = []
  const requestFilter = openRequests.filter((request)=> selectedCalendarDate === currentDate && request.title.toLowerCase().includes(search) ? request.req_date >= currentDate  && request.title.toLowerCase().includes(search): selectedCalendarDate === request.req_date && request.title.toLowerCase().includes(search)).map((request, index)=> {
    if(index < 4){
    openRequestIds.push(request.id)
    return <RequestCard key={request.id} request={request}  applicationUser={applicationUser}/>
  } 
})
 
  return (
    <>
    <h3 className="head">Open Requests</h3>
    <div className="openRequestPage__filter" >
      {requestFilter.length > 0 ? requestFilter : <ZeroRequests/>}
    
    </div>
    </>
  );
};
export default OpenRequests;
