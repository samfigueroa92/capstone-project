//DEPENDENCIES
import { useState, useEffect } from "react";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { Rating } from "@mui/material";
import axios from "axios";

//CSS
import "./ReviewCard.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const ReviewCard = ({ review }) => {
  const { reviewer_id, reviewer_img, description, post_date } = review;
  const [reviewer, setReviewer] = useState([]);

  const [showMore, setShowMore] = useState(false);

  const [ratings, setRating] = useState({
    rating: 0,
  });

  useEffect(() => {
    axios.get(`${API}/users`)
    .then(res => {
      let reviewer = res.data.find(users => users.uuid === reviewer_id
      );
      
      setReviewer(reviewer);
    })
  }, []);


  // const [reviewBody, setReviewBody] =
  //   useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  //   eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
  //   fusce ut placerat orci nulla pellentesque dignissim. Ultrices gravida
  //   dictum fusce ut placerat orci nulla pellentesque dignissim. Aliquet
  //   nibh praesent tristique magna sit amet. Ipsum consequat nisl vel
  //   pretium lectus. A diam maecenas sed enim ut sem viverra aliquet eget.
  //   Ac placerat vestibulum lectus mauris ultrices eros in. Sit amet justo
  //   donec enim diam vulputate ut. A scelerisque purus semper eget duis at
  //   tellus. At consectetur lorem donec massa. Venenatis tellus in metus
  //   vulputate eu. In hac habitasse platea dictumst vestibulum rhoncus est
  //   pellentesque elit. Porta nibh venenatis cras sed felis eget velit
  //   aliquet sagittis. Orci phasellus egestas tellus rutrum tellus
  //   pellentesque. Quisque non tellus orci ac auctor augue mauris augue
  //   neque.`);

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
            src={
              review?.reviewer_img
            }
          />
        </div>
      </div>
      <div className="Reviews__review">
        <h6>{reviewer.firstname + " " + reviewer.lastname  || "Reviewer Name"}</h6>
        <div className="ReviewCard__rating">
          <Rating
            name="half-rating-read"
            defaultValue={ratings.rating || 2.5}
            precision={0.5}
            size="small"
            readOnly
          />
          <div className="ReviewCard__date">
            Date: {review.post_date || "02/04/2023"}
          </div>
        </div>
        {processText}
      </div>
    </div>
  );
};

export default ReviewCard;
