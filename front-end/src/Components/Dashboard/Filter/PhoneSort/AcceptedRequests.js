import { dateConverter } from "../../../../utils/dateUtils"

import RequestCard from '../RequestCard/RequestCard';

import '../BrowseRequests/BrowseRequests.css';

function AcceptedRequests({
  applicationUser,
  requests,
  requestSearch}
  
) {

let currentDate = dateConverter(new Date());
let search = requestSearch?.toLowerCase() || '';

let requestsByDate = requests?.filter((request) => currentDate <= request.req_date)

// filter by search
let requestsBySearch = requestsByDate?.filter((request) => request.title.toLowerCase().includes(search))

const acceptedRequestFilter = requestsBySearch?.map((request) => {
if (request.assigned) {
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
        {acceptedRequestFilter.length !== 0 && (
          <div
            className="openRequestPage__filter"
          >
            {acceptedRequestFilter}
          </div>
        )} 
    </>
  )
}

export default AcceptedRequests;