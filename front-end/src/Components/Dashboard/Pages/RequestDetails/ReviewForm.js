//DEPENDENCIES
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dateConverter } from "../../../../utils/dateUtils";

//CSS
import "./RequestDetails.css";
import StarRating from "../../Filter/StarRating/StarRating";

//Bootstrap
import Button from "react-bootstrap/Button";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const RequestReviewForm = ({
  applicationUser,
  request,
  reviews,
  setReviewFormRevealed,
}) => {
  let navigate = useNavigate();

  const { id } = useParams();
  const [edit, setEdit] = useState(false);
  const [editedReview, setEditedReview] = useState({
    reviewer_id: "",
    reviewed_id: "",
    reviewer_img: "",
    description: "",
    post_date: "",
    request_id: 0,
    rating: 0,
  });

  const [newReview, setNewReview] = useState({
    reviewer_id: applicationUser.uuid,
    reviewed_id:
      applicationUser.user_type === "Volunteer"
        ? request.elder_id
        : request.volunteer_id,
    reviewer_img: applicationUser.profilephoto,
    description: "",
    post_date: "",
    request_id: id,
    rating: 0,
  });
  
  const currentReview = reviews.find(
    (review) =>
      review.request_id === Number(id) &&
      review.reviewer_id === applicationUser.uuid
  );

  useEffect(() => {
    if (currentReview) {
      setEditedReview(currentReview);
      setEdit(true);
    } else {
      setEdit(false);
    }
    }, [])
  
  //Variable Declared and new Date passed in to format for backend
  let currentDate = dateConverter(new Date());

  const addReview = (review) => {
    axios
      .post(`${API}/reviews`, review)
      .then(() => navigate("/dashboard"))
      .catch((err) => console.error(err));
  };

  const editReview = (review, id) => {
    axios
      .put(`${API}/reviews/${id}`, review)
      .then((res) => setEditedReview(res.data))
      .then(() => navigate("/dashboard"))
      .catch((err) => console.error(err));
  };

  const handleTextReview = (e) => {
    setNewReview({
      ...newReview,
      description: e.target.value,
      post_date: currentDate
    });
    setEditedReview({
      ...editedReview, 
      description: e.target.value
    })
  };

  const handleClick = (e) => {
    setNewReview({
      ...newReview,
      rating: Number(e.target.value)
    });
    setEditedReview({
      ...editedReview, 
      rating: Number(e.target.value)
    })
  }

  console.log(editedReview)
  // console.log(newReview)

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit) {
      editReview(editedReview, id);
    } else {
      addReview(newReview);
    }
  };

  return (
    <div className="cards">
      <div className="left"></div>
      <div>
        <h3>Request Review</h3>
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
                <h5 className="card-text"> Review Rating</h5>
                <StarRating handleClick={handleClick} editedReview={editedReview} />
                <textarea
                  rows={5}
                  cols={48}
                  value={editedReview.description}
                  onChange={handleTextReview}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="buttons">
          <div>
            <Button
              className="back"
              onClick={() => {
                setReviewFormRevealed(false);
              }}
            >
              BACK
            </Button>
            <Button className="back" onClick={handleSubmit}>
              {currentReview ? "UPDATE REVIEW" : "SUBMIT"}
            </Button>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default RequestReviewForm;