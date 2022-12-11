// CONFIGURATIONS
const express = require("express");
const reviews = express.Router();

// IMPORTING QUERIES
const {
  getReviews,
  getReview,
  leaveReview,
  editReview,
  getSubmittedReviews
} = require("../queries/reviews.js");

// ROUTES
// INDEX / ALL REVIEWS
reviews.get("/", async (req, res) => {
  const allReviews = await getReviews();
  console.log(allReviews)
  if (Array.isArray(allReviews)) {
    res.status(200).json(allReviews);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

reviews.get('/submitted/:id', async(req,res)=>{
  const {id} = req.params;
  const submittedReviews = await getSubmittedReviews(id)
  if(Array.isArray(submittedReviews)){
    res.status(200).json(submittedReviews)
  }else{
    res.status(500).json({error:'server error!'});
  }
})

// SHOW / SINGLE REVIEW
reviews.get("/:id", async (req, res) => {
  const { id } = req.params;
  const review = await getReview(id);
  if (review) {
    res.json(review);
  } else {
    res.status(404).json({ error: "not found!" });
  }
});

// CREATE OR LEAVE A REVIEW
reviews.post("/", async (req, res) => {
  try {
    const reviews = await leaveReview(req.body);
    res.json(reviews);
  } catch (error) {
    return error;
  }
});

// EDIT OR UPDATE A REVIEW
reviews.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedReview = await editReview(req.body, id);
  if (updatedReview.id) {
    res.status(200).json(updatedReview);
  } else {
    res.status(400).json({ error: "Your review was not updated!" });
  }
});

module.exports = reviews;