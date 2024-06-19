import React from "react";
import StarRating from "./StarRating";

const Reviews = ({ reviews }) => {
  return (
    <div className="row row-cols-3 mb-2">
      {reviews.map((review) => (
        <div
          key={review.id}
          className="card text-bg-primary mb-3 me-4"
          style={{ maxWidth: "30%" }}
        >
          <div className="card-header">{review.name}</div>
          <div className="card-body">
            <h5 className="card-title">
              <StarRating rating={review.rating} />
            </h5>
            <p className="card-text">{review.review}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
