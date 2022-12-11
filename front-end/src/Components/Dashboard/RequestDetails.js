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
import ReviewForm from "./ReviewForm";

const RequestDetails = ({
  setDate,
  date,
  applicationUser,
  stringCurrentDate,
}) => {
  setDate("");
  const [request, setRequest] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewFormRevealed, setReviewFormRevealed] = useState(false);
  let { id } = useParams();
  let navigate = useNavigate();

  const API = process.env.REACT_APP_BACKEND_API_KEY;
  const [currentDate, setCurrentDate] = useState("");
  // GET A USER DETAILS VOLUNTEER OR ELDER REQUEST
  useEffect(() => {
    axios.get(`${API}/requests/help_req/${id}`).then((response) => {
      setRequest(response.data);
      setCurrentDate(
        stringCurrentDate.getFullYear() +
          "-" +
          ((stringCurrentDate.getMonth() + 1).toString().length === 1
            ? "0" + (setCurrentDate.getMonth() + 1)
            : stringCurrentDate.getMonth() + 1) +
          "-" +
          (stringCurrentDate.getDate().toString().length === 1
            ? "0" + stringCurrentDate.getDate()
            : stringCurrentDate.getDate())
      );
    });
    axios.get(`${API}/reviews/${id}`).then((res) => setReviews(res.data));
  }, [id, navigate, API]);

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
      .then(navigate("/user-dashboard"));
  };

  console.log(currentDate);
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
                <p className="warning">
                  <span className="red">*</span> Cancellations within 24 hours
                  or missing your appointment will result in a negative review &
                  rating.
                </p>
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
            {applicationUser.user_type === "Volunteer" ? (
              request.volunteer_id !== applicationUser.uuid ? (
                <Button className="accept" onClick={missionAccepted}>
                  ACCEPT
                </Button>
              ) : request.complete && request.req_date < currentDate ? (
                <Button
                  className="reject"
                  onClick={(e) => {
                    e.preventDefault();
                    setReviewFormRevealed(true);
                  }}
                >
                  REVIEW
                </Button>
              ) : (
                <Button className="reject" onClick={missionFailed}>
                  REJECT
                </Button>
              )
            ) : (
              <Link to={`/edit/${id}`}>
                <Button className="edit">EDIT</Button>
              </Link>
            )}
          </div>
        </div>
        <div className="reviews">
          {reviewFormRevealed ? <h3>REVIEWS</h3> : null}
          {reviewFormRevealed ? (
            <ReviewForm
              request={request}
              reviews={reviews}
              setReviews={setReviews}
              currentDate={currentDate}
              applicationUser={applicationUser}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default RequestDetails;
