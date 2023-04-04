//DEPENDENCIES
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../Providers/UserProviders";
import { dateConverter } from "../../utils/dateUtils";

//COMPONENTS
import MyRequests from "./Filter/MyRequests/MyRequests";
import BrowseRequests from "./Filter/BrowseRequests/BrowseRequests";
import Achievements from "./Filter/Achievements/Achievements";
import AcceptRequestPage from "./Filter/AcceptedRequestsPage/AcceptRequestPage";
import OpenRequests from "./Filter/OpenRequests/OpenRequests";
import MyFavorites from "./Filter/MyFavorites/MyFavorites";
import NewRequestForm from "./Filter/NewRequestForm/NewRequestForm";
import Profile from "./Filter/Profile/Profile";
import PendingRequests from "./Filter/PhoneSort/PendingRequests";
import CompletedRequest from "./Filter/PhoneSort/CompletedRequests";
import AcceptedRequests from "./Filter/PhoneSort/AcceptedRequests";
import ReviewsPage from "./Filter/ReviewsPage/ReviewsPage"

// Function to query the database with the users uid, and return their posted / assigned requests
const API = process.env.REACT_APP_BACKEND_API_KEY;

const DashboardFilter = ({
  applicationUser,
  dashboardFilter,
  setDashboardFilter,
  setRequestSearch,
  requestSearch,
  setLocation,
  location,
  date,
  setIteration,
  iteration,
  completedData,
}) => {
  const [requests, setRequests] = useState([]);
  const [openRequests, setOpenRequests] = useState([]);
  const [openRequestIds, setOpenRequestsIds] = useState([]);
  const [requestIds, setRequestsIds] = useState([]);
  
  
  const user = useContext(UserContext);

  let route;

  if (applicationUser.user_type === "Volunteer") {
    route = "my_assigned_requests";
  } else {
    route = "my_created_requests";
  }

  const data = JSON.stringify({ uuid: applicationUser.uuid });

  const config = {
    method: "post",
    url: `${API}/requests/${route}`,

    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  useEffect(() => {
  axios(config).then((res) =>  setRequests(res.data));
    if (applicationUser.user_type === "Volunteer") {
      axios.get(`${API}/requests/open_requests`).then((res) => setOpenRequests(res.data));
    }
  }, [ applicationUser, dashboardFilter]);

  //sort requests by date
  requests?.sort((a, b) => b.req_date - a.req_date);
  openRequestIds?.sort((a,b)=> b.req_date - a.req_date);

  const currentDate = dateConverter(new Date());

  const selectedCalendarDate = dateConverter(date);
  const search = requestSearch.toLowerCase() || '';
  
  //filter by date
  let requestsByDate =
  selectedCalendarDate !== currentDate
  ? requests?.filter((request) => selectedCalendarDate === request.req_date)
  : requests?.filter((request) => selectedCalendarDate <= request?.req_date && !request?.complete);

  let openRequestsByDate =
  selectedCalendarDate !== currentDate
  ? openRequests?.filter((request) => selectedCalendarDate === request.req_date)
  : openRequests?.filter((request) => selectedCalendarDate <= request?.req_date);
  
  // filter by search
  let requestsBySearch = search
  ? requestsByDate?.filter((request) =>
  request.title.toLowerCase().includes(search)
  ): requestsByDate;

  let openRequestsBySearch = search
  ? openRequestsByDate?.filter((request) =>
  request.title.toLowerCase().includes(search)
  ): openRequestsByDate;

  let openIds = []
  openRequestsBySearch.map((request, index)=>{
    if(index < 4){
      openIds.push(request.id)
    }
  })
  let myIds = []
  requestsBySearch.map((request, index)=>{
    if(index < 4){
      myIds.push(request.id)
    }
  })

  useEffect(()=>{
    setIteration({...iteration, 'openRequests': openIds, 'myRequests': myIds })

  },[dashboardFilter === 'main', requestSearch])

  
  return (
    <>
      <div className="phone-userdashboard">
        <select
          className="request__select"
          onChange={(e) => setDashboardFilter(e.target.value)}
        >
          <option value="">Choose A Request Type</option>
          {applicationUser.user_type === "Volunteer" && (
            <option value="browserequests">Browse Requests</option>
          )}
          <option value="acceptedrequests">Accepted Requests</option>
          <option value="completedrequests">Completed Requests</option>
          {applicationUser.user_type !== "Volunteer" && (
            <>
              <option value="pendingrequests">Pending Requests</option>
              <option value="newrequest">New Request</option>
            </>
          )}
        </select>
        <input
          type="text"
          onChange={(e) => setRequestSearch(e.target.value)}
          value={requestSearch}
          placeholder="Search  Requests"
          className="phone__search"
        />
        <div className="phone">
          {dashboardFilter === "browserequests" && (
            <BrowseRequests
              openRequests={openRequests}
              location={location}
              setLocation={setLocation}
              date={date}
              requestSearch={requestSearch}
              applicationUser={applicationUser}
              iteration={iteration}
              setIteration={setIteration}
            />
          )}
          {dashboardFilter === "acceptedrequests" && (
            <AcceptedRequests
              requests={requests}
              requestSearch={requestSearch}
              date={date}
              applicationUser={applicationUser}
           
            />
          )}
          {dashboardFilter === "completedrequests" && (
            <CompletedRequest
              requests={requests}
              requestSearch={requestSearch}
              applicationUser={applicationUser}
            />
          )}
          {dashboardFilter === "pendingrequests" && (
            <PendingRequests
              requests={requests}
              requestSearch={requestSearch}
              applicationUser={applicationUser}
            />
          )}
          {dashboardFilter === "newrequest" && (
            <NewRequestForm
              applicationUser={applicationUser}
              setDashboardFilter={setDashboardFilter}
            />
          )}
        </div>
      </div>

      <div className="userdashboard">
        {dashboardFilter === "main" && (
          <MyRequests
            requests={requests}
            location={location}
            setLocation={setLocation}
            date={date}
            requestSearch={requestSearch}
            applicationUser={applicationUser}
            iteration={iteration}
            setIteration={setIteration}
            dashboardFilter={dashboardFilter}
            myRequestIds={requestIds}
            setMyRequestsIds={setRequestsIds}

          />
        )}
        {dashboardFilter === "main" &&
          applicationUser.user_type === "Volunteer" && (
            <OpenRequests
              openRequests={openRequests}
              location={location}
              setLocation={setLocation}
              date={date}
              requestSearch={requestSearch}
              applicationUser={applicationUser}
              iteration={iteration}
              setIteration={setIteration}
              dashboardFilter = {dashboardFilter}
              openRequestIds = { openRequestIds }
              setOpenRequestsIds = { setOpenRequestsIds }
            />
          )}
        {dashboardFilter === "main" &&
          applicationUser.user_type !== "Volunteer" && <MyFavorites />}
        {dashboardFilter === "browseRequest" &&
          applicationUser.user_type === "Volunteer" && (
            <BrowseRequests
              openRequests={openRequests}
              location={location}
              setLocation={setLocation}
              date={date}
              requestSearch={requestSearch}
              applicationUser={applicationUser}
              iteration={iteration}
              setIteration={setIteration}
              dashboardFilter={dashboardFilter}
            />
          )}
        {dashboardFilter === "achievements" &&
          applicationUser.user_type === "Volunteer" && <Achievements applicationUser={applicationUser} completedData = {completedData} />}
        {dashboardFilter === "acceptedRequest" && (
          <AcceptRequestPage
            requests={requests}
            location={location}
            setLocation={setLocation}
            date={date}
            requestSearch={requestSearch}
            applicationUser={applicationUser}
            setIteration={setIteration}
            iteration={iteration}
            dashboardFilter={dashboardFilter}
          />
        )}
        {dashboardFilter === "reviews" && (
          <ReviewsPage applicationUser={applicationUser} dashboardFilter={dashboardFilter}/>
        )}
        {dashboardFilter === "newRequest" &&
          applicationUser.user_type !== "Volunteer" && (
            <NewRequestForm
              applicationUser={applicationUser}
              setDashboardFilter={setDashboardFilter}
            />
          )}
        {dashboardFilter === "profile" && (
          <Profile
            applicationUser={applicationUser}
            setDashboardFilter={setDashboardFilter}
          />
        )}
      </div>
    </>
  );
};

export default DashboardFilter;