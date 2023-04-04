///Dependencies
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { dateConverter } from "../../../../utils/dateUtils"

//CSS
import "./RequestDetails.css";

//Bootstrap
import Button from "react-bootstrap/Button";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const RequestDetails = ({
  applicationUser,
  setReviewFormRevealed,
  setEditRequestRevealed,
  iteration,
  location,
  request,
  render,
  setRender,
  reviews
}) => {
  const [showMore, setShowMore] = useState(false);

  let { id } = useParams();
  let navigate = useNavigate();

  const index = iteration[location]?.indexOf(Number(id));

  const truncateDescriptionText = () => {
    if (request.description?.length > 100) {
      let description = request.description.slice(0, 100);
      return (
        <div className="ellipsis">
          {!showMore ? (
            <p className="expand">
              {description}
              <button
                className="showDetails"
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                <SlArrowDown />
              </button>
            </p>
          ) : (
            <p>
              {request.description}
              <button
                className="showDetails"
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                <SlArrowUp />
              </button>
            </p>
          )}
        </div>
      );
    } else {
      return (
        <div className="ellipsis">
          <p>{request.description}</p>
        </div>
      );
    }
  };
  let description = truncateDescriptionText();

  const requestAccepted = () => {
    axios
      .put(`${API}/requests/accept_request`, {
        volunteer: applicationUser.uuid,
        volunteer_img: applicationUser.profilephoto,
        req_id: id,
      })
      .then(navigate("/dashboard"));
    setRender(!render);
  };

  const requestRejected = () => {
    axios
      .put(`${API}/requests/reject_request`, {
        req_id: id,
        volunteer: "",
        volunteer_img: "",
      })
      .then(navigate("/dashboard"));
    setRender(!render);
  };

  const requestCompleted = () => {
    axios.put(`${API}/requests/complete_request`, {
      req_id: id,
    })
    .then(() => navigate("/dashboard"))
    .catch((err) => console.error(err))
    setRender(!render);
  }

  let usersReviews = reviews.filter(review => review.reviewer_id === applicationUser.uuid);
 
  let currentDate = dateConverter(new Date());
  
  const renderButton = () => {
    if (applicationUser.user_type === "Volunteer") {
      if (request.volunteer_id !== applicationUser.uuid) {
        return (
          <>
            <Button className="accept" onClick={requestAccepted}>
              ACCEPT
            </Button>
          </>
        );
      } else if (request.complete) {
        if(usersReviews.length > 0){
          return (
            <>
            <Button
              className="reject"
              onClick={() => setReviewFormRevealed(true)}
            >
              EDIT REVIEW
            </Button>
          </>

          )
        }else{
          return (
            <>
              <Button
                className="reject"
                onClick={() => setReviewFormRevealed(true)}
              >
                REVIEW
              </Button>
            </>
          );

        }
      } else {
        return (
          <>
            <Button className="reject" onClick={requestRejected}>
              REJECT
            </Button>
          </>
        );
      }
    } else {
      if (request.complete && request.req_date < currentDate) {
        return (
          <>
            <Button
              className="reject"
              onClick={() => setReviewFormRevealed(true)}
            >
              REVIEW
            </Button>
          </>
        );
      } else {
        return (
          <>
            <Button className="edit" onClick={() => setEditRequestRevealed(true)}>EDIT</Button>
          </>
        );
      }
    }
  };

  return (
    <div className="layout">
      <div className="cards">
        {iteration[location] && iteration[location][index - 1] ? (
          <IoIosArrowBack
            className="center left"
            size={40}
            onClick={() =>
              navigate(`/requests/${iteration[location][index - 1]}`)
            }
          />
        ) : (
          <div></div>
        )}

        <div>
          <div className="card-holder">
            <div className="card-wrap">
              <div className="card-items-forward">
                <figure className="card-fig" data-category="GoldenSolutions">
                  <img
                    className="cardImg"
                    alt="vol"
                    src={
                      request.image ||
                      "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"
                    }
                  />
                </figure>
                <div className="card-info">
                  <h5 className="card-description">
                    <strong>{request.title}</strong>
                    <br />
                    <br />
                    <strong>Job Description:</strong>
                    {description}
                  </h5>
                  <h4 className="card-text">
                    <strong>Location: </strong>
                    {request.location}
                  </h4>
                  <p className="warning">
                    <span className="red">*</span>
                    Cancellations within 24 hours or missing your appointment
                    will result in a negative review & rating.
                  </p>
                  <Button className="complete" onClick={requestCompleted} >{request.complete ? <i class="fa-solid fa-check"></i> : <i class="fa-solid fa-x"></i>} COMPLETE</Button>
                </div>
              </div>
            </div>
          </div>
          <div className="buttons">
            <div>
              <Link to="/dashboard">
                <Button
                  className="back accept"
                  onClick={() => setRender(!render)}
                >
                  BACK
                </Button>
              </Link>
            </div>
            <div>{renderButton()}</div>
          </div>
        </div>
        {iteration[location] && iteration[location][index + 1] ? (
          <IoIosArrowForward
            className="center right"
            size={40}
            onClick={() =>
              navigate(`/requests/${iteration[location][index + 1]}`)
            }
          />
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default RequestDetails;
