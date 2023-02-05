//DEPENDENCIES
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//CSS
import "./ReviewForm.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const ReviewForm = ({ applicationUser, currentDate, request, reviews, setReviews }) => {
  const { id } = useParams();

  const [review, setReview] = useState([]);
  const [newReview, setNewReview] = useState({
    reviewer_id: applicationUser.uuid,
    description: "",
    post_date: currentDate,
    request_id: id,
  });
  const [user, setUser] = useState({})
  useEffect(() => {
    axios
      .get(`${API}/reviews/${id}`)
      .then((res) => setReview(res.data))

      if(applicationUser.user_type === 'Volunteer'){
    axios
      .get(`${API}/users/${request.elder_id}`)
      .then((res)=>setUser(res.data.payload))
      }else{
    axios
      .get(`${API}/users/${request.volunteer_id}`)
      .then((res)=>setUser(res.data.payload))
      }
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API}/reviews`, newReview);
  };
  const handleTextReview = (e) => {
    setNewReview({ ...newReview, description: e.target.value });
  };


 let filter =  reviews.find( specifiedReview => specifiedReview.reviewer_id === applicationUser.uuid)

  return (
    <div className="review">
      <img
        className="review-img"
        src={user.profilephoto}
        alt={user.firstname + " " + user.lastname}
      />
      {filter ? (
        <div key={filter.id}>
          <p>{filter.description}</p>
          <button>Edit</button>
        </div>
      ) : (
        <form className="reviewForm" onClick={handleSubmit}>
          <textarea onChange={handleTextReview} rows="3" cols="50" />
          <br></br>
          <button> Submit Review</button>
        </form>
      )}
    </div>
  );
};
export default ReviewForm;
