//DEPENDENCIES
import { useState, useEffect } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { Rating } from "@mui/material";
import axios from "axios";

//CSS
import "./ReviewCard.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;


const ReviewCard = ({ review, ratings }) => {
  const { reviewer_id, reviewer_img, description, post_date } = review;
  const [reviewer, setReviewer] = useState([]);
  const [showMore, setShowMore] = useState(false);

  // const [ratings, setRating] = useState({
  //   rating: 0,
  // });

  useEffect(() => {
    axios.get(`${API}/users`)
    .then(res => {
      let reviewer = res.data.find(users => users.uuid === reviewer_id);
      setReviewer(reviewer);
    })
    .catch(err => console.error(err))
  }, []);

  const truncateReviewText = () => {
    if (description > 415) {
      let review = description.slice(0, 415);
      return (
        <div className="ellipsis">
          {showMore ? (
            <p>
              {description}
              <button
                className="showMore"
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                <SlArrowUp />
              </button>
            </p>
          ) : (
            <p>
              {review}
              <button
                className="showMore"
                onClick={() => {
                  setShowMore(!showMore);
                }}
              >
                <SlArrowDown />
              </button>
            </p>
          )}
        </div>
      );
    } else {
      return (
        <div className="ellipsis">
          <p>{description}</p>
        </div>
      );
    }
  };
  const processText = truncateReviewText();

  const ratingLength = ratings.length || 0

  let accumulator = ratings.length !== 0 ? ratings.reduce((accumulator,rating)=> (accumulator += rating)) : 0 

  const value = accumulator/ratingLength
  const valueWithDecimal = Number(value.toPrecision(2))
  
  return (
    <div className="Reviews">
      <div className="Reviews__reviewer-info">
        <div className="reviewer__img">
          <img
            className="Reviewer__profile"
            src={reviewer_img}
            alt={reviewer.firstname}
          />
        </div>
      </div>
      <div className="Reviews__review">
        <div className="Reviews-header">
        <div>{reviewer.firstname + " " + reviewer.lastname  || "Reviewer Name"}</div>
        <div></div>
        <div className="ReviewCard__date"> Date: {post_date}</div>
        </div>
        <div className="ReviewCard__rating">
          <Rating
            name="half-rating-read"
            defaultValue={valueWithDecimal || 0}
            precision={0.5}
            size="small"
            readOnly
          />
        </div>
        <br></br>
        {processText}
      </div>
    </div>
  );
};

export default ReviewCard;