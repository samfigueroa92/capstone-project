//COMPONENTS
import RequestCard from "../RequestCard/RequestCard";

//CSS
import "../AcceptedRequestsPage/AcceptRequestPage.css";

import { dateConverter } from "../../../../utils/dateUtils"

function PendingRequests({ applicationUser, requests, requestSearch }) {

  let currentDate = dateConverter(new Date());
  let search = requestSearch.toLowerCase() || '';

  let requestsByDate = requests?.filter(
    (request) => currentDate <= request.req_date
  );
  
  // filter by search
  let requestsBySearch = requestsByDate?.filter((request) =>
    request.title.toLowerCase().includes(search)
  );

  const pendingRequestFilter = requestsBySearch.map((request, index) => {
    if (!request.assigned) {
      return (
        <RequestCard
          key={request.id}
          request={request}
          applicationUser={applicationUser}
        />
      );
    }
  });

  return (
    <>
     
      {applicationUser.user_type !== "Volunteer" && (
          <div className="openRequestPage__filter">
            {pendingRequestFilter}
          </div>
        )}
    </>
  );
}

export default PendingRequests;