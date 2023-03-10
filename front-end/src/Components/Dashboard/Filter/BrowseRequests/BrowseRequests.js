//Component Import
import RequestCard from "../RequestCard/RequestCard";
import ZeroRequests from "../ZeroRequests/ZeroRequests";

//CSS Imports
import "./BrowseRequests.css";

const BrowseRequests = ({
  date,
  applicationUser,
  openRequests,
  requestSearch
}) => {

  const dateConverter = (specifiedDate) => {

    const fullYear = specifiedDate?.getFullYear();
    const month = specifiedDate?.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2,'0');
    const currentDate = specifiedDate?.getDate();
    const paddedDate = currentDate.toString().padStart(2,'0');

    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`;
    
    return formattedDate;
  };

  openRequests?.sort((a, b) => b.req_date - a.req_date);

  const currentDate = dateConverter(new Date());
  const selectedCalendarDate = dateConverter(date);
  const search = requestSearch.toLowerCase() || "";


  //filter by date
  let requestsByDate =
    selectedCalendarDate !== currentDate
      ? openRequests.filter((request) => selectedCalendarDate === request.req_date)
      : openRequests;

  // filter by search
  let requestsBySearch = search
    ? requestsByDate.filter((request) =>
        request.title.toLowerCase().includes(search)
      )
    : requestsByDate;

  const openRequestFilter = requestsBySearch.map((request, index) => {
    if (!request.assigned) {
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
    <div className="openRequestPage__main-page">
      {openRequestFilter.length !== 0 && requestSearch !== 0 && (
        <h3 className="openRequestPage__title top">Open Request</h3>
      )}
      {openRequestFilter.length !== 0 && (
        <div className="openRequestPage__filter">{openRequestFilter}</div>
      )}
    </div>
  );
};

export default BrowseRequests;
