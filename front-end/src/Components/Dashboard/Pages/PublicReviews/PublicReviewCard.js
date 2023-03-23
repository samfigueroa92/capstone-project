//DEPENDENCIES
import { useState, useEffect } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { Rating } from "@mui/material";
import axios from "axios";

//CSS
import "../../Filter/ReviewCard/ReviewCard.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const PublicReviewCard = ({ review }) => {
  const { reviewer_id, reviewer_img, description, post_date } = review;
  const [reviewer, setReviewer] = useState([]);
  const [showMore, setShowMore] = useState(false);

  const [ratings, setRating] = useState({
    rating: 0,
  });

  useEffect(() => {
    axios
      .get(`${API}/users`)
      .then((res) => {
        let reviewer = res.data.find((users) => users.uuid === reviewer_id);
        setReviewer(reviewer);
      })
      .catch((err) => console.error(err));
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

  return (
    <div className="Reviews">
      <div className="Reviews__reviewer-info">
        <div className="reviewer__img">
          <img
            className="Reviewer__profile"
            src={reviewer_img}
            alt="reviewer_img"
          />
        </div>
      </div>
      <div className="Reviews__review">
        <p>{reviewer.firstname + " " + reviewer.lastname || "Reviewer Name"}</p>
        <div className="ReviewCard__rating">
          <Rating
            name="half-rating-read"
            defaultValue={ratings.rating || 2.5}
            precision={0.5}
            size="small"
            readOnly
          />
          <div className="ReviewCard__date">
            Date: {post_date || "02/04/2023"}
          </div>
        </div>
        {processText}
      </div>
    </div>
  );
};

export default PublicReviewCard;
