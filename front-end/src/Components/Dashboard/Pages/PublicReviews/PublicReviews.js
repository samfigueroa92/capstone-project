//DEPENDENCIES
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

//COMPONENTS
import PublicReviewCard from "./PublicReviewCard";
import DynamicStar from "../../Filter/StarRating/DynamicStar";

//CSS
import "../../Filter/ReviewsPage/ReviewsPage.css";
import ZeroRequests from "../../Filter/ZeroRequests/ZeroRequests";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const PublicReviews = () => {
  let { id } = useParams();
    
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${API}/reviews`).then((res) => {
        setReviews(res.data)
    });

    axios.get(`${API}/users`)
    .then(res => setUsers(res.data))
  }, []);

  const foundUser = users.find(user => user.uuid === id);
  const foundReviews = reviews.filter(review => review.reviewed_id === id);
  console.log(foundReviews)

  const ratings = foundReviews.map(obj => {
    for(let key in obj){
      if(key === "rating"){
        return obj[key]
      }
    }
  });

  return (
    <div>
      <div className="ReviewPage">
        <div className="ReviewPage__personalInfo">
          <img
            className="ReviewPage__img"
            src={foundUser?.profilephoto}
          />
          <br />
          <div className="ReviewPage__stars">Star Rating:</div>
          <DynamicStar ratings={ratings} />
          <div className="ReviewPage__count">Review Count: {foundReviews?.length}</div>
        </div>
        <div className="ReviewPage__reviews-list">
          {foundReviews.length === 0 ? <ZeroRequests /> : foundReviews.map((review) => (
            <PublicReviewCard key={review.id} review={review} ratings={ratings} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicReviews;
