//Dependencies
import { dateConverter } from "../../../../utils/dateUtils"

//Components
import RequestCard from "../RequestCard/RequestCard";
import ZeroRequests from "../ZeroRequests/ZeroRequests";

//CSS
import '../BrowseRequests/BrowseRequests.css'

const MyRequests = ({ 
  requests,
  date,
  requestSearch,
  applicationUser,
  setLocation,
}) => {

  //sort requests by date
  requests?.sort((a, b) => b.req_date - a.req_date);

  const currentDate = dateConverter(new Date());
  const selectedCalendarDate = dateConverter(date);
  const search = requestSearch.toLowerCase() || '';
  
  //filter by date
  let requestsByDate =
  selectedCalendarDate !== currentDate
  ? requests?.filter((request) => selectedCalendarDate === request.req_date)
  : requests?.filter((request) => selectedCalendarDate <= request?.req_date && !request?.complete);
  
  // filter by search
  let requestsBySearch = search
  ? requestsByDate?.filter((request) =>
  request.title.toLowerCase().includes(search)
  )
  : requestsByDate;
  

  const requestCards = requestsBySearch.map((request, index) => {
    if (index < 4) {
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
    <>
      <div className="openRequestPage__main-page">
        <h3 className='openRequestPage__title top'>My Requests</h3>
      </div>
      <div
        className="openRequestPage__filter "
        onClick={()=> setLocation('myRequests')}
      >
        {requestCards?.length > 0 ? (
          requestCards
        ) : (
          <ZeroRequests/>
        )}
      </div>
    </>
  );
};

export default MyRequests;
