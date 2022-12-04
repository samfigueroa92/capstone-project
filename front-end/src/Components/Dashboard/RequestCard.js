//Dependencies
import { Link } from "react-router-dom";
//CSS Imports
import "./RequestCard.css";
const RequestCard = ({ request }) => {
  return (
    <div className="req-card">
      <Link className="link" to={`/requests/${request.id}`}>
        <div className="card-img">
        <figure className="card-fig" data-category="GoldenSolutions">
          <img src={request.image ? request.image : "/images/volunteer3.jpeg"} alt="volunteers img"/>
          </figure>
          <div>
            <div> {request.title } </div>
            <div className="card-text">{<h4>{request.req_date}</h4>}</div>
            <div className="card-bottom">
              <h4 className="assignment">
                {request.assigned ? "Assigned" : "Pending"}
              </h4>
              <h4 className="time">
                <i className="fa-regular fa-clock clock"></i>
                {request.time}
              </h4>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default RequestCard;
