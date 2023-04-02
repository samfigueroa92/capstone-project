//DEPENDENCIES
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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
  setReviewFormRevealed,
}) => {
  let navigate = useNavigate();

  const { id } = useParams();
  const [edit, setEdit] = useState();
  const [editedReview, setEditedReview] = useState({
    reviewer_id: "",
    reviewed_id: "",
    reviewer_img: "",
    description: "",
    post_date: "",
    request_id: 0,
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
  });

  //Date Converter
  const dateConverter = (specifiedDate) => {
    const fullYear = specifiedDate?.getFullYear();
    const month = specifiedDate?.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2, "0");
    const currentDate = specifiedDate?.getDate();
    const paddedDate = currentDate.toString().padStart(2, "0");

    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`;

    return formattedDate;
  };
  let currentDate = dateConverter(new Date());
  //Variable Declared and new Date passed in to format for backend

  // const [user, setUser] = useState({})

  //Need Explanation ?
  useEffect(() => {
    axios.get(`${API}/reviews/${id}`).then((res) => {
      const reviews = res.data;
      // console.log(reviews);
      //find review with id and userId
      const currentReview = reviews.find(
        (review) =>
          review.request_id === Number(id) &&
          review.reviewer_id === applicationUser.uuid
      );
      // console.log(currentReview)
      
      //if it exist
      if (currentReview) {
        setEditedReview(currentReview);
        setEdit(true);
      } else {
        setEdit(false);
      }
    });
  }, []);

  console.log(editedReview)

  // console.log(editedReview);
  // console.log(newReview)

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
      post_date: currentDate,
    });
    setEditedReview({
      ...editedReview, 
      description: e.target.value
    })
  };

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
                <StarRating />
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
              SUBMIT
            </Button>
          </div>
        </div>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default RequestReviewForm;