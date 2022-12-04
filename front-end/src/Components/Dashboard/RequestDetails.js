//Dependencies
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

//CSS
import "./RequestDetails.css";

//Components
import SidebarNav from "./SidebarNav";

const RequestDetails = ({ setDate, date, applicationUser }) => {
  setDate("");
  const [user, setUser] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  const API = process.env.REACT_APP_BACKEND_API_KEY;

  // GET A USER DETAILS VOLUNTEER OR ELDER REQUEST
  useEffect(() => {
    axios.get(`${API}/requests/help_req/${id}`).then((response) => {
      setUser(response.data);
    });
  }, [id, navigate, API]);

  return (
    <div className="details">
      <div className="sidebar-Nav">
        <SidebarNav setDate={setDate} date={date} applicationUser={applicationUser} />
      </div>
      <div className="cards">
        <h1>REQUESTS DETAILS</h1>
        <div className="card-holder">
          <div className="card-wrap">
            <div className="card-items">
              <figure className="card-fig" data-category="GoldenSolutions">
                <img
                  className="cardImg"
                  alt="vol"
                  src="/images/volunteer3.jpeg"
                />
              </figure>
              <div className="info">
                <h5 className="card-text">
                  {" "}
                  Job Description: {user.description}
                </h5>
                <h4 className="card-text">Location: {user.location}</h4>
                <h4 className="card-text">Requested: {user.req_date}</h4>
                <h4 className="card-text">Time: {user.time}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div>
            <Link to="/user-dashboard">
              <button className="back">BACK</button>
            </Link>
          </div>
          <div>
            <Link to="/user-dashboard">
              <button className="accept">ACCEPT</button>
            </Link>
          </div>
          {/* <div>
        <Link to="/user-dashboard">
            <button>DECLINE</button>
        </Link>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
