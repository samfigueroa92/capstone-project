import React from "react";

export const Review = ({ review, applicationUser }) => {
  console.log(review);
  return (
    <div className="review">
      <p>{review.description}</p>
    </div>
  );
};
