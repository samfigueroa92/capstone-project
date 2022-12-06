//Dependencies
import { Link } from "react-router-dom";

//CSS Imports
import "./RequestCard.css";

const RequestCard = ({ request }) => {
  return (
    <div className="req-card-details">
       <Link className="link" to={`/requests/${request.id}`}>
        <div className="req-card">
                  <img
                    className="reqImg"
                    alt="vol"
                    src={request.image ? request.image : "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"}
                  />
        
                <div className="req-info">
              <span className="req-title">{request.title}</span>
              <span className="reqdate">{request.req_date}</span>
              <span className="assignment">{request.assigned ? "Assigned" : "Pending"}</span>
              <br/>
              <span className="reqtime"><i className="fa-regular fa-clock clock"></i>{request.time}</span>
            </div>
            <div className="our-badge">
              <span>GoldenSolutions</span>
            </div>
        </div>
       
      </Link>
    </div>
  );
};
export default RequestCard;

 {/* <div className="request">
          <div className="req-holder">
            <div className="req-wrap">
              <div className="req-items">
                <figure className="req-fig" data-category="GoldenSolutions">
                  <img
                    className="reqImg"
                    alt="vol"
                    src={request.image ? request.image : "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"}
                  />
                </figure>
                <div className="req-info">
                  <div>
                    <h4>{request.title}</h4>
                  </div>
                  <div className="card-date">
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
         </div> */}