///Dependencies
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

//CSS
import "./RequestDetails.css";

//Bootstrap
import Button from "react-bootstrap/Button";

//Components
import SidebarNav from "./SidebarNav";
import UsersInfo from "../UsersInfo/UsersInfo";

const RequestDetails = ({ setDate, date, applicationUser }) => {
  setDate("");
  const [request, setRequest] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  const API = process.env.REACT_APP_BACKEND_API_KEY;

  // GET A USER DETAILS VOLUNTEER OR ELDER REQUEST
  useEffect(() => {
    axios.get(`${API}/requests/help_req/${id}`).then((response) => {
      setRequest(response.data);
    });
  }, [id, navigate, API]);

  // const data = JSON.stringify({ req_id: id, volunteer: applicationUser.uuid });
  // const config = {
  //   method: "put",
  //   url: `${API}/requests/accept_request`,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: data,
  // };

  const missionAccepted = () => {
    axios
      .put(`${API}/requests/accept_request`, {
        volunteer: applicationUser.uuid,
        req_id: id,
      })
      .then(navigate("/user-dashboard"));
  };
  const missionFailed = () => {
    axios
      .put(`${API}/requests/reject_request`, {
        req_id: id,
      })
  };

  return (
    <div className="details">
      <div className="sidebar-Nav">
        <SidebarNav
          setDate={setDate}
          date={date}
          applicationUser={applicationUser}
        />
      </div>
      <div className="cards">
        <h3>Request Details</h3>
        <div className="card-holder">
          <div className="card-wrap">
            <div className="card-items">
              <figure className="card-fig" data-category="GoldenSolutions">
                <img
                  className="cardImg"
                  alt="vol"
                  src={
                    request.image
                      ? request.image
                      : "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"
                  }
                />
              </figure>
              <div className="card-info">
                <h5 className="card-text">
                  {" "}
                  <strong>Job Description:</strong> {request.description}
                </h5>
                <h4 className="card-text">
                  <strong>Location:</strong> {request.location}
                </h4>
                <h4 className="card-text">
                  <strong>Requested:</strong> {request.req_date}
                </h4>
                <h4 className="card-text">
                  <strong>Time:</strong> {request.time}
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div>
            <Link to="/user-dashboard">
              <Button className="back">BACK</Button>
            </Link>
          </div>
          <div>
            <Link to="/user-dashboard">
              {request.volunteer_id !== applicationUser.uuid ? (
                <Button className="accept" onClick={missionAccepted}>
                  ACCEPT
                  <UsersInfo applicationUser = {applicationUser} />
                </Button>
               
             
              ) : (
                <Button className="reject" onClick={missionFailed}>
                  REJECT
                </Button>
              )}
            </Link>
            <Link to="/user-info">See user info</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
