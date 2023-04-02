//DEPENDENCIES
import { useState, useEffect, useContext } from "react";
import axios from "axios";

//COMPONENTS
import DynamicStar from "../StarRating/DynamicStar";
import ReviewCard from "../ReviewCard/ReviewCard";
import ZeroRequests from "../ZeroRequests/ZeroRequests";

//CSS
import "./ReviewsPage.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const ReviewsPage = ({ applicationUser }) => {
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [reviewCount, setReviewCount] = useState(0);

  useEffect(() => {
    axios.get(`${API}/reviews`)
    .then(res => {
      const reviews = res.data;
      const userReviews = reviews.filter(review => review.reviewed_id === applicationUser.uuid);
      if(userReviews){
        setReviews(userReviews);
        setReviewCount(userReviews.length);
      }
    })
  }, []);

  return (
    <div className="ReviewPage">
      <div className="ReviewPage__personalInfo">
        <img
          className="ReviewPage__img"
          src={applicationUser?.profilephoto}
        />
        <br />
        <div className="ReviewPage__stars">Star Rating:</div>
        <DynamicStar ratings={ratings} setReviewCount={setReviewCount} />
        <div className="ReviewPage__count">Review Count: {reviewCount}</div>
        <div className="count__result">
          {!ratings
            ? ratings.length > 1
              ? `${ratings.length} reviews`
              : `${ratings.length} review`
            : "No Current Reviews"}
        </div>
      </div>
      <div className="ReviewPage__reviews-list">
        {reviews.length === 0 ? <ZeroRequests /> : reviews.map(review => <ReviewCard key={review.id} review={review} />)}
      </div>
    </div>
  );
};

export default ReviewsPage;
