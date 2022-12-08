const db = require("../db/dbConfig.js");

// Index -- all reviews
const getReviews = async () => {
  try {
    console.log("Listing all reviews for dev purposes");
    const reviews = await db.any("SELECT * FROM reviews ORDER BY id ASC");
    return reviews;
  } catch (error) {
    return error;
  }
};

// --Routes--

// Create review

//BRAINTHOUGHTS -
// When leaving a review - the reviewer_id should be pulled from the logged
// in user, either from applicationUser or using the UserContext hook.
// The reviewed_user_id...maybe a check on the front end, seeing what
// column the logged in user is in (elder_id or volunteer_id)
const leaveReview = async (review) => {
  try {
    console.log("Adding review to request");
    review = await db.one(
      "INSERT INTO reviews (reviewer_id, description, post_date, request_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        review.reviewer_id,
        review.reviewed_user_id,
        review.description,
        review.post_date,
        review.request_id,
      ]
    );
    return review;
  } catch (error) {
    return error;
  }
};

// Single Review
const getReview = async (id) => {
  try {
    console.log("Retreiving single review with id of " + id);
    const review = await db.one("SELECT * FROM reviews WHERE id=$1", id);
    return review;
  } catch (error) {
    return error;
  }
};

// Edit Review
const editReview = async (review, id) => {
  try {
    console.log("Editing single review with id of " + id);
    const updatedReview = await db.one(
      "UPDATE reviews SET description=$1 WHERE id=$2 RETURNING *",
      [review.description, id]
    );
    return updatedReview;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getReviews,
  getReview,
  leaveReview,
  editReview,
};
