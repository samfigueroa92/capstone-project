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
const leaveReview = async (review) => {
  try {
    console.log("Adding review to request");
    review = await db.one(
      "INSERT INTO reviews (reviewer_id, description, post_date, request_id) VALUES ($1, $2, $3, $4) RETURNING *",
      [
        review.reviewer_id,
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
