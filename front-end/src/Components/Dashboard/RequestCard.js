//Dependencies
import { Link } from "react-router-dom";

//CSS Imports
import "./RequestCard.css";

const RequestCard = ({ request }) => {
  return (
    <div className="req-card">
      <Link className="link" to={`/requests/${request.id}`}>
        <div className="request">
          <div className="req-holder">
            <div className="req-wrap">
              <div className="req-items">
                <figure className="req-fig" data-category="GoldenSolutions">
                  <img
                    className="reqImg"
                    alt="vol"
                    src="/images/volunteer3.jpeg"
                  />
                </figure>
                <div className="req-info">
                  <div>
                    <h4>{request.title}</h4>
                  </div>
                  <div className="card-text">
                    <p>{request.req_date}</p>
                  </div>
                  <div className="card-bottom">
                    <p className="assignment">
                      {request.assigned ? "Assigned" : "Pending"}
                    </p>
                    <p className="time">
                      <i className="fa-regular fa-clock clock"></i> {request.time}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default RequestCard;
