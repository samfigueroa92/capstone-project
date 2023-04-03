import RequestCard from "../RequestCard/RequestCard";
import "../AcceptedRequestsPage/AcceptRequestPage.css";
import { dateConverter } from "../../../../utils/dateUtils"

function CompletedRequest({ applicationUser, requests, requestSearch }) {

  let currentDate = dateConverter(new Date());

  let search = requestSearch.toLowerCase() || "";


  //filter by date
  let requestsByDate = requests?.filter(
    (request) => currentDate >= request.req_date
  );

  // filter by search
  let requestsBySearch = requestsByDate?.filter((request) =>
    request.title.toLowerCase().includes(search)
  );

  const completedRequestFilter = requestsBySearch.map((request, index) => {
    if (request.complete) {
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
      {completedRequestFilter.length !== 0 && (
        <div className="openRequestPage__filter">{completedRequestFilter}</div>
      )}
    </>
  );
}

export default CompletedRequest;